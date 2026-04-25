import re

with open('/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', 'r') as f:
    content = f.read()

# Add layoutConfigCommercial right after layoutConfig
layout_commercial = """
const layoutConfigCommercial = {
    '14-1.png': { x: 0, y: 1000, w: 1920, h: 1080, source: 'images' },
    '2-1.png': { x: 100, y: 2150, w: 400, h: 600, source: 'commercials' },
    '2-2.png': { x: 550, y: 2150, w: 400, h: 600, source: 'commercials' },
    '2-3.png': { x: 1000, y: 2150, w: 400, h: 600, source: 'commercials' },
    '2-4.png': { x: 1450, y: 2150, w: 400, h: 600, source: 'commercials' },

    '3-1-3.png': { x: 0, y: 3000, w: 800, h: 800, source: 'commercials' },
    '3-1-2.png': { x: 400, y: 2900, w: 350, h: 350, source: 'commercials' },
    '3-1-1.png': { x: 100, y: 3350, w: 350, h: 350, source: 'commercials' },
    '3-2.png': { x: 900, y: 3000, w: 450, h: 600, source: 'commercials' },
    '3-3.png': { x: 1400, y: 3000, w: 450, h: 600, source: 'commercials' },
    '3-4.png': { x: 900, y: 3700, w: 450, h: 600, source: 'commercials' },
    '3-5.png': { x: 1400, y: 3700, w: 450, h: 600, source: 'commercials' },

    'video-1.mp4': { x: 100, y: 4500, w: 800, h: 450, source: 'commercials' },
    'video-2.mp4': { x: 1000, y: 4500, w: 800, h: 450, source: 'commercials' },

    '4-1.png': { x: 100, y: 5200, w: 500, h: 888, source: 'commercials' },
    '4-2.png': { x: 700, y: 5200, w: 500, h: 888, source: 'commercials' },
    '4-3.png': { x: 1300, y: 5200, w: 500, h: 888, source: 'commercials' },

    '5-1.png': { x: 100, y: 6400, w: 500, h: 888, source: 'commercials' },
    '5-2.png': { x: 700, y: 6400, w: 500, h: 888, source: 'commercials' },
    '5-3.png': { x: 1300, y: 6400, w: 500, h: 888, source: 'commercials' },

    '6-1.jpg': { x: 50, y: 7600, w: 850, h: 1100, source: 'commercials' },
    '6-2.png': { x: 1000, y: 7600, w: 850, h: 1100, source: 'commercials' },
};
"""
content = re.sub(r'(const layoutConfig = \{.*?\n\};\n)', r'\1\n' + layout_commercial, content, flags=re.DOTALL)

# Add logic for content height of commercial
content = content.replace("const contentHeight = lastImage ? lastImage.y + lastImage.h + 50 : 30000;", """const lastImage = layoutConfig['14-2.png'];
    const contentHeight = lastImage ? lastImage.y + lastImage.h + 50 : 30000;
    
    const lastComImage = layoutConfigCommercial['6-2.png'];
    const comContentHeight = lastComImage ? lastComImage.y + lastComImage.h + 50 : 10000;
""")

