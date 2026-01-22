import React from 'react';
import { Link } from 'react-router-dom';

// Asset Imports
import gemPurple from '../assets/Main_page/gem_purple.png';
import gemPink from '../assets/Main_page/bead_pink.png';
import centerLogo from '../assets/Main_page/center_logo.png';


const Main = ({ activePage = 'main' }) => {
  // 배경 보석 데이터
  const gems = [
    { top: '10%', left: '5%', type: 0, size: 'w-10 md:w-14' },
    { top: '15%', left: '20%', type: 1, size: 'w-8 md:w-12', rotate: '45deg' },
    { top: '8%', right: '10%', type: 0, size: 'w-12 md:w-16' },
    { top: '25%', right: '25%', type: 1, size: 'w-6 md:w-10' },
    { top: '40%', left: '8%', type: 0, size: 'w-10 md:w-14' },
    { bottom: '30%', left: '15%', type: 1, size: 'w-8 md:w-12' },
    { bottom: '10%', left: '5%', type: 0, size: 'w-12 md:w-16' },
    { bottom: '15%', right: '15%', type: 1, size: 'w-10 md:w-14', rotate: '-12deg' },
    { bottom: '5%', right: '5%', type: 0, size: 'w-8 md:w-12' },
    { top: '50%', right: '5%', type: 1, size: 'w-8 md:w-12' },
    { top: '12%', left: '50%', type: 1, size: 'w-6 md:w-8' },
  ];

  // 스타일 변수
  // 버튼(화살표): 흰색 테두리 + 검은색 채우기 + 커서 포인터
  const arrowStyle = "text-4xl md:text-6xl font-bold text-black text-outline-white-heavy cursor-pointer transition-transform duration-300 hover:scale-125 block";

  // 이름표(글자): 핑크색 테두리 + 검은색 글씨 + 클릭 안됨(pointer-events-none)
  // font-weight adjusted to bold (lighter than black/impact)
  const labelStyle = "absolute whitespace-nowrap text-xl md:text-3xl font-bold font-display text-black tracking-tighter text-outline-pink pointer-events-none";

  // Page Indicator Logic
  // main -> 0, rgb -> 1, cmyk -> 2, info -> 3
  let activeIndex = 0;
  if (activePage === 'rgb') activeIndex = 1;
  else if (activePage === 'cmyk') activeIndex = 2;
  else if (activePage === 'info') activeIndex = 3;

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden flex flex-col justify-center items-center select-none font-sans z-0">

      {/* --- [배경] 보석 흩뿌리기 --- */}
      {gems.map((gem, index) => (
        <img
          key={index}
          src={gem.type === 0 ? gemPurple : gemPink}
          alt="decoration gem"
          className={`absolute opacity-90 drop-shadow-lg ${gem.size}`}
          style={{
            top: gem.top,
            left: gem.left,
            right: gem.right,
            bottom: gem.bottom,
            transform: `rotate(${gem.rotate || '0deg'})`,
            animation: `fade-in 1s ease-out ${index * 0.1}s forwards`
          }}
        />
      ))}

      {/* --- [배경] 거대 텍스트 (맨 뒤) --- */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none opacity-100">
        <h1 className="text-[15vw] leading-none font-black text-black tracking-[-0.08em]">
          {activePage === 'rgb' ? 'RGB' : activePage === 'cmyk' ? 'CMYK' : 'JOI CHOI'}
        </h1>
        <h1 className="text-[15vw] leading-none font-black text-black tracking-[-0.08em]">
          {activePage === 'rgb' || activePage === 'cmyk' ? 'WORK' : '!!!!'}
        </h1>

        {/* Subtitle / Category Label */}
        {(activePage === 'rgb' || activePage === 'cmyk') && (
          <p className="text-2xl md:text-4xl font-serif italic text-brand-pink mt-2 tracking-widest animate-fade-in">
            {activePage === 'rgb' ? 'Digital Works' : 'Printed Works'}
          </p>
        )}
      </div>

      {/* --- [중앙 캔버스] --- */}
      <div className="relative z-10 w-full h-full max-w-6xl flex items-center justify-center">

        {/* 중앙 로고 이미지 */}
        <div className="absolute z-20 pointer-events-none">
          <img src={centerLogo} alt="Center Logo" className="w-24 md:w-36 drop-shadow-2xl animate-pulse-slow" />
        </div>

        {/* --- Navigation X Layout --- */}
        {/* 1. TOP-LEFT (RGB WORK) */}
        <div className="absolute top-[38%] left-[38%] -translate-x-1/2 -translate-y-1/2 z-30">
          <span className={`${labelStyle} bottom-full right-full mb-2 mr-2`}>
            RGB WORK
          </span>
          <Link to="/rgb" className={`${arrowStyle} rotate-[45deg]`}>
            •◦❥◦•
          </Link>
        </div>

        {/* 2. TOP-RIGHT (CMYK WORK) */}
        <div className="absolute top-[38%] right-[38%] translate-x-1/2 -translate-y-1/2 z-30">
          <span className={`${labelStyle} bottom-full left-full mb-2 ml-2`}>
            CMYK WORK
          </span>
          <Link to="/cmyk" className={`${arrowStyle} rotate-[135deg]`}>
            •◦❥◦•
          </Link>
        </div>

        {/* 3. BOTTOM-LEFT (INFO / CV) */}
        <div className="absolute bottom-[38%] left-[38%] -translate-x-1/2 translate-y-1/2 z-30">
          <Link to="/info" className={`${arrowStyle} rotate-[315deg]`}>
            •◦❥◦•
          </Link>
          <span className={`${labelStyle} top-full right-full mt-2 mr-2`}>
            INFO / CV
          </span>
        </div>

        {/* 4. BOTTOM-RIGHT (INSTAGRAM) */}
        <div className="absolute bottom-[38%] right-[38%] translate-x-1/2 translate-y-1/2 z-30">
          <a href="https://instagram.com/joichoioi" target="_blank" rel="noopener noreferrer" className={`${arrowStyle} rotate-[225deg]`}>
            •◦❥◦•
          </a>
          <span className={`${labelStyle} top-full left-full mt-2 ml-2`}>
            INSTAGRAM
          </span>
        </div>

        {/* --- Jewel Page Indicators --- */}
        <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-4 pointer-events-auto z-40">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={activeIndex === index ? gemPink : gemPurple}
                alt="indicator"
                className={`w-5 h-5 md:w-7 md:h-7 transition-all duration-300 ${activeIndex === index ? 'scale-125 drop-shadow-md' : 'opacity-60 grayscale-[50%]'}`}
              />
            </div>
          ))}
        </div>

      </div>

      {/* --- Footer Email --- */}
      <a
        href="mailto:joichoi.work@gmail.com"
        className="absolute bottom-4 md:bottom-10 text-gray-400 text-xs md:text-sm hover:text-black transition-colors font-mono tracking-widest uppercase z-40 pointer-events-auto"
      >
        joichoi.work@gmail.com
      </a>

      {/* CSS Styles */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(0.95); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
        
        /* 텍스트 테두리 (검은 글씨에 핑크 테두리) */
        .text-outline-pink {
          -webkit-text-stroke: 1px #ff69b4; /* Pink Stroke */
          paint-order: stroke fill;
        }
        
        /* 화살표용 두꺼운 테두리 */
        .text-outline-white-heavy {
          -webkit-text-stroke: 3px white;
          paint-order: stroke fill;
        }

        @media (min-width: 768px) {
           .text-outline-pink { -webkit-text-stroke: 2px #ff69b4; }
           .text-outline-white-heavy { -webkit-text-stroke: 5px white; }
        }
      `}</style>
    </div>
  );
};

export default Main;