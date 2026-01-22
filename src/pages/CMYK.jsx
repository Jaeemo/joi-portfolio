import React, { useState, useEffect } from 'react';
import Main from './Main';
import { cmykProjects } from '../data/projects';

const CMYK = () => {

    const layoutConfig = {
        '1.png': { x: 0, y: 1197, w: 1920, h: 2560 },
        '2.png': { x: 0, y: 3763, w: 1933, h: 1289 },
        '3-1.png': { x: 0, y: 4813, w: 1080, h: 1440 },
        '3-2.png': { x: 985, y: 5185, w: 1080, h: 1440 },
        '4.png': { x: 790, y: 6103, w: 1080, h: 1440 },
        '5.png': { x: 50, y: 6626, w: 1080, h: 1440 },
        '6.png': { x: 250, y: 7665, w: 1080, h: 1440 },
        '7.png': { x: -263, y: 9105, w: 2447, h: 2063 },
        '8.png': { x: 0, y: 11168, w: 935, h: 623 },
        '9.png': { x: 868, y: 11516, w: 1052, h: 701 },
        '10.png': { x: 811, y: 12261, w: 999, h: 1499 },
        '11.png': { x: -2, y: 15345, w: 1925, h: 1203 },
        '12-1.png': { x: 0, y: 16634, w: 981, h: 613 },
        '12-2.png': { x: 985, y: 16634, w: 940, h: 588 },
        '13-1.png': { x: 0, y: 17247, w: 624, h: 622 },
        '13-2.png': { x: 676, y: 17247, w: 623, h: 623 },
        '13-3.png': { x: 1299, y: 17251, w: 621, h: 619 },
        '14.png': { x: 173, y: 17870, w: 252, h: 270 },
        '15.png': { x: 425, y: 17956, w: 1070, h: 723 },
        'word1.png': { x: 1394, y: 11037, w: 470, h: 665 },
        'word2.png': { x: 0, y: 11877, w: 480, h: 679 },
        'word3.png': { x: 505, y: 12046, w: 480, h: 678 },
    };



    const [allImages, setAllImages] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [scale, setScale] = useState(1);

    // Calculate max height based on the last image
    const lastImage = layoutConfig['15.png'];
    const contentHeight = lastImage ? lastImage.y + lastImage.h + 200 : 20000;

    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            // Assuming 1920px is the base design width
            // Add a min-scale to prevent it from becoming too small on mobile if desired, or just simple scaling
            const newScale = Math.min(Math.max(currentWidth / 1920, 0.2), 1.5);
            setScale(newScale);
        };

        handleResize(); // Initial call
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

    const getImageSrc = (filename) => allImages[filename] || null;

    // Get project data
    const wetToDryProject = cmykProjects[0];
    const painToneData = wetToDryProject.imageLayout?.find(item => item.type === 'text-section');

    return (
        <div className="relative w-full min-h-screen bg-white selection:bg-pink-500 selection:text-white overflow-hidden">
            <Main activePage="cmyk" />

            {/* Scalable Container */}
            <div
                className="relative origin-top-left transition-transform duration-100 ease-out"
                style={{
                    width: '1920px',
                    height: `${contentHeight}px`,
                    transform: `scale(${scale})`,
                    marginBottom: '100px'
                }}
            >
                {/* 1. Header & Text Section: WET TO DRY (Top) */}
                <div className="absolute left-[100px] top-[200px] w-[1720px]">
                    <div className="mb-12">
                        <div className="flex justify-between items-baseline border-b border-black pb-4 mb-8">
                            <h2 className="text-7xl font-anton-sc uppercase tracking-tighter leading-none">
                                {wetToDryProject.title}
                            </h2>
                            <span className="text-6xl font-anton-sc tracking-tighter shrink-0 ml-8">
                                {wetToDryProject.year}
                            </span>
                        </div>
                        <div className="flex justify-between items-start">
                            {wetToDryProject.descKo && (
                                <div
                                    className="w-[830px] text-2xl leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{ __html: wetToDryProject.descKo }}
                                />
                            )}
                            {wetToDryProject.descEn && (
                                <div
                                    className="w-[830px] text-xl leading-relaxed text-gray-800 uppercase font-bold tracking-tight whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{ __html: wetToDryProject.descEn }}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* 2. Text Section: PAIN TONE (Between 10 and 11) */}
                {painToneData && (
                    <div className="absolute left-[100px] top-[14000px] w-[1720px]">
                        <div className="mb-12">
                            <div className="flex justify-between items-baseline border-b border-black pb-4 mb-8">
                                <h2 className="text-7xl font-anton-sc uppercase tracking-tighter leading-none">
                                    {painToneData.title}
                                </h2>
                                <span className="text-6xl font-anton-sc tracking-tighter shrink-0 ml-8">
                                    {painToneData.year}
                                </span>
                            </div>
                            <div className="flex justify-between items-start">
                                {painToneData.descKo && (
                                    <div
                                        className="w-[830px] text-2xl leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap"
                                        dangerouslySetInnerHTML={{ __html: painToneData.descKo }}
                                    />
                                )}
                                {painToneData.descEn && (
                                    <div
                                        className="w-[830px] text-xl leading-relaxed text-gray-800 uppercase font-bold tracking-tight whitespace-pre-wrap"
                                        dangerouslySetInnerHTML={{ __html: painToneData.descEn }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. Images from Layout Config */}
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

            {/* Wrapper height placeholder to enable scrolling */}
            <div style={{ height: `${contentHeight * scale}px`, pointerEvents: 'none' }}></div>

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
