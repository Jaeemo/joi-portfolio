import React, { useState, useEffect } from 'react';
import Main from './Main';
import { rgbProjects } from '../data/projects';

const layoutConfig = {
    '1.png': { x: 0, y: 1146, w: 1920, h: 1080 },
    '2.png': { x: 0, y: 2226, w: 1920, h: 1080 },
    '3.png': { x: 0, y: 3306, w: 1920, h: 1080 },
    '4.png': { x: -709, y: 5442, w: 3338, h: 2808 },
    '5.png': { x: 0, y: 8186, w: 1209, h: 1600 },
    '6.png': { x: 382, y: 9059, w: 1538, h: 2050 },
    '7.png': { x: 59, y: 11109, w: 1802, h: 2988 },
    '8.png': { x: 802, y: 14397, w: 1139, h: 1485 },
    '9.png': { x: 59, y: 15147, w: 1202, h: 1669 },
    '10.png': { x: 0, y: 18471, w: 1920, h: 1080 },
    '11.png': { x: -104, y: 19456, w: 2128, h: 1270 },
    '12.png': { x: 50, y: 20661, w: 1813, h: 1867 },
    '13.png': { x: -45, y: 22528, w: 2010, h: 1220 },
    '14-1.png': { x: -23, y: 23748, w: 1002, h: 1336 },
    '14-2.png': { x: 940, y: 23748, w: 1002, h: 1336 },
};

const RGB = () => {
    const [allImages, setAllImages] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [scale, setScale] = useState(1);

    // Calculate max height based on the last image
    const lastImage = layoutConfig['14-2.png'];
    const contentHeight = lastImage ? lastImage.y + lastImage.h + 50 : 30000;

    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            const newScale = Math.min(Math.max(currentWidth / 1920, 0.2), 1.5);
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

    const getImageSrc = (filename) => allImages[filename] || null;

    // Get project data - Checked projects.js, we only have 2 projects in rgbProjects
    const toothFairy = rgbProjects[0];
    const angelHeart = rgbProjects[1]; // This was previously accessed incorrectly as angelite
    const virtualIdolText = angelHeart?.imageLayout?.find(item => item.type === 'text-section');

    if (!toothFairy || !angelHeart) return null; // Prevent crash if data is missing

    return (
        <div className="relative w-full min-h-screen bg-white selection:bg-pink-500 selection:text-white overflow-hidden">
            <Main activePage="rgb" />

            {/* Wrapper to hold height */}
            <div style={{ height: `${contentHeight * scale}px`, position: 'relative', width: '100%', overflow: 'hidden' }}>
                {/* Scalable Container */}
                <div
                    className="absolute origin-top-left transition-transform duration-100 ease-out"
                    style={{
                        width: '1920px',
                        height: `${contentHeight}px`,
                        transform: `scale(${scale})`,
                    }}
                >
                    {/* 1. TOOTH FAIRY (Top) */}
                    <div className="absolute left-[100px] top-[200px] w-[1720px] z-30">
                        <div className="mb-12">
                            <div className="flex justify-between items-baseline border-b border-black pb-4 mb-8">
                                <h2 className="text-7xl font-anton-sc uppercase tracking-tighter leading-none">
                                    {toothFairy.title}
                                </h2>
                                <span className="text-6xl font-anton-sc tracking-tighter shrink-0 ml-8">
                                    {toothFairy.year}
                                </span>
                            </div>
                            <div className="flex justify-between items-start">
                                {toothFairy.descriptionKo && (
                                    <div
                                        className="w-[830px] text-2xl leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep"
                                        dangerouslySetInnerHTML={{ __html: toothFairy.descriptionKo }}
                                    />
                                )}
                                {toothFairy.descriptionEn && (
                                    <div
                                        className="w-[830px] text-2xl leading-relaxed text-gray-800 uppercase font-bold tracking-tight whitespace-pre-wrap font-anton-sc"
                                        style={{ textWrap: 'pretty' }}
                                        dangerouslySetInnerHTML={{ __html: toothFairy.descriptionEn }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* 2. ANGEL HEART (Between 3.png and 4.png) */}
                    {/* 3.png ends at 4986. 4.png starts at 6042. Placing at 5500. */}
                    <div className="absolute left-[100px] top-[4800px] w-[1720px] z-30">
                        <div className="mb-12">
                            <div className="flex justify-between items-baseline border-b border-black pb-4 mb-8">
                                <h2 className="text-7xl font-anton-sc uppercase tracking-tighter leading-none">
                                    {angelHeart.title}
                                </h2>
                                <span className="text-6xl font-anton-sc tracking-tighter shrink-0 ml-8">
                                    {angelHeart.year}
                                </span>
                            </div>
                            <div className="flex justify-between items-start">
                                {angelHeart.descriptionKo && (
                                    <div
                                        className="w-[830px] text-3xl leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep"
                                        dangerouslySetInnerHTML={{ __html: angelHeart.descriptionKo }}
                                    />
                                )}
                                {angelHeart.descriptionEn && (
                                    <div
                                        className="w-[830px] text-3xl leading-relaxed text-gray-800 uppercase font-bold tracking-tight whitespace-pre-wrap font-anton-sc"
                                        style={{ textWrap: 'pretty' }}
                                        dangerouslySetInnerHTML={{ __html: angelHeart.descriptionEn }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* 3. Text Section: EVERY ANGEL IS TERRIFYING (Between 9 and 10) */}
                    {/* 9.png ends at ~16900. 10.png starts at 19071. Placing at 17800. */}
                    {virtualIdolText && (
                        <div className="absolute left-[100px] top-[17200px] w-[1720px] z-30">
                            <div className="mb-12">
                                <div className="flex justify-between items-baseline border-b border-black pb-4 mb-8">
                                    <div className="max-w-2xl">
                                        <h2 className="text-7xl font-anton-sc uppercase tracking-tighter leading-none">
                                            {virtualIdolText.title}
                                        </h2>
                                        {virtualIdolText.subtitle && (
                                            <h3 className="text-5xl font-anton-sc uppercase tracking-tighter leading-tight mt-2">
                                                {virtualIdolText.subtitle}
                                            </h3>
                                        )}
                                    </div>
                                    <div className="flex flex-col items-end shrink-0 ml-8">
                                        <span className="text-6xl font-anton-sc tracking-tighter">
                                            {virtualIdolText.year}
                                        </span>
                                        {virtualIdolText.note && (
                                            <span className="text-sm font-bold font-sans mt-2">
                                                {virtualIdolText.note}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-between items-start">
                                    {virtualIdolText.descKo && (
                                        <div
                                            className="w-[830px] text-2xl leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep"
                                            dangerouslySetInnerHTML={{ __html: virtualIdolText.descKo }}
                                        />
                                    )}
                                    {virtualIdolText.descEn && (
                                        <div
                                            className="w-[830px] text-2xl leading-relaxed text-gray-800 uppercase font-bold tracking-tight whitespace-pre-wrap font-anton-sc"
                                            style={{ textWrap: 'pretty' }}
                                            dangerouslySetInnerHTML={{ __html: virtualIdolText.descEn }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Images */}
                    {Object.entries(layoutConfig)
                        .sort(([filenameA], [filenameB]) => {
                            const getZIndex = (name) => {
                                if (name === '5.png') return 100;
                                if (name === '8.png') return 90; // High z-index for 8.png
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
