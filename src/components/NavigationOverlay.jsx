import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import gemPink from '../assets/bead_pink.png'; // Active indicator
import gemPurple from '../assets/gem_purple.png'; // Inactive indicator

const NavigationOverlay = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // Determine active index for jewel indicator
    // / -> 0, /rgb -> 1, /cmyk -> 2, /info -> 3
    let activeIndex = 0;
    if (currentPath === '/rgb') activeIndex = 1;
    else if (currentPath === '/cmyk') activeIndex = 2;
    else if (currentPath === '/info') activeIndex = 3;

    // Shared Styles from Main.jsx
    const arrowStyle = "text-4xl md:text-6xl font-bold text-black text-outline-white-heavy cursor-pointer transition-transform duration-300 hover:scale-125 block";
    const labelStyle = "absolute whitespace-nowrap text-xl md:text-3xl font-light font-display text-black tracking-tighter text-outline-pink pointer-events-none";

    return (
        <>
            {/* --- Navigation X Layout (Fixed Overlay) --- */}
            <div className="fixed inset-0 z-50 pointer-events-none">
                {/* We need pointer-events-auto on the interactive elements */}

                {/* 1. TOP-LEFT (RGB WORK) */}
                <div className="absolute top-[38%] left-[38%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                    <span className={`${labelStyle} bottom-full right-full mb-2 mr-2`}>
                        RGB WORK
                    </span>
                    <Link to="/rgb" className={`${arrowStyle} rotate-[45deg]`}>
                        •◦❥◦•
                    </Link>
                </div>

                {/* 2. TOP-RIGHT (CMYK WORK) */}
                <div className="absolute top-[38%] right-[38%] translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                    <span className={`${labelStyle} bottom-full left-full mb-2 ml-2`}>
                        CMYK WORK
                    </span>
                    <Link to="/cmyk" className={`${arrowStyle} rotate-[135deg]`}>
                        •◦❥◦•
                    </Link>
                </div>

                {/* 3. BOTTOM-LEFT (INFO / CV) */}
                <div className="absolute bottom-[38%] left-[38%] -translate-x-1/2 translate-y-1/2 pointer-events-auto">
                    <Link to="/info" className={`${arrowStyle} rotate-[315deg]`}>
                        •◦❥◦•
                    </Link>
                    <span className={`${labelStyle} top-full right-full mt-2 mr-2`}>
                        INFO / CV
                    </span>
                </div>

                {/* 4. BOTTOM-RIGHT (INSTAGRAM) */}
                <div className="absolute bottom-[38%] right-[38%] translate-x-1/2 translate-y-1/2 pointer-events-auto">
                    <a href="https://instagram.com/joichoioi" target="_blank" rel="noopener noreferrer" className={`${arrowStyle} rotate-[225deg]`}>
                        •◦❥◦•
                    </a>
                    <span className={`${labelStyle} top-full left-full mt-2 ml-2`}>
                        INSTAGRAM
                    </span>
                </div>

                {/* --- Jewel Page Indicators --- */}
                {/* Positioned at the bottom center or top center? Let's try bottom center, below the X */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 pointer-events-auto">
                    {[0, 1, 2, 3].map((index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Use gem images as dots */}
                            <img
                                src={activeIndex === index ? gemPink : gemPurple}
                                alt="indicator"
                                className={`w-6 h-6 md:w-8 md:h-8 transition-all duration-300 ${activeIndex === index ? 'scale-125 drop-shadow-lg' : 'opacity-50 grayscale'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Styles (Duplicated from Main.jsx to ensure self-contained or we can rely on global CSS if moved there)
          For now, I'll rely on the App.css or Main.jsx styles if they are global, but Main.jsx styles were scoped.
          Let's verify where styles are. Main.jsx had a <style> block. I should move that to index.css or include it here.
      */}
            <style>{`
        /* 텍스트 테두리 (검은 글씨에 핑크 테두리) */
        .text-outline-pink {
          -webkit-text-stroke: 1px #ff69b4;
          paint-order: stroke fill;
        }
        .text-outline-white-heavy {
          -webkit-text-stroke: 3px white;
          paint-order: stroke fill;
        }
        @media (min-width: 768px) {
           .text-outline-pink { -webkit-text-stroke: 2px #ff69b4; }
           .text-outline-white-heavy { -webkit-text-stroke: 5px white; }
        }
      `}</style>
        </>
    );
};

export default NavigationOverlay;
