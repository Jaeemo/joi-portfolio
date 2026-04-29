import { useEffect, useState } from 'react';
import Main from './Main';
import Lightbox from '../components/Lightbox';
import WorkCanvas from '../components/WorkCanvas';
import {
    SIDEBAR_WIDTH,
    cmykCommercialLayout,
    cmykPersonalLayout,
    getLayoutHeight,
} from '../config/workLayouts';
import { cmykProjects } from '../data/projects';
import { cmykWorkAssets, rgbCommercialAssets } from '../lib/assets';

const getCmykPersonalZIndex = (filename) => {
    if (filename === '5.png') return 100;
    if (filename === '14.png') return 20;
    return 10;
};

const getCmykPersonalImageClass = (filename) =>
    `w-full h-full object-contain cursor-pointer ${filename === '5.png' ? '' : 'mix-blend-multiply'}`;

const CMYK = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [activeFilter, setActiveFilter] = useState('personal');

    const contentHeight = getLayoutHeight(cmykPersonalLayout, '15.png', 20000);
    const comContentHeight = getLayoutHeight(cmykCommercialLayout, '7-3.png', 5000);


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

    const resolveCmykSrc = (filename, position) =>
        position.source === 'commercials' ? rgbCommercialAssets[filename] : cmykWorkAssets[filename];

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
                        <div className="absolute w-full p-10" style={{ top: `${(cmykPersonalLayout['1.png']?.y || 0) * scale}px` }}>
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
                            <div className="absolute w-full p-10" style={{ top: `${(cmykPersonalLayout['11.png']?.y || 0) * scale}px` }}>
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

                    <WorkCanvas
                        layout={cmykPersonalLayout}
                        height={contentHeight}
                        scale={scale}
                        resolveSrc={resolveCmykSrc}
                        onSelectImage={setSelectedImage}
                        imageTitle="CMYK WORK"
                        getZIndex={getCmykPersonalZIndex}
                        imageClassName={getCmykPersonalImageClass}
                    />
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

                    <WorkCanvas
                        layout={cmykCommercialLayout}
                        height={comContentHeight}
                        scale={scale}
                        resolveSrc={resolveCmykSrc}
                        onSelectImage={setSelectedImage}
                        imageTitle="COMMERCIAL WORK"
                        sortEntries={false}
                        itemClassName="absolute drop-shadow-xl hover:scale-[1.02] transition-transform cursor-pointer"
                        imageClassName="w-full h-full object-contain"
                    />
                </div>
            )}


            <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
        </div>
    );
};

export default CMYK;