# Build the new commercial layout
new_commercial_jsx = """{activeFilter === 'commercial' && (
                <div className="flex w-full">
                    {/* Left: Description Sidebar Bar */}
                    <div
                        className="border-r border-black/10 bg-white relative"
                        style={{ width: `${SIDEBAR_WIDTH}px`, minWidth: `${SIDEBAR_WIDTH}px` }}
                    >
                        {/* 1. CV INFO */}
                        <div className="absolute w-full p-10" style={{ top: `${0 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">
                                        최다정 JOI CHOI
                                    </h2>
                                </div>
                                <div className="text-sm font-bold leading-relaxed mb-6">CONTACTS/연락처<br/>+82 10 2618 6370<br/>joichoi.work@gmail.com<br/>@joichoioi / @joicholi</div>
                                <div className="text-sm font-bold leading-relaxed mb-6">LANGUAGES<br/>KOREAN (Native)<br/>ENGLISH (Fluent)<br/>JAPANESE (Advanced)</div>
                                <div className="text-sm font-bold leading-relaxed mb-6">CAREER/경력<br/>DAZED KOREA (2025.09 - 2026.03)</div>
                                <div className="text-sm font-bold leading-relaxed mb-6">EXHIBITION/전시<br/>2025 International Short Film Festival Oberhausen<br/>2025 Onboards Biennale<br/>2024 The one minutes<br/>2023 _Lorem Ipsum exhibition</div>
                                <div className="text-sm font-bold leading-relaxed">EDUCATION/학력<br/>Royal Academy of Fine Arts Antwerp MA (Graphic Design)<br/>coconogacco Primary Course<br/>Konkuk Univ. (Fashion Design)</div>
                            </div>
                        </div>

                        {/* 2. ANGELITE */}
                        <div className="absolute w-full p-10" style={{ top: `${1000 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-3xl font-pretendard font-bold uppercase tracking-tighter leading-none mb-2">VIRTUAL IDOL - ANGELITE</h2>
                                    <h3 className="text-xl font-pretendard font-bold uppercase tracking-tighter leading-tight mt-2">Every angel is terrifying *</h3>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2024</span>
                                </div>
                                <div className="text-sm font-bold leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6">
                                    <span className="mb-1 block uppercase">ROLE</span>
                                    컨셉기획 · 3D캐릭터 디자인 · 모션 트래킹 · AI 보이스 디렉션 · 아트 디렉션/제작
                                </div>
                                <div className="text-sm font-bold leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6">
                                    <span className="mb-1 block uppercase">TOOL</span>
                                    Adobe After Effects · Adobe Illustrator · Adobe Premiere Pro · Adobe Indesign · Blender
                                </div>
                                <div className="text-sm font-medium leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6">
                                    <span className="mb-1 block uppercase font-bold">PROJECT</span>
                                    네 명의 캐릭터로 구성된 Angelite는 모두 하나의 디자이너의 움직임을 기반으로 만들어졌다. 모션 트래킹 기술을 통해 디자이너의 몸짓을 실시간으로 반영하며, 음성은 AI 기반 변조를 통해 각기 다른 인격과 감정, 말투를 갖춘 개별 캐릭터로 연기된다. 겉보기에 이들은 실존하는 인물처럼 보이지만, 실체는 오직 하나뿐이다. Angelite는 실재와 허구, 자아와 이미지, 감정과 알고리즘 사이의 긴장을 드러내는 프로젝트이다.
                                </div>
                            </div>
                        </div>

                        {/* 3. CD GRAPHICS */}
                        <div className="absolute w-full p-10" style={{ top: `${3000 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-3xl font-pretendard font-bold uppercase tracking-tighter leading-none mb-2">ANGELITE CD GRAPHICS</h2>
                                </div>
                                <div className="text-sm font-bold leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6">
                                    엔젤라이트 앨범 그래픽/로고<br/>(150x150 mm)<br/><br/>
                                    버츄얼 아이돌 포토카드<br/>(55x85 mm)
                                </div>
                            </div>
                        </div>

                        {/* 4. VIDEOS */}
                        <div className="absolute w-full p-10" style={{ top: `${4500 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-3xl font-pretendard font-bold uppercase tracking-tighter leading-none mb-2">ANGELITE VIDEOS</h2>
                                </div>
                                <div className="text-sm font-bold leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6">
                                    Angelite Teaser Video<br/>Angelite Fake Youtube Live Video
                                </div>
                            </div>
                        </div>

                        {/* 5. DIDI DAZED */}
                        <div className="absolute w-full p-10" style={{ top: `${5200 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-3xl font-pretendard font-bold uppercase tracking-tighter leading-none mb-2">DIDI-DAZED KOREA ORIGINAL CHARACTER</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2025-2026</span>
                                </div>
                                <div className="text-sm font-bold leading-relaxed tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="uppercase block">CLIENT</span>DAZED KOREA</div>
                                <div className="text-sm font-bold leading-relaxed tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="uppercase block">ROLE</span>오리지널 캐릭터 기획 · 3D 모델링 · 리깅 · 애니메이션 · 편집 · 색보정 · 사운드 디렉션 (전담)</div>
                                <div className="text-sm font-bold leading-relaxed tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="uppercase block">TOOL</span>Blender · Adobe After Effects · Premiere Pro</div>
                            </div>
                        </div>

                        {/* 6. DAZED MONTHLY */}
                        <div className="absolute w-full p-10" style={{ top: `${6400 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-3xl font-pretendard font-bold uppercase tracking-tighter leading-none mb-2">DAZED KOREA MONTHLY HIGHLIGHTS</h2>
                                </div>
                            </div>
                        </div>

                        {/* 7. MONCLER */}
                        <div className="absolute w-full p-10" style={{ top: `${7600 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-3xl font-pretendard font-bold uppercase tracking-tighter leading-none mb-2">DAZED KOREA — BRAND COLLABORATION VFX</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2025</span>
                                </div>
                                <div className="text-sm font-bold leading-relaxed tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="uppercase block">ARTIST</span>BOYNEXTDOOR CORTIS</div>
                                <div className="text-sm font-bold leading-relaxed tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="uppercase block">BRAND</span>MONCLER BALENCIAGA</div>
                                <div className="text-sm font-bold leading-relaxed tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="uppercase block">ROLE</span>3D 모델링 · 쉐이딩 · 라이팅 · 렌더링 · VFX 컴포지팅 · 컬러 그레이딩</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image Canvas */}
                    <div
                        className="flex-1 relative overflow-hidden bg-[#e5e5e5]"
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
            )}"""

# Replace in file
target_old = r"\{activeFilter === 'commercial' && \(\s*<div className=\"flex w-full min-h-screen bg-black text-white relative\">.*?</div>\s*\)\}"
content = re.sub(target_old, new_commercial_jsx, content, flags=re.DOTALL)

with open('/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', 'w') as f:
    f.write(content)
