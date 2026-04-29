import re

with open('/Users/jaeuahn/joi-portfolio/RGB_HEAD.jsx', 'r') as f:
    head_content = f.read()

# 1. We extract the exact `personal` block from HEAD (which is perfect)
personal_match = re.search(r'(\{/\* Content Section - Filter based \*/\}\s*\{activeFilter === \'personal\' && \(\s*<div className="flex w-full">.*?)\s*\{activeFilter === \'commercial\' &&', head_content, re.DOTALL)
personal_block = personal_match.group(1)

# 2. We inject the new highly dense layoutConfigCommercial instead of whatever is in HEAD.
new_layout = """const layoutConfigCommercial = {
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

    '5-1.png': { x: 0, y: 7400, w: 600, h: 1066, source: 'commercials' },
    '5-2.png': { x: 640, y: 7400, w: 600, h: 1066, source: 'commercials' },
    '5-3.png': { x: 1280, y: 7400, w: 600, h: 1066, source: 'commercials' },

    '6-1.jpg': { x: 0, y: 8800, w: 920, h: 1186, source: 'commercials' },
    '6-2.png': { x: 960, y: 8800, w: 920, h: 1186, source: 'commercials' },
};"""

# Replace layout config in head_content
content_with_layout = re.sub(r'const layoutConfigCommercial\s*=\s*\{.*?\};', new_layout, head_content, flags=re.DOTALL)

# 3. We construct the perfect commercial block using our dense Y coordinates
commercial_block = """            {activeFilter === 'commercial' && (
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
                                    엔젤라이트 앨범 그래픽/로고<br/>(150x150 mm)<br/><br/>
                                    버츄얼 아이돌 포토카드<br/>(55x85 mm)
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
                                    Angelite Teaser Video<br/>Angelite Fake Youtube Live Video
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
            )}"""

# Replace everything after the personal block start
target_block = re.search(r'\{/\* Content Section - Filter based \*/\}.*?(?=\s*\{/\* Lightbox \*/\})', content_with_layout, re.DOTALL)
final_content = content_with_layout[:target_block.start()] + personal_block + "\n" + commercial_block + "\n" + content_with_layout[target_block.end():]

with open('/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', 'w') as f:
    f.write(final_content)

