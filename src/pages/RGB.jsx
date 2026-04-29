import { useEffect, useState } from 'react';
import Main from './Main';
import Lightbox from '../components/Lightbox';
import WorkCanvas from '../components/WorkCanvas';
import {
    angeliteTextY,
    getLayoutHeight,
    getResponsiveSidebarWidth,
    rgbCommercialLayout,
    rgbPersonalLayout,
} from '../config/workLayouts';
import { rgbProjects } from '../data/projects';
import { rgbCommercialAssets, rgbWorkAssets } from '../lib/assets';

const getRgbPersonalZIndex = (filename) => {
    if (filename === '5.png') return 100;
    if (filename === '8.png') return 90;
    if (filename === '4-1.png') return 80;
    return 10;
};

const getRgbPersonalImageClass = (filename) =>
    `w-full h-full object-contain cursor-pointer ${filename === '5.png' || filename === '8.png' ? '' : 'mix-blend-multiply'}`;

const RGB = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [activeFilter, setActiveFilter] = useState('personal');

    const contentHeight = getLayoutHeight(rgbPersonalLayout, 'video-1.mp4', 30000);
    const comContentHeight = getLayoutHeight(rgbCommercialLayout, '6-2.png', 10000);

    useEffect(() => {
        const handleResize = () => {
            const nextIsMobile = window.innerWidth < 768;
            const sidebarWidth = getResponsiveSidebarWidth(window.innerWidth);
            const availableWidth = window.innerWidth - sidebarWidth;
            const minScale = nextIsMobile ? 0.08 : 0.2;
            const newScale = Math.min(Math.max(availableWidth / 1920, minScale), 1.5);
            setScale(newScale);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const resolveRgbSrc = (filename, position) =>
        position.source === 'commercials' ? rgbCommercialAssets[filename] : rgbWorkAssets[filename];

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
                <div className="work-section flex w-full">
                    {/* Left: Description Sidebar Bar */}
                    <div className="work-sidebar border-r border-black/10 bg-white relative">
                        {/* TOOTH FAIRY */}
                        <div className="absolute w-full p-10" style={{ top: `${(rgbPersonalLayout['1.png']?.y || 0) * scale}px` }}>
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
                        <div className="absolute w-full p-10" style={{ top: `${(rgbPersonalLayout['4.png']?.y || 0) * scale}px` }}>
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

                        {/* ALL ANGELITE TEXTS COMBINED TO PREVENT OVERLAP */}
                        <div className="absolute w-full p-10 flex flex-col gap-16" style={{ top: `${angeliteTextY * scale}px` }}>

                            {/* VIRTUAL IDOL - ANGELITE (Original text restored) */}
                            {virtualIdolText && (
                                <div>
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
                            )}

                            {/* ANGELITE DETAILS (Moved from commercial) */}
                            <div className="mt-12">
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

                        {/* ANGELITE CD GRAPHICS (Positioned alongside the images) */}
                        <div className="absolute w-full p-10" style={{ top: `${19300 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">ANGELITE CD GRAPHICS</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2024</span>
                                </div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep">
                                    150x150 mm<br />
                                    Angelite Album Graphic / Logo<br />
                                    앤젤라이트 앨범 그래픽/로고
                                </div>
                            </div>
                        </div>

                        {/* ANGELITE PHOTOCARDS (Positioned alongside the photocard images) */}
                        <div className="absolute w-full p-10" style={{ top: `${20604 * scale}px` }}>
                            <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep">
                                55x85 mm<br />
                                Virtual idol character photo card<br />
                                버츄얼 아이돌 포토카드
                            </div>
                        </div>

                        {/* ANGELITE VIDEOS (Positioned alongside the videos) */}
                        <div className="absolute w-full p-10" style={{ top: `${21400 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">ANGELITE VIDEOS</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2024</span>
                                </div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep">
                                    1920x1080 px<br />
                                    0:46<br />
                                    Angelite Teaser Video<br /><br />
                                    1920x1080 px<br />
                                    2:04<br />
                                    Angelite Fake Youtube Live Video
                                </div>
                            </div>
                        </div>
                    </div>

                    <WorkCanvas
                        layout={rgbPersonalLayout}
                        height={contentHeight}
                        scale={scale}
                        resolveSrc={resolveRgbSrc}
                        onSelectImage={setSelectedImage}
                        imageTitle="RGB WORK"
                        getZIndex={getRgbPersonalZIndex}
                        imageClassName={getRgbPersonalImageClass}
                    />
                </div>
            )}
            {activeFilter === 'commercial' && (
                <div className="work-section flex w-full">
                    {/* Left: Description Sidebar Bar */}
                    <div className="work-sidebar border-r border-black/10 bg-white relative">
                        {/* 5. DIDI DAZED */}
                        <div className="absolute w-full p-10" style={{ top: `${50 * scale}px` }}>
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
                        <div className="absolute w-full p-10" style={{ top: `${1450 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">DAZED KOREA MONTHLY HIGHLIGHTS</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2025</span>
                                </div>
                            </div>
                        </div>

                        {/* 7. MONCLER */}
                        <div className="absolute w-full p-10" style={{ top: `${2850 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">DAZED KOREA — BRAND COLLABORATION VFX</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2025</span>
                                </div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">ARTIST</span>BOYNEXTDOOR · CORTIS</div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">BRAND</span>MONCLER · BALENCIAGA</div>
                                <div className="text-base leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block">ROLE</span>3D 모델링 · 쉐이딩 · 라이팅 · 렌더링 · VFX 컴포지팅 · 컬러 그레이딩</div>
                            </div>
                        </div>
                    </div>

                    <WorkCanvas
                        layout={rgbCommercialLayout}
                        height={comContentHeight}
                        scale={scale}
                        resolveSrc={resolveRgbSrc}
                        onSelectImage={setSelectedImage}
                        imageTitle="COMMERCIAL WORK"
                        sortEntries={false}
                        itemClassName="absolute drop-shadow-2xl hover:scale-[1.02] transition-transform cursor-pointer"
                        imageClassName="w-full h-full object-cover rounded-xl border border-black/10"
                    />
                </div>
            )}


            <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
        </div>
    );
};

export default RGB;
