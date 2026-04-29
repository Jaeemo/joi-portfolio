import { Link } from 'react-router-dom';
import gemPurple from '../assets/Main_page/gem_purple.png';
import gemPink from '../assets/Main_page/bead_pink.png';

const navItems = [
  {
    label: 'RGB WORK',
    to: '/rgb',
    wrapperClass: 'top-[38%] left-[38%] -translate-x-1/2 -translate-y-1/2',
    labelClass: 'bottom-full right-full mb-2 mr-2',
    arrowClass: 'rotate-[45deg]',
  },
  {
    label: 'CMYK WORK',
    to: '/cmyk',
    wrapperClass: 'top-[38%] right-[38%] translate-x-1/2 -translate-y-1/2',
    labelClass: 'bottom-full left-full mb-2 ml-2',
    arrowClass: 'rotate-[135deg]',
  },
  {
    label: 'INFO / CV',
    to: '/info',
    wrapperClass: 'bottom-[38%] left-[38%] -translate-x-1/2 translate-y-1/2',
    labelClass: 'top-full right-full mt-2 mr-2',
    arrowClass: 'rotate-[315deg]',
    labelAfterArrow: true,
  },
  {
    label: 'INSTAGRAM',
    href: 'https://instagram.com/joichoioi',
    wrapperClass: 'bottom-[38%] right-[38%] translate-x-1/2 translate-y-1/2',
    labelClass: 'top-full left-full mt-2 ml-2',
    arrowClass: 'rotate-[225deg]',
    labelAfterArrow: true,
  },
];

const pageIndexes = {
  main: 0,
  rgb: 1,
  cmyk: 2,
  info: 3,
};

const arrowStyle =
  'hero-nav-arrow text-6xl font-bold text-black text-outline-white-heavy cursor-pointer transition-transform duration-300 hover:scale-125 focus-visible:scale-125 block';
const labelStyle =
  'hero-nav-label absolute whitespace-nowrap text-3xl font-bold font-display text-black tracking-normal text-outline-pink pointer-events-none';

const HeroArrow = ({ item }) => {
  const className = `${arrowStyle} ${item.arrowClass}`;
  const content = '•◦❥◦•';

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link to={item.to} className={className}>
      {content}
    </Link>
  );
};

const HeroNavigation = ({ activePage = 'main', activeFilter = 'all', onFilterChange = null }) => {
  const activeIndex = pageIndexes[activePage] ?? 0;
  const showFilter = (activePage === 'rgb' || activePage === 'cmyk') && onFilterChange;

  return (
    <>
      {navItems.map((item) => (
        <div key={item.label} className={`hero-nav-point absolute z-30 ${item.wrapperClass}`}>
          {!item.labelAfterArrow && (
            <span className={`${labelStyle} ${item.labelClass}`}>{item.label}</span>
          )}
          <HeroArrow item={item} />
          {item.labelAfterArrow && (
            <span className={`${labelStyle} ${item.labelClass}`}>{item.label}</span>
          )}
        </div>
      ))}

      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-4 pointer-events-auto z-40">
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={activeIndex === index ? gemPink : gemPurple}
              alt="indicator"
              className={`w-7 h-7 transition-all duration-300 ${activeIndex === index ? 'scale-125 drop-shadow-md' : 'opacity-60 grayscale-[50%]'}`}
            />
          </div>
        ))}
      </div>

      {showFilter && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-8 z-40 pointer-events-auto items-center">
          <button
            type="button"
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => onFilterChange('personal')}
          >
            <img
              src={activeFilter === 'personal' || activeFilter === 'all' ? gemPink : gemPurple}
              alt="Personal Work"
              className={`w-12 h-12 transition-all duration-300 ${activeFilter === 'personal' || activeFilter === 'all' ? 'scale-110 drop-shadow-md' : 'opacity-60 grayscale-[50%] group-hover:scale-110 group-hover:grayscale-0'}`}
            />
            <span className={`text-sm font-bold mt-1 tracking-widest ${activeFilter === 'personal' || activeFilter === 'all' ? 'text-brand-pink' : 'text-gray-400 group-hover:text-gray-600'}`}>PERSONAL</span>
          </button>

          <button
            type="button"
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => onFilterChange('commercial')}
          >
            <img
              src={activeFilter === 'commercial' ? gemPink : gemPurple}
              alt="Commercial Work"
              className={`w-12 h-12 transition-all duration-300 ${activeFilter === 'commercial' ? 'scale-110 drop-shadow-md' : 'opacity-60 grayscale-[50%] group-hover:scale-110 group-hover:grayscale-0'}`}
            />
            <span className={`text-sm font-bold mt-1 tracking-widest ${activeFilter === 'commercial' ? 'text-brand-pink' : 'text-gray-400 group-hover:text-gray-600'}`}>COMMERCIAL</span>
          </button>
        </div>
      )}
    </>
  );
};

export default HeroNavigation;
