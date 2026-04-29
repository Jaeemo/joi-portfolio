import re

with open('/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', 'r') as f:
    content = f.read()

# 1. New layout config with larger gaps and removing 14-1.png
new_layout = """const layoutConfigCommercial = {
    '2-1.png': { x: 80, y: 50, w: 400, h: 600, source: 'commercials' },
    '2-2.png': { x: 530, y: 50, w: 400, h: 600, source: 'commercials' },
    '2-3.png': { x: 980, y: 50, w: 400, h: 600, source: 'commercials' },
    '2-4.png': { x: 1430, y: 50, w: 400, h: 600, source: 'commercials' },

    '3-1-3.png': { x: 0, y: 2200, w: 800, h: 800, source: 'commercials' },
    '3-1-2.png': { x: 400, y: 2100, w: 350, h: 350, source: 'commercials' },
    '3-1-1.png': { x: 100, y: 2550, w: 350, h: 350, source: 'commercials' },
    '3-2.png': { x: 900, y: 2200, w: 450, h: 600, source: 'commercials' },
    '3-3.png': { x: 1400, y: 2200, w: 450, h: 600, source: 'commercials' },
    '3-4.png': { x: 900, y: 2900, w: 450, h: 600, source: 'commercials' },
    '3-5.png': { x: 1400, y: 2900, w: 450, h: 600, source: 'commercials' },

    'video-1.mp4': { x: 100, y: 4400, w: 800, h: 450, source: 'commercials' },
    'video-2.mp4': { x: 1000, y: 4400, w: 800, h: 450, source: 'commercials' },

    '4-1.png': { x: 100, y: 5800, w: 500, h: 888, source: 'commercials' },
    '4-2.png': { x: 700, y: 5800, w: 500, h: 888, source: 'commercials' },
    '4-3.png': { x: 1300, y: 5800, w: 500, h: 888, source: 'commercials' },

    '5-1.png': { x: 100, y: 7600, w: 500, h: 888, source: 'commercials' },
    '5-2.png': { x: 700, y: 7600, w: 500, h: 888, source: 'commercials' },
    '5-3.png': { x: 1300, y: 7600, w: 500, h: 888, source: 'commercials' },

    '6-1.jpg': { x: 50, y: 9400, w: 850, h: 1100, source: 'commercials' },
    '6-2.png': { x: 1000, y: 9400, w: 850, h: 1100, source: 'commercials' },
};"""

content = re.sub(r'const layoutConfigCommercial = \{.*?\};', new_layout, content, flags=re.DOTALL)

# 2. Update Sidebar text blocks offsets
new_sidebar = """{/* Left: Description Sidebar Bar */}
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
                        <div className="absolute w-full p-10" style={{ top: `${2200 * scale}px` }}>
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
                        <div className="absolute w-full p-10" style={{ top: `${4400 * scale}px` }}>
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
                        <div className="absolute w-full p-10" style={{ top: `${5800 * scale}px` }}>
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
                        <div className="absolute w-full p-10" style={{ top: `${7600 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">DAZED KOREA MONTHLY HIGHLIGHTS</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2025</span>
                                </div>
                            </div>
                        </div>

                        {/* 7. MONCLER */}
                        <div className="absolute w-full p-10" style={{ top: `${9400 * scale}px` }}>
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
                    </div>"""

target_old = r"\{/\* Left: Description Sidebar Bar \*/\}.*?\{/\* Right: Image Canvas \*/\}"
content = re.sub(target_old, new_sidebar + "\n\n                    {/* Right: Image Canvas */}", content, flags=re.DOTALL)

with open('/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', 'w') as f:
    f.write(content)

