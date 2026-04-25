import React, { useState, useEffect, useRef } from 'react';
import Main from './Main';
import { rgbProjects } from '../data/projects';

const layoutConfig = {
    '1.png': { x: 0, y: 150, w: 1920, h: 1080 },
    '2.png': { x: 0, y: 1230, w: 1920, h: 1080 },
    '3.png': { x: 0, y: 2310, w: 1920, h: 1080 },
    '4.png': { x: -709, y: 3590, w: 3338, h: 2808 },
    '4-1.png': { x: 1350, y: 5698, w: 450, h: 600 },
    '5.png': { x: 0, y: 6334, w: 1209, h: 1600 },
    '6.png': { x: 382, y: 7207, w: 1538, h: 2050 },
    '7.png': { x: 59, y: 9257, w: 1802, h: 2988 },
    '8.png': { x: 802, y: 12545, w: 1139, h: 1485 },
    '9.png': { x: 59, y: 13295, w: 1202, h: 1669 },
    '10.png': { x: 0, y: 15164, w: 1920, h: 1080 },
    '11.png': { x: -104, y: 16149, w: 2128, h: 1270 },
    '12.png': { x: 50, y: 17354, w: 1813, h: 1867 },
    '13.png': { x: -45, y: 19221, w: 2010, h: 1220 },
    '14-1.png': { x: -23, y: 20441, w: 1002, h: 1336 },
    '14-2.png': { x: 940, y: 20441, w: 1002, h: 1336 },
};

const layoutConfigCommercial = {
    '2-1.png': { x: 0, y: 50, w: 920, h: 1380, source: 'commercials' },
    '2-2.png': { x: 960, y: 50, w: 920, h: 1380, source: 'commercials' },
    '2-3.png': { x: 0, y: 1470, w: 920, h: 1380, source: 'commercials' },
    '2-4.png': { x: 960, y: 1470, w: 920, h: 1380, source: 'commercials' },

    '3-1-3.png': { x: 0, y: 3100, w: 920, h: 920, source: 'commercials' },
    '3-1-2.png': { x: 960, y: 3100, w: 440, h: 440, source: 'commercials' },
    '3-1-1.png': { x: 1440, y: 3100, w: 440, h: 440, source: 'commercials' },
    '3-2.png': { x: 0, y: 4060, w: 440, h: 660, source: 'commercials' },
    '3-3.png': { x: 480, y: 4060, w: 440, h: 660, source: 'commercials' },
    '3-4.png': { x: 960, y: 4060, w: 440, h: 660, source: 'commercials' },
    '3-5.png': { x: 1440, y: 4060, w: 440, h: 660, source: 'commercials' },

    'video-1.mp4': { x: 0, y: 5100, w: 920, h: 517, source: 'commercials' },
    'video-2.mp4': { x: 960, y: 5100, w: 920, h: 517, source: 'commercials' },

    '4-1.png': { x: 0, y: 6000, w: 600, h: 1066, source: 'commercials' },
    '4-2.png': { x: 640, y: 6000, w: 600, h: 1066, source: 'commercials' },
    '4-3.png': { x: 1280, y: 6000, w: 600, h: 1066, source: 'commercials' },

    '5-1video.mp4': { x: 0, y: 7400, w: 600, h: 1066, source: 'commercials' },
    '5-2video.mp4': { x: 640, y: 7400, w: 600, h: 1066, source: 'commercials' },
    '5-3video.mp4': { x: 1280, y: 7400, w: 600, h: 1066, source: 'commercials' },

    '6-1.jpg': { x: 0, y: 8800, w: 920, h: 1186, source: 'commercials' },
    '6-2.png': { x: 960, y: 8800, w: 920, h: 1186, source: 'commercials' },
};

const SIDEBAR_WIDTH = 420;

