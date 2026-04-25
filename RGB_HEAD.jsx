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
                <div className="flex w-full min-h-screen bg-black text-white relative">
                    <div className="w-full flex-1 overflow-y-auto overflow-x-hidden flex flex-col font-pretendard">
                        {/* Section 4: CV Info Page Background (Screenshot 4) */}
                        <div className="w-full min-h-screen relative p-20 flex flex-col items-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${allCommercials['4-1.png']})` }}>
                            {/* Removed the blurry overlay as per the reference image showing the clear background */}
                            <div className="relative z-10 w-full flex-1 flex justify-between text-black max-w-[1920px] mx-auto items-stretch">
                                {/* Left Group */}
                                <div className="flex items-stretch gap-10">
                                    <div className="bg-white px-6 py-4 flex items-center shadow-2xl shrink-0 h-[50px] self-start">
                                        <h1 className="text-3xl font-black tracking-tighter">최다정 <span className="text-sm">JOI CHOI</span></h1>
                                    </div>
                                    <div className="bg-white w-[250px] p-8 flex flex-col gap-10 shadow-2xl shrink-0 h-full">
                                        <div>
                                            <h3 className="font-bold text-base mb-4 uppercase tracking-wider">Contacts/연락처</h3>
                                            <div className="text-sm mb-4"><span className="font-extrabold text-xs">PHONE</span><br />+82 10 2618 6370</div>
                                            <div className="text-sm mb-4"><span className="font-extrabold text-xs">E-MAIL</span><br />joichoi.work@gmail.com</div>
                                            <div className="text-sm"><span className="font-extrabold text-xs">SNS</span><br />@joichoioi<br />@joicholi</div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base mb-4 uppercase tracking-wider">Languages/사용언어</h3>
                                            <div className="text-sm font-extrabold leading-loose">
                                                KOREAN: <span className="font-medium">Native</span><br />
                                                ENGLISH: <span className="font-medium">Fluent</span><br />
                                                JAPANESE: <span className="font-medium">Advanced</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-base mb-4 uppercase tracking-wider">Career/경력</h3>
                                            <div className="text-sm font-extrabold">DAZED KOREA<br /><span className="font-medium">2025. 09 - 2026. 03</span></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Group */}
                                <div className="flex items-stretch gap-6">
                                    <div className="bg-white w-[250px] p-8 shadow-2xl shrink-0 h-full">
                                        <h3 className="font-bold text-base mb-8 text-center uppercase tracking-wider">Exhibition/전시</h3>
                                        <div className="text-sm flex flex-col gap-6">
                                            <div>
                                                <div className="font-extrabold text-xs">2025</div>
                                                <div className="font-bold tracking-tight">오버하우젠 단편영화제</div>
                                                <div className="font-medium leading-snug font-sans">International Short Film<br />Festival Oberhausen<br />Film Screening - "Mirroring"<br />(DE)</div>
                                                <div className="font-bold tracking-tight mt-3">온보드 비엔날레</div>
                                                <div className="font-medium leading-snug font-sans">Onboards Biennale<br />-exhibition on billboards<br />(BE)</div>
                                            </div>
                                            <div>
                                                <div className="font-extrabold text-xs">2024</div>
                                                <div className="font-bold tracking-tight">원미닛 단편영화 상영</div>
                                                <div className="font-medium leading-snug font-sans">The one minutes<br />"Mirroring"<br />Movie screening<br />(NL)</div>
                                            </div>
                                            <div>
                                                <div className="font-extrabold text-xs">2023</div>
                                                <div className="font-bold tracking-tight">로렘입숨 전시</div>
                                                <div className="font-medium leading-snug font-sans">_Lorem Ipsum) exhibition<br />(NL)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white w-[250px] p-8 shadow-2xl shrink-0 h-full">
                                        <h3 className="font-bold text-base mb-8 text-center uppercase tracking-wider">Education/학력</h3>
                                        <div className="text-sm flex flex-col gap-6">
                                            <div>
                                                <div className="font-extrabold text-xs font-sans">2024-2025</div>
                                                <div className="font-bold tracking-tight font-sans">Royal Academy of Fine<br />Arts Antwerp<span className="font-medium">(BE)</span></div>
                                                <div className="font-medium leading-snug font-sans">-Graphic Design MA</div>
                                            </div>
                                            <div>
                                                <div className="font-extrabold text-xs font-sans">2019-2024</div>
                                                <div className="font-bold tracking-tight font-sans">Royal Academy Of Fine<br />Arts Antwerp<span className="font-medium">(BE)</span></div>
                                                <div className="font-medium leading-snug font-sans">-Graphic Design BA</div>
                                            </div>
                                            <div>
                                                <div className="font-extrabold text-xs font-sans">2018-2019</div>
                                                <div className="font-bold tracking-tight font-sans">coconogacco<span className="font-medium">(JP)</span></div>
                                                <div className="font-medium leading-snug font-sans">-Primary Course</div>
                                            </div>
                                            <div>
                                                <div className="font-extrabold text-xs font-sans">2015-2018</div>
                                                <div className="font-bold tracking-tight font-sans">Konkuk Univ.<span className="font-medium">(KR)</span></div>
                                                <div className="font-medium leading-snug font-sans">-Fashion Design</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Angelite Exhibition (Screenshot 3) */}
                        <div className="w-full min-h-screen relative flex items-center py-24 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${allImages['14-1.png']})` }}>
                            <div className="relative z-10 w-full flex flex-row px-10 gap-10">
                                <div className="w-[380px] shrink-0 sticky top-10 self-start bg-white text-black p-10 text-sm font-bold leading-relaxed break-keep tracking-tight">
                                    <div className="mb-8">
                                        <span className="text-base">2024</span><br />
                                        <span className="text-base">Every angel is terrifying *</span><br />
                                        <span className="text-base">Virtual idol - Angelite</span><br />
                                        <span className="font-normal text-xs">* by RAINER MARIA RILKE</span>
                                    </div>
                                    <div className="mb-8">
                                        <div className="mb-2 text-base">ROLE</div>
                                        <div>컨셉기획 · 3D캐릭터 디자인<br />· 모션 트래킹 · AI 보이스<br />디렉션 · 아트 디렉션/제작<br />(전담)</div>
                                    </div>
                                    <div className="mb-8">
                                        <div className="mb-2 text-base">TOOL</div>
                                        <div>Adobe After Effects<br />· Adobe Illustrator ·<br />Adobe Premiere Pro<br />· Adobe Indesign ·<br />Blender</div>
                                    </div>
                                    <div>
                                        <div className="mb-2 text-base">PROJECT</div>
                                        <div className="font-normal text-sm">네 명의 캐릭터로 구성된 Angelite는 모두 하나의 디자이너의 움직임을 기반으로 만들어졌다. 모션 트래킹 기술을 통해 디자이너의 몸짓을 실시간으로 반영하며, 음성은 AI 기반 변조를 통해 각기 다른 인격과 감정, 말투를 갖춘 개별 캐릭터로 연기된다. 겉보기에 이들은 실존하는 인물처럼 보이지만, 실체는 오직 하나뿐이다. Angelite는 실재와 허구, 자아와 이미지, 감정과 알고리즘 사이의 긴장을 드러내는 프로젝트이다.</div>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-center gap-6 justify-center">
                                    <div className="flex-1 flex flex-col">
                                        <img src={allCommercials['2-1.png']} className="w-full h-auto object-cover border-[0.5px] border-[#ffffff33] mb-4 shadow-xl" />
                                        <div className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-sm text-center font-pretendard">H: 180~220 cm</div>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <img src={allCommercials['2-2.png']} className="w-full h-auto object-cover border-[0.5px] border-[#ffffff33] mb-4 shadow-xl" />
                                        <div className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-sm text-center font-pretendard">Virtual idol character design</div>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <img src={allCommercials['2-3.png']} className="w-full h-auto object-cover border-[0.5px] border-[#ffffff33] mb-4 shadow-xl" />
                                        <div className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-sm text-center font-pretendard">Ref. Bible Angel</div>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <img src={allCommercials['2-4.png']} className="w-full h-auto object-cover border-[0.5px] border-[#ffffff33] mb-4 shadow-xl" />
                                        <div className="text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-sm text-center font-pretendard">구약성경의 천사 모티브</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: CD Graphics & Photocard */}
                        <div className="w-full flex flex-col items-center justify-center min-h-[90vh] py-20 px-10 bg-black">
                            <div className="flex w-full max-w-[1400px] gap-16">
                                {/* Left side */}
                                <div className="w-[55%] flex flex-col">
                                    <div className="flex-1 flex items-center justify-center w-full">
                                        <div className="relative w-[95%] aspect-square flex items-center justify-center -translate-y-6">
                                            <img src={allCommercials['3-1-3.png']} className="w-[85%] h-full object-contain absolute inset-0 m-auto mix-blend-screen" />
                                            <img src={allCommercials['3-1-2.png']} className="absolute top-[5%] right-[5%] w-[45%] h-auto object-contain z-10 shadow-2xl rounded-2xl" />
                                            <img src={allCommercials['3-1-1.png']} className="absolute bottom-[5%] left-[5%] w-[45%] h-auto object-contain z-20 shadow-2xl rounded-2xl" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-sm mt-6 font-pretendard uppercase px-4 shrink-0">
                                        <span>150x150 mm</span>
                                        <span>Angelite Album Graphic / Logo</span>
                                        <span>엔젤라이트 앨범 그래픽/로고</span>
                                    </div>
                                </div>
                                {/* Right side */}
                                <div className="w-[45%] flex flex-col">
                                    <div className="flex-1 flex items-center justify-center w-full">
                                        <div className="grid grid-cols-2 gap-8 w-[70%] h-auto mx-auto pb-6">
                                            <img src={allCommercials['3-2.png']} className="w-full h-auto rounded-3xl object-contain drop-shadow-xl" />
                                            <img src={allCommercials['3-3.png']} className="w-full h-auto rounded-3xl object-contain drop-shadow-xl" />
                                            <img src={allCommercials['3-4.png']} className="w-full h-auto rounded-3xl object-contain drop-shadow-xl" />
                                            <img src={allCommercials['3-5.png']} className="w-full h-auto rounded-3xl object-contain drop-shadow-xl" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-sm mt-6 font-pretendard uppercase px-4 shrink-0">
                                        <span>55x85 mm</span>
                                        <span>Virtual idol character photo card</span>
                                        <span>버츄얼 아이돌 포토카드</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 1: Videos */}
                        <div className="w-full flex flex-col items-center justify-center min-h-[80vh] py-20 px-10">
                            <div className="flex w-full max-w-[1400px] gap-10">
                                <div className="flex-1 flex flex-col">
                                    <video src={allCommercials['video-1.mp4']} autoPlay loop muted playsInline className="w-full aspect-video object-contain" />
                                    <div className="flex justify-between text-[#888] text-xs mt-4 font-pretendard uppercase px-1">
                                        <span>1920x1080 px</span>
                                        <span>0:46</span>
                                        <span className="text-white">Angelite Teaser Video</span>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <video src={allCommercials['video-2.mp4']} autoPlay loop muted playsInline className="w-full aspect-video object-contain" />
                                    <div className="flex justify-between text-[#888] text-xs mt-4 font-pretendard uppercase px-1">
                                        <span>1920x1080 px</span>
                                        <span>2:04</span>
                                        <span className="text-white">Angelite Fake Youtube Live Video</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 5: DIDI Dazed Korea (Screenshot 5) */}
                        <div className="w-full min-h-screen relative flex items-center py-24 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${allCommercials['4-1.png']})` }}>
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl"></div>
                            <div className="relative z-10 w-full flex flex-row px-10 gap-0 max-w-[1920px] mx-auto justify-center">
                                <div className="w-[280px] shrink-0 sticky top-10 self-start bg-white text-black p-8 text-sm font-bold leading-relaxed break-keep tracking-tight mr-10">
                                    <div className="mb-8 text-base">
                                        2025-2026<br />
                                        DIDI-DAZED KOREA<br />
                                        ORIGINAL CHARACTER
                                    </div>
                                    <div className="mb-8">
                                        <div className="mb-2 text-base font-extrabold uppercase">ROLE</div>
                                        <div className="font-medium text-sm">오리지널 캐릭터 기획 · 3D<br />모델링 · 리깅 · 애니메이션 ·<br />편집 · 색보정 · 사운드 디렉<br />션 (전담)</div>
                                    </div>
                                    <div className="mb-8">
                                        <div className="mb-2 text-base font-extrabold uppercase">CLIENT</div>
                                        <div className="font-extrabold tracking-wider text-base">DAZED KOREA</div>
                                    </div>
                                    <div className="mb-8">
                                        <div className="mb-2 text-base font-extrabold uppercase">TOOL</div>
                                        <div className="font-medium text-sm">Blender · Adobe After<br />Effects · Premiere Pro</div>
                                    </div>
                                    <div>
                                        <div className="mb-2 text-base font-extrabold uppercase">FORMAT</div>
                                        <div className="font-bold text-sm">Monthly highlight<br />series (2025.09 -<br />2026.03)</div>
                                    </div>
                                </div>
                                <div className="flex-1 max-w-[1200px] flex flex-col drop-shadow-2xl">
                                    <div className="flex w-full">
                                        <img src={allCommercials['4-1.png']} className="w-1/3 aspect-[9/16] object-cover" />
                                        <img src={allCommercials['4-2.png']} className="w-1/3 aspect-[9/16] object-cover" />
                                        <img src={allCommercials['4-3.png']} className="w-1/3 aspect-[9/16] object-cover" />
                                    </div>
                                    <div className="flex justify-between text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-sm mt-6 font-pretendard uppercase px-4">
                                        <span>1080x1920 px</span>
                                        <span>DAZED ORIGINAL CHARACTER- DIDI</span>
                                        <span>데이즈드 오리지널 캐릭터-디디</span>
                                        <span>Monthly Series</span>
                                        <span>30-50 s</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 6: DAZED KOREA Monthly Highlights */}
                        <div className="w-full min-h-screen relative flex flex-col justify-center py-20 bg-black px-10">
                            <div className="w-full max-w-[1920px] mx-auto flex flex-col">
                                <div className="flex w-full gap-[2px]">
                                    <div className="flex-1"><img src={allCommercials['5-1.png']} className="w-full aspect-[9/16] object-cover" /></div>
                                    <div className="flex-1"><img src={allCommercials['5-2.png']} className="w-full aspect-[9/16] object-cover" /></div>
                                    <div className="flex-1"><img src={allCommercials['5-3.png']} className="w-full aspect-[9/16] object-cover" /></div>
                                </div>
                                <div className="flex justify-end gap-16 mt-6 text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-sm font-pretendard uppercase">
                                    <span>DAZED KOREA Monthly Highlights</span>
                                    <span>데이즈드 코리아 하이라이트</span>
                                </div>
                            </div>
                        </div>

                        {/* Section 7: Moncler Campaign Project */}
                        {/* Section 7: Moncler Campaign Project */}
                        <div className="w-full min-h-screen relative flex items-stretch bg-white overflow-hidden">
                            <div className="flex-1 flex w-full">
                                {/* Left Image with absolute info block */}
                                <div className="w-[47%] overflow-hidden relative flex items-center justify-center bg-[#bad1e8]">
                                    <img src={allCommercials['6-1.jpg']} className="w-full object-cover h-full mix-blend-multiply" />

                                    <div className="absolute top-8 bottom-8 left-8 w-[260px] bg-white/90 backdrop-blur-md text-black p-8 flex flex-col justify-center shadow-2xl z-20 font-bold leading-relaxed break-keep tracking-tight border border-white/40">
                                        <div className="mb-6">
                                            <span className="font-extrabold text-base tracking-tight">2025 DECEMBER, WINTER</span><br />
                                            <span className="text-sm">DAZED KOREA — BRAND<br />COLLABORATION VFX</span>
                                        </div>
                                        <div className="mb-6">
                                            <div className="mb-1 text-sm font-extrabold">ARTIST</div>
                                            <div className="font-medium text-sm">BOYNEXTDOOR<br />CORTIS</div>
                                        </div>
                                        <div className="mb-6">
                                            <div className="mb-1 text-sm font-extrabold">BRAND</div>
                                            <div className="font-medium text-sm">MONCLER<br />BALENCIAGA</div>
                                        </div>
                                        <div className="mb-6">
                                            <div className="mb-1 text-sm font-extrabold">ROLE</div>
                                            <div className="font-medium leading-snug text-sm">3D 모델링 · 쉐이딩 · 라이<br />팅 · 렌더링 · VFX 컴포지팅<br />· 컬러 그레이딩</div>
                                        </div>
                                        <div>
                                            <div className="mb-1 text-sm font-extrabold">TOOL</div>
                                            <div className="font-medium leading-snug text-sm">Adobe After Effects ·<br />Blender</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Right Image */}
                                <div className="w-[53%] overflow-hidden flex items-center justify-center bg-[#bad1e8]">
                                    <img src={allCommercials['6-2.png']} className="w-full object-cover h-full" />
                                </div>
                            </div>
                        </div>

                        {/* Section 8: DAZED KOREA APRIL ISSUE */}
                        <div className="w-full min-h-screen relative flex flex-col justify-center py-20 bg-black px-10">
                            <div className="w-full max-w-[1920px] mx-auto flex flex-col">
                                <div className="flex w-full gap-4">
                                    <div className="flex-1"><img src={allCommercials['7-1.png']} className="w-full h-auto object-cover" /></div>
                                    <div className="flex-1"><img src={allCommercials['7-2.png']} className="w-full h-auto object-cover" /></div>
                                    <div className="flex-1"><img src={allCommercials['7-3.png']} className="w-full h-auto object-cover" /></div>
                                </div>
                                <div className="flex justify-end gap-16 mt-16 text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-sm font-pretendard uppercase tracking-tight">
                                    <span>14 pages/6 착장</span>
                                    <span>DAZED KOREA APRIL ISSUE</span>
                                    <span>데이즈드 코리아 4월호</span>
                                </div>
                            </div>
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
