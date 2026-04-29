import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroNavigation from '../components/HeroNavigation';

// Asset Imports
import gemPurple from '../assets/Main_page/gem_purple.png';
import gemPink from '../assets/Main_page/bead_pink.png';
import centerLogo from '../assets/Main_page/center_logo.png';

const DESKTOP_HERO_WIDTH = 1152;

const getViewportSize = () => {
  if (typeof window === 'undefined') {
    return { width: DESKTOP_HERO_WIDTH, height: 720 };
  }

  return {
    width: window.innerWidth,
    height: window.visualViewport?.height || window.innerHeight,
  };
};

const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState(getViewportSize);

  useEffect(() => {
    const handleResize = () => setViewportSize(getViewportSize());

    handleResize();
    window.addEventListener('resize', handleResize);
    window.visualViewport?.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.visualViewport?.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewportSize;
};


const Main = ({ activePage = 'main', activeFilter = 'all', onFilterChange = null }) => {
  const viewportSize = useViewportSize();
  const isScaledMobileHero = viewportSize.width < 768;
  const mobileHeroScale = isScaledMobileHero ? viewportSize.width / DESKTOP_HERO_WIDTH : 1;
  const heroSceneStyle = useMemo(() => {
    if (!isScaledMobileHero) return undefined;

    return {
      width: `${DESKTOP_HERO_WIDTH}px`,
      height: `${viewportSize.height / mobileHeroScale}px`,
      transform: `translateX(-50%) scale(${mobileHeroScale})`,
    };
  }, [isScaledMobileHero, mobileHeroScale, viewportSize.height]);

  // 배경 보석 데이터
  const gems = [
    { top: '10%', left: '5%', type: 0, size: 'w-14' },
    { top: '15%', left: '20%', type: 1, size: 'w-12', rotate: '45deg' },
    { top: '8%', right: '10%', type: 0, size: 'w-16' },
    { top: '25%', right: '25%', type: 1, size: 'w-10' },
    { top: '40%', left: '8%', type: 0, size: 'w-14' },
    { bottom: '30%', left: '15%', type: 1, size: 'w-12' },
    { bottom: '10%', left: '5%', type: 0, size: 'w-16' },
    { bottom: '15%', right: '15%', type: 1, size: 'w-14', rotate: '-12deg' },
    { bottom: '5%', right: '5%', type: 0, size: 'w-12' },
    { top: '50%', right: '5%', type: 1, size: 'w-12' },
    { top: '12%', left: '50%', type: 1, size: 'w-8' },
  ];

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden flex flex-col justify-center items-center select-none font-sans z-0">
      <div
        className="hero-layout-scene absolute top-0 left-1/2 h-full w-full -translate-x-1/2"
        data-scaled={isScaledMobileHero}
        style={heroSceneStyle}
      >
        {/* --- [배경] 보석 흩뿌리기 --- */}
        {gems.map((gem, index) => (
          <img
            key={index}
            src={gem.type === 0 ? gemPurple : gemPink}
            alt="decoration gem"
            className={`hero-gem absolute opacity-90 drop-shadow-lg ${gem.size}`}
            style={{
              top: gem.top,
              left: gem.left,
              right: gem.right,
              bottom: gem.bottom,
              '--gem-rotate': gem.rotate || '0deg',
              '--gem-drift-x': `${((index % 3) - 1) * 10}px`,
              '--gem-drift-y': `${-8 - (index % 4) * 3}px`,
              '--gem-wobble': `${index % 2 === 0 ? 7 : -7}deg`,
              animation: `gem-pop-in 0.8s ease-out ${index * 0.08}s both, gem-float ${5.5 + (index % 4) * 0.7}s ease-in-out ${index * 0.18}s infinite`
            }}
          />
        ))}

        {/* --- [배경] 거대 텍스트 (맨 뒤) --- */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none opacity-100">
          <h1 className="hero-title-line text-[15vw] leading-none font-black text-black tracking-[-0.08em]">
            {activePage === 'rgb' ? 'RGB' : activePage === 'cmyk' ? 'CMYK' : 'JOI CHOI'}
          </h1>
          <h1 className="hero-title-line text-[15vw] leading-none font-black text-black tracking-[-0.08em]">
            {activePage === 'rgb' || activePage === 'cmyk' ? 'WORK' : '!!!!'}
          </h1>

          {/* Subtitle / Category Label */}
          {(activePage === 'rgb' || activePage === 'cmyk') && (
            <p className="hero-subtitle text-4xl font-serif italic text-brand-pink mt-2 tracking-widest animate-fade-in">
              {activePage === 'rgb' ? 'Digital Works' : 'Printed Works'}
            </p>
          )}
        </div>

        {/* --- [중앙 캔버스] --- */}
        <div className="relative z-10 w-full h-full max-w-6xl mx-auto flex items-center justify-center">

          {/* 중앙 로고 이미지 */}
          <Link to="/info" className="absolute z-20 cursor-pointer">
            <img src={centerLogo} alt="Center Logo" className="w-36 drop-shadow-2xl animate-pulse-slow transition-transform hover:scale-110" />
          </Link>

          <HeroNavigation activePage={activePage} activeFilter={activeFilter} onFilterChange={onFilterChange} />

        </div>

        {/* --- Footer Email --- */}
        <a
          href="mailto:joichoi.work@gmail.com"
          className="absolute bottom-20 text-gray-400 text-sm hover:text-black transition-colors font-mono tracking-widest uppercase z-40 pointer-events-auto left-1/2 -translate-x-1/2"
        >
          joichoi.work@gmail.com
        </a>
      </div>

    </div>
  );
};

export default Main;