const RGB = () => {
    const [allImages, setAllImages] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [activeFilter, setActiveFilter] = useState('personal');
    const [allCommercials, setAllCommercials] = useState({});

    // Calculate max height based on the last image
    const lastImage = layoutConfig['14-2.png'];
    const contentHeight = lastImage ? lastImage.y + lastImage.h + 50 : 30000;

    const lastComImage = layoutConfigCommercial['6-2.png'];
    const comContentHeight = lastComImage ? lastComImage.y + lastComImage.h + 50 : 10000;

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
            const globImports = import.meta.glob('../assets/RGB_work/*.(png|jpg|jpeg|webp|gif)', { eager: true });
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
    const toothFairy = rgbProjects[0];
    const angelHeart = rgbProjects[1];
    const virtualIdolText = angelHeart?.imageLayout?.find(item => item.type === 'text-section');

    if (!toothFairy || !angelHeart) return null;

    return (
        <div className="relative w-full min-h-screen bg-white selection:bg-pink-500 selection:text-white overflow-x-hidden">
            <Main activePage="rgb" activeFilter={activeFilter} onFilterChange={setActiveFilter} />

            {/* Content Section - Filter based */}
            {activeFilter === 'personal' && (
                <div className="flex w-full">
                    {/* Left: Description Sidebar Bar */}
                    <div
                        className="border-r border-black/10 bg-white relative"
                        style={{ width: `${SIDEBAR_WIDTH}px`, minWidth: `${SIDEBAR_WIDTH}px` }}
                    >
                        {/* TOOTH FAIRY */}
                        <div className="absolute w-full p-10" style={{ top: `${(layoutConfig['1.png']?.y || 0) * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">
                                        {toothFairy.title}
                                    </h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">
                                        {toothFairy.year}
                                    </span>
                                </div>
                                {toothFairy.descriptionKo && (
                                    <div
                                        className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6"
                                        dangerouslySetInnerHTML={{ __html: toothFairy.descriptionKo }}
                                    />
                                )}
                                {toothFairy.descriptionEn && (
                                    <div
                                        className="text-sm leading-relaxed text-gray-600 uppercase font-bold tracking-tight whitespace-pre-wrap font-pretendard"
                                        style={{ textWrap: 'pretty' }}
                                        dangerouslySetInnerHTML={{ __html: toothFairy.descriptionEn }}
                                    />
                                )}
                            </div>
                        </div>

                        {/* ANGEL HEART */}
                        <div className="absolute w-full p-10" style={{ top: `${(layoutConfig['4.png']?.y || 0) * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">
                                        {angelHeart.title}
                                    </h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">
                                        {angelHeart.year}
                                    </span>
                                </div>
                                {angelHeart.descriptionKo && (
                                    <div
                                        className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6"
                                        dangerouslySetInnerHTML={{ __html: angelHeart.descriptionKo }}
                                    />
                                )}
                                {angelHeart.descriptionEn && (
                                    <div
                                        className="text-sm leading-relaxed text-gray-600 uppercase font-bold tracking-tight whitespace-pre-wrap font-pretendard"
                                        style={{ textWrap: 'pretty' }}
                                        dangerouslySetInnerHTML={{ __html: angelHeart.descriptionEn }}
                                    />
                                )}
                            </div>
                        </div>

                        {/* VIRTUAL IDOL - ANGELITE */}
                        {virtualIdolText && (
                            <div className="absolute w-full p-10" style={{ top: `${(layoutConfig['10.png']?.y || 0) * scale}px` }}>
                                <div className="mb-16">
                                    <div className="border-b border-black pb-4 mb-6">
                                        <h2 className="text-3xl font-pretendard font-bold uppercase tracking-tighter leading-none">
                                            {virtualIdolText.title}
                                        </h2>
                                        {virtualIdolText.subtitle && (
                                            <h3 className="text-xl font-pretendard font-bold uppercase tracking-tighter leading-tight mt-2">
                                                {virtualIdolText.subtitle}
                                            </h3>
                                        )}
                                        <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">
                                            {virtualIdolText.year}
                                        </span>
                                        {virtualIdolText.note && (
                                            <span className="text-xs font-bold font-sans mt-2 block text-gray-500">
                                                {virtualIdolText.note}
                                            </span>
                                        )}
                                    </div>
                                    {virtualIdolText.descKo && (
                                        <div
                                            className="text-sm leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6"
                                            dangerouslySetInnerHTML={{ __html: virtualIdolText.descKo }}
                                        />
                                    )}
                                    {virtualIdolText.descEn && (
                                        <div
                                            className="text-xs leading-relaxed text-gray-600 uppercase font-bold tracking-tight whitespace-pre-wrap font-pretendard"
                                            style={{ textWrap: 'pretty' }}
                                            dangerouslySetInnerHTML={{ __html: virtualIdolText.descEn }}
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
                                    const getZIndex = (name) => {
                                        if (name === '5.png') return 100;
                                        if (name === '8.png') return 90;
                                        return 10;
                                    };
                                    return getZIndex(filenameA) - getZIndex(filenameB);
                                })
                                .map(([filename, pos]) => {
                                    const src = getImageSrc(filename);
                                    if (!src) return null;

                                    let zIndex = 10;
                                    if (filename === '5.png') zIndex = 100;
                                    else if (filename === '8.png') zIndex = 90;
                                    else if (filename === '4-1.png') zIndex = 80;

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
                                                className={`w-full h-full object-contain cursor-pointer ${filename === '5.png' || filename === '8.png' ? '' : 'mix-blend-multiply'}`}
                                                onClick={() => setSelectedImage({ src, title: 'RGB WORK' })}
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
                        {/* 2. ANGELITE */}
                        <div className="absolute w-full p-10" style={{ top: `${50 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none mb-2">VIRTUAL IDOL — ANGELITE</h2>
                                    <h3 className="text-xl font-pretendard font-bold tracking-tighter leading-tight mt-2 text-gray-600">Every angel is terrifying *</h3>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-4 block">2024</span>
                                </div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6">
                                    <span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">ROLE</span>
                                    컨셉기획 · 3D캐릭터 디자인 · 모션 트래킹 · AI 보이스 디렉션 · 아트 디렉션/제작
                                </div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6">
                                    <span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">TOOL</span>
                                    Adobe After Effects · Adobe Illustrator · Adobe Premiere Pro · Adobe Indesign · Blender
                                </div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6">
                                    <span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">PROJECT</span>
                                    네 명의 캐릭터로 구성된 Angelite는 모두 하나의 디자이너의 움직임을 기반으로 만들어졌다. 모션 트래킹 기술을 통해 디자이너의 몸짓을 실시간으로 반영하며, 음성은 AI 기반 변조를 통해 각기 다른 인격과 감정, 말투를 갖춘 개별 캐릭터로 연기된다. 겉보기에 이들은 실존하는 인물처럼 보이지만, 실체는 오직 하나뿐이다. Angelite는 실재와 허구, 자아와 이미지, 감정과 알고리즘 사이의 긴장을 드러내는 프로젝트이다.
                                </div>
                            </div>
                        </div>

                        {/* 3. CD GRAPHICS */}
                        <div className="absolute w-full p-10" style={{ top: `${3100 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">ANGELITE CD GRAPHICS</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2024</span>
                                </div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6">
                                    엔젤라이트 앨범 그래픽/로고<br />(150x150 mm)<br /><br />
                                    버츄얼 아이돌 포토카드<br />(55x85 mm)
                                </div>
                            </div>
                        </div>

                        {/* 4. VIDEOS */}
                        <div className="absolute w-full p-10" style={{ top: `${5100 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">ANGELITE VIDEOS</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2024</span>
                                </div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6">
                                    Angelite Teaser Video<br />Angelite Fake Youtube Live Video
                                </div>
                            </div>
                        </div>

                        {/* 5. DIDI DAZED */}
                        <div className="absolute w-full p-10" style={{ top: `${6000 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">DIDI — DAZED KOREA ORIGINAL CHARACTER</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2025—2026</span>
                                </div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">CLIENT</span>DAZED KOREA</div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">ROLE</span>오리지널 캐릭터 기획 · 3D 모델링 · 리깅 · 애니메이션 · 편집 · 색보정 · 사운드 디렉션 (전담)</div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">TOOL</span>Blender · Adobe After Effects · Premiere Pro</div>
                            </div>
                        </div>

                        {/* 6. DAZED MONTHLY */}
                        <div className="absolute w-full p-10" style={{ top: `${7400 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">DAZED KOREA MONTHLY HIGHLIGHTS</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2025</span>
                                </div>
                            </div>
                        </div>

                        {/* 7. MONCLER */}
                        <div className="absolute w-full p-10" style={{ top: `${8800 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">DAZED KOREA — BRAND COLLABORATION VFX</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2025</span>
                                </div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">ARTIST</span>BOYNEXTDOOR CORTIS</div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">BRAND</span>MONCLER BALENCIAGA</div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">ROLE</span>3D 모델링 · 쉐이딩 · 라이팅 · 렌더링 · VFX 컴포지팅 · 컬러 그레이딩</div>
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

                                if (filename.endsWith('.mp4')) {
                                    return (
                                        <div key={filename} className="absolute drop-shadow-2xl" style={{ left: `${pos.x}px`, top: `${pos.y}px`, width: `${pos.w}px`, height: `${pos.h}px` }}>
                                            <video src={src} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl" />
                                        </div>
                                    );
                                }

                                return (
                                    <div key={filename} className="absolute drop-shadow-2xl hover:scale-[1.02] transition-transform cursor-pointer" style={{ left: `${pos.x}px`, top: `${pos.y}px`, width: `${pos.w}px`, height: `${pos.h}px` }}>
                                        <img src={src} alt={filename} className="w-full h-full object-cover rounded-xl border border-black/10" onClick={() => setSelectedImage({ src, title: 'COMMERCIAL WORK' })} loading="lazy" />
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

export default RGB;
