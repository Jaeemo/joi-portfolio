import re

with open('/Users/jaeuahn/joi-portfolio/src/pages/CMYK.jsx', 'r') as f:
    content = f.read()

# Add layoutConfigCommercial
layout_commercial = """
    const layoutConfigCommercial = {
        'CMYK_Cm1.jpg': { x: 100, y: 150, w: 1600, h: 2200, source: 'images' },
        '7-1.png': { x: 50, y: 2600, w: 550, h: 800, source: 'commercials' },
        '7-2.png': { x: 650, y: 2600, w: 550, h: 800, source: 'commercials' },
        '7-3.png': { x: 1250, y: 2600, w: 550, h: 800, source: 'commercials' },
    };
"""
content = re.sub(r'(const layoutConfig = \{.*?\n    \};\n)', r'\1\n' + layout_commercial, content, flags=re.DOTALL)

# Add logic for content height of commercial
content = content.replace("const contentHeight = lastImage ? lastImage.y + lastImage.h + 50 : 20000;", """const lastImage = layoutConfig['15.png'];
    const contentHeight = lastImage ? lastImage.y + lastImage.h + 50 : 20000;
    
    const lastComImage = layoutConfigCommercial['7-3.png'];
    const comContentHeight = lastComImage ? lastComImage.y + lastComImage.h + 50 : 5000;
""")

new_commercial_jsx = """{activeFilter === 'commercial' && (
                <div className="flex w-full">
                    {/* Left: Description Sidebar Bar */}
                    <div
                        className="border-r border-black/10 bg-white relative"
                        style={{ width: `${SIDEBAR_WIDTH}px`, minWidth: `${SIDEBAR_WIDTH}px` }}
                    >
                        {/* 1. YAMADA RYOSUKE */}
                        <div className="absolute w-full p-10 pt-12 text-[#FF00B3] font-pretendard" style={{ top: `${150 * scale}px` }}>
                            <h2 className="text-base font-bold uppercase tracking-tighter leading-tight mb-8">
                                <div>2026 APRIL ISSUE</div>
                                <div className="pl-6 font-extrabold mt-1 text-lg">DAZED KOREA<br/>-YAMADA RYOSUKE</div>
                            </h2>
                            <div className="mb-6">
                                <h3 className="font-bold text-sm mb-1 mt-4 tracking-tight">ARTIST</h3>
                                <p className="text-base font-extrabold leading-snug pl-6">YAMADA RYOSUKE<br />(HEY! SAY! JUMP)</p>
                            </div>
                            <div className="mb-6">
                                <h3 className="font-bold text-sm mb-1 mt-4 tracking-tight">PUBLISHED IN</h3>
                                <p className="text-base font-extrabold leading-snug pl-6">DAZED KOREA</p>
                            </div>
                            <div className="mb-6">
                                <h3 className="font-bold text-sm mb-1 mt-4 tracking-tight">CONCEPT</h3>
                                <p className="text-base font-extrabold leading-snug pl-6">
                                    노력하는 왕자님 -지금의<br />‘야마다 료스케’가 되기까지.<br />여유만만의, 본투비 왕자라<br />고 생각했던 그는 사실 엄청<br />난 노력파다. 고군분투해야<br />했던 그는, 이제 모두의 왕자<br />님이 되었다. 오늘도, 왕자는<br />고군분투한다!
                                </p>
                            </div>
                            <div className="mb-6">
                                <h3 className="font-bold text-sm mb-1 mt-4 tracking-tight">ROLE</h3>
                                <p className="text-base font-extrabold leading-snug pl-6">화보 컨셉 기획 · 시안 제작 ·<br />커뮤니케이션 · 인터뷰 · 텍<br />스트 · 디지털 콘텐츠 제작</p>
                            </div>
                            <div className="mb-6">
                                <h3 className="font-bold text-sm mb-1 mt-4 tracking-tight">FORMAT</h3>
                                <p className="text-base font-extrabold leading-snug pl-6">14p 지면 · 디지털 콘텐츠<br />영상 2 · 인터뷰</p>
                            </div>
                            <div className="mb-6 mt-10">
                                <h3 className="font-bold text-sm mb-1 mt-4 tracking-tight">CREDITS</h3>
                                <p className="text-base font-extrabold leading-snug pl-6">text JOI<br />fashion RYO, LANG<br />photograhy JANG<br />DUKHWA<br />hair & make-up JANG<br />HAJUN</p>
                            </div>
                        </div>

                        {/* 2. DAZED KOREA APRIL ISSUE */}
                        <div className="absolute w-full p-10 pt-12 text-[#FF00B3] font-pretendard" style={{ top: `${2600 * scale}px` }}>
                            <h2 className="text-base font-bold uppercase tracking-tighter leading-tight mb-8">
                                <div className="pl-6 font-extrabold mt-1 text-lg">DAZED KOREA<br/>APRIL ISSUE</div>
                            </h2>
                            <div className="mb-6">
                                <p className="text-base font-extrabold leading-snug pl-6">14 pages/6 착장<br/>데이즈드 코리아 4월호</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image Canvas */}
                    <div
                        className="flex-1 relative overflow-hidden bg-[#f8f8f8]"
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
            )}"""

# Replace in file
target_old = r"\{activeFilter === 'commercial' && \(\s*<div className=\"flex flex-col w-full min-h-screen bg-black\">.*?</div>\s*\)\}"
content = re.sub(target_old, new_commercial_jsx, content, flags=re.DOTALL)

with open('/Users/jaeuahn/joi-portfolio/src/pages/CMYK.jsx', 'w') as f:
    f.write(content)
