import React, { useState, useEffect } from 'react';
import Main from './Main';
import { cmykProjects } from '../data/projects';

const SIDEBAR_WIDTH = 420;

const CMYK = () => {

    const layoutConfig = {
        '1.png': { x: 0, y: 150, w: 1920, h: 2560 },
        '2.png': { x: 0, y: 2716, w: 1933, h: 1289 },
        '3-1.png': { x: 0, y: 3766, w: 1080, h: 1440 },
        '3-2.png': { x: 985, y: 4138, w: 1080, h: 1440 },
        '4.png': { x: 790, y: 5056, w: 1080, h: 1440 },
        '5.png': { x: 50, y: 5579, w: 1080, h: 1440 },
        '6.png': { x: 250, y: 6618, w: 1080, h: 1440 },
        '7.png': { x: -263, y: 8058, w: 2447, h: 2063 },
        '8.png': { x: 0, y: 10121, w: 935, h: 623 },
        '9.png': { x: 868, y: 10469, w: 1052, h: 701 },
        '10.png': { x: 811, y: 11214, w: 999, h: 1499 },
        '11.png': { x: -2, y: 12913, w: 1925, h: 1203 },
        '12-1.png': { x: 0, y: 14202, w: 981, h: 613 },
        '12-2.png': { x: 985, y: 14202, w: 940, h: 588 },
        '13-1.png': { x: 0, y: 14815, w: 624, h: 622 },
        '13-2.png': { x: 676, y: 14815, w: 623, h: 623 },
        '13-3.png': { x: 1299, y: 14819, w: 621, h: 619 },
        '14.png': { x: 173, y: 15438, w: 252, h: 270 },
        '15.png': { x: 425, y: 15524, w: 1070, h: 723 },
        'word1.png': { x: 1394, y: 9990, w: 470, h: 665 },
        'word2.png': { x: 0, y: 10830, w: 480, h: 679 },
        'word3.png': { x: 505, y: 10999, w: 480, h: 678 },
    };


    const layoutConfigCommercial = {
        'CMYK_Cm1.jpg': { x: 50, y: 50, w: 1800, h: 1200, source: 'images' },
        '7-1.png': { x: 30, y: 1500, w: 610, h: 887, source: 'commercials' },
        '7-2.png': { x: 650, y: 1500, w: 610, h: 887, source: 'commercials' },
        '7-3.png': { x: 1270, y: 1500, w: 610, h: 887, source: 'commercials' },
    };

    const [allImages, setAllImages] = useState({});
    const [allCommercials, setAllCommercials] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [activeFilter, setActiveFilter] = useState('personal');

    // Calculate max height based on the last image
    const lastImage = layoutConfig['15.png'];
    const contentHeight = lastImage ? lastImage.y + lastImage.h + 50 : 20000;

    const lastComImage = layoutConfigCommercial['7-3.png'];
    const comContentHeight = lastComImage ? lastComImage.y + lastComImage.h + 50 : 5000;


    useEffect(() => {
        const handleResize = () => {
            const availableWidth = window.innerWidth - SIDEBAR_WIDTH;
            const newScale = Math.min(Math.max(availableWidth / 1920, 0.2), 1.5);
            setScale(newScale);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const loadImages = () => {
            const globImports = import.meta.glob('../assets/CMYK_work/*.(png|jpg|jpeg|webp|gif)', { eager: true });
            const imageMap = {};
            Object.entries(globImports).forEach(([path, module]) => {
                const fileName = path.split('/').pop();
                imageMap[fileName] = module.default;
            });
            setAllImages(imageMap);
        };
        loadImages();
    }, []);

    useEffect(() => {
        const loadCommercials = () => {
            const globImports = import.meta.glob('../assets/RGB-commercial/*.(png|jpg|jpeg|webp|gif|mp4)', { eager: true });
            const imageMap = {};
            Object.entries(globImports).forEach(([path, module]) => {
                const fileName = path.split('/').pop();
                imageMap[fileName] = module.default;
            });
            setAllCommercials(imageMap);
        };
        loadCommercials();
    }, []);

    const getImageSrc = (filename) => allImages[filename] || null;

    // Get project data
    const wetToDryProject = cmykProjects[0];
    const painToneData = wetToDryProject?.imageLayout?.find(item => item.type === 'text-section');

    return (
        <div className="relative w-full min-h-screen bg-white selection:bg-pink-500 selection:text-white overflow-x-hidden">
            <Main activePage="cmyk" activeFilter={activeFilter} onFilterChange={setActiveFilter} />

            {/* Content Section - Filter based */}
            {activeFilter === 'personal' && (
                <div className="flex w-full">
                    {/* Left: Description Sidebar Bar */}
                    <div
                        className="border-r border-black/10 bg-white relative"
                        style={{ width: `${SIDEBAR_WIDTH}px`, minWidth: `${SIDEBAR_WIDTH}px` }}
                    >
                        {/* WET TO DRY */}
                        <div className="absolute w-full p-10" style={{ top: `${(layoutConfig['1.png']?.y || 0) * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">
                                        {wetToDryProject.title}
                                    </h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">
                                        {wetToDryProject.year}
                                    </span>
                                </div>
                                {wetToDryProject.descKo && (
                                    <div
                                        className="text-sm leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6"
                                        dangerouslySetInnerHTML={{ __html: wetToDryProject.descKo }}
                                    />
                                )}
                                {wetToDryProject.descEn && (
                                    <div
                                        className="text-xs leading-relaxed text-gray-600 uppercase font-bold tracking-tight whitespace-pre-wrap font-pretendard"
                                        style={{ textWrap: 'pretty' }}
                                        dangerouslySetInnerHTML={{ __html: wetToDryProject.descEn }}
                                    />
                                )}
                            </div>
                        </div>

                        {/* PAIN TONE */}
                        {painToneData && (
                            <div className="absolute w-full p-10" style={{ top: `${(layoutConfig['11.png']?.y || 0) * scale}px` }}>
                                <div className="mb-16">
                                    <div className="border-b border-black pb-4 mb-6">
                                        <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">
                                            {painToneData.title}
                                        </h2>
                                        <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">
                                            {painToneData.year}
                                        </span>
                                    </div>
                                    {painToneData.descKo && (
                                        <div
                                            className="text-sm leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6"
                                            dangerouslySetInnerHTML={{ __html: painToneData.descKo }}
                                        />
                                    )}
                                    {painToneData.descEn && (
                                        <div
                                            className="text-xs leading-relaxed text-gray-600 uppercase font-bold tracking-tight whitespace-pre-wrap font-pretendard"
                                            style={{ textWrap: 'pretty' }}
                                            dangerouslySetInnerHTML={{ __html: painToneData.descEn }}
                                        />
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Image Canvas (original absolute positioning) */}
                    <div
                        className="flex-1 relative overflow-hidden"
                        style={{ height: `${contentHeight * scale}px` }}
                    >
                        <div
                            className="absolute origin-top-left transition-transform duration-100 ease-out"
                            style={{
                                width: '1920px',
                                height: `${contentHeight}px`,
                                transform: `scale(${scale})`,
                            }}
                        >
                            {Object.entries(layoutConfig)
                                .sort(([filenameA], [filenameB]) => {
                                    const getZIndex = (name) => name === '5.png' ? 100 : (name === '14.png' ? 20 : 10);
                                    return getZIndex(filenameA) - getZIndex(filenameB);
                                })
                                .map(([filename, pos]) => {
                                    const src = getImageSrc(filename);
                                    if (!src) return null;

                                    const zIndex = filename === '5.png' ? 100 : (filename === '14.png' ? 20 : 10);

                                    return (
                                        <div
                                            key={filename}
                                            className="absolute"
                                            style={{
                                                left: `${pos.x}px`,
                                                top: `${pos.y}px`,
                                                width: `${pos.w}px`,
                                                height: `${pos.h}px`,
                                                zIndex: zIndex
                                            }}
                                        >
                                            <img
                                                src={src}
                                                alt={filename}
                                                className={`w-full h-full object-contain cursor-pointer ${filename === '5.png' ? '' : 'mix-blend-multiply'}`}
                                                onClick={() => setSelectedImage({ src, title: 'CMYK WORK' })}
                                                loading="lazy"
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            )}

            {activeFilter === 'commercial' && (
                <div className="flex w-full">
                    {/* Left: Description Sidebar Bar */}
                    <div
                        className="border-r border-black/10 bg-white relative"
                        style={{ width: `${SIDEBAR_WIDTH}px`, minWidth: `${SIDEBAR_WIDTH}px` }}
                    >
                        {/* 1. YAMADA RYOSUKE */}
                        <div className="absolute w-full p-10" style={{ top: `${50 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">
                                        DAZED KOREA — YAMADA RYOSUKE
                                    </h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">
                                        2026
                                    </span>
                                </div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">ARTIST</span>YAMADA RYOSUKE (HEY! SAY! JUMP)</div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">PUBLISHED IN</span>DAZED KOREA APRIL ISSUE</div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">CONCEPT</span>노력하는 왕자님 - 지금의 ‘야마다 료스케’가 되기까지. 여유만만의, 본투비 왕자라고 생각했던 그는 사실 엄청난 노력파다. 고군분투해야 했던 그는, 이제 모두의 왕자님이 되었다. 오늘도, 왕자는 고군분투한다!</div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">ROLE</span>화보 컨셉 기획 · 시안 제작 · 커뮤니케이션 · 인터뷰 · 텍스트 · 디지털 콘텐츠 제작</div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">FORMAT</span>14p 지면 · 디지털 콘텐츠 영상 2 · 인터뷰</div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">CREDITS</span>text JOI<br />fashion RYO, LANG<br />photograhy JANG DUKHWA<br />hair & make-up JANG HAJUN</div>
                            </div>
                        </div>

                    </div>

                    {/* Right: Image Canvas */}
                    <div
                        className="flex-1 relative overflow-hidden"
                        style={{ height: `${comContentHeight * scale}px` }}
                    >
                        <div
                            className="absolute origin-top-left transition-transform duration-100 ease-out"
                            style={{
                                width: '1920px',
                                height: `${comContentHeight}px`,
                                transform: `scale(${scale})`,
                            }}
                        >
                            {Object.entries(layoutConfigCommercial).map(([filename, pos]) => {
                                const src = pos.source === 'images' ? allImages[filename] : allCommercials[filename];
                                if (!src) return null;

                                return (
                                    <div key={filename} className="absolute drop-shadow-xl hover:scale-[1.02] transition-transform cursor-pointer" style={{ left: `${pos.x}px`, top: `${pos.y}px`, width: `${pos.w}px`, height: `${pos.h}px` }}>
                                        <img src={src} alt={filename} className="w-full h-full object-contain" onClick={() => setSelectedImage({ src, title: 'COMMERCIAL WORK' })} loading="lazy" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}


            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-4 right-4 text-white/50 hover:text-white text-5xl font-light transition-colors z-50" onClick={() => setSelectedImage(null)}>
                            &times;
                        </button>
                        <img src={selectedImage.src} alt={selectedImage.title} className="max-w-full max-h-[85vh] object-contain shadow-2xl" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CMYK;
