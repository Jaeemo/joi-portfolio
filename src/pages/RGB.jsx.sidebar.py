import re

with open('/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', 'r') as f:
    content = f.read()

new_sidebar = """{/* Left: Description Sidebar Bar */}
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
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none mb-2">VIRTUAL IDOL — ANGELITE</h2>
                                    <h3 className="text-xl font-pretendard font-bold tracking-tighter leading-tight mt-2 text-gray-600">Every angel is terrifying *</h3>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-4 block">2024</span>
                                </div>
                                <div className="text-sm font-bold leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6">
                                    <span className="mb-1 block uppercase text-gray-500">ROLE</span>
                                    컨셉기획 · 3D캐릭터 디자인 · 모션 트래킹 · AI 보이스 디렉션 · 아트 디렉션/제작
                                </div>
                                <div className="text-sm font-bold leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6">
                                    <span className="mb-1 block uppercase text-gray-500">TOOL</span>
                                    Adobe After Effects · Adobe Illustrator · Adobe Premiere Pro · Adobe Indesign · Blender
                                </div>
                                <div className="text-sm font-bold leading-relaxed text-gray-900 tracking-tight whitespace-pre-wrap break-keep mb-6">
                                    <span className="mb-1 block uppercase text-gray-500">PROJECT</span>
                                    네 명의 캐릭터로 구성된 Angelite는 모두 하나의 디자이너의 움직임을 기반으로 만들어졌다. 모션 트래킹 기술을 통해 디자이너의 몸짓을 실시간으로 반영하며, 음성은 AI 기반 변조를 통해 각기 다른 인격과 감정, 말투를 갖춘 개별 캐릭터로 연기된다. 겉보기에 이들은 실존하는 인물처럼 보이지만, 실체는 오직 하나뿐이다. Angelite는 실재와 허구, 자아와 이미지, 감정과 알고리즘 사이의 긴장을 드러내는 프로젝트이다.
                                </div>
                            </div>
                        </div>

                        {/* 3. CD GRAPHICS */}
                        <div className="absolute w-full p-10" style={{ top: `${3000 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">ANGELITE CD GRAPHICS</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2024</span>
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
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">ANGELITE VIDEOS</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2024</span>
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
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">DIDI — DAZED KOREA ORIGINAL CHARACTER</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2025—2026</span>
                                </div>
                                <div className="text-sm font-bold leading-relaxed tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="uppercase block mb-1 text-gray-500">CLIENT</span>DAZED KOREA</div>
                                <div className="text-sm font-bold leading-relaxed tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="uppercase block mb-1 text-gray-500">ROLE</span>오리지널 캐릭터 기획 · 3D 모델링 · 리깅 · 애니메이션 · 편집 · 색보정 · 사운드 디렉션 (전담)</div>
                                <div className="text-sm font-bold leading-relaxed tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="uppercase block mb-1 text-gray-500">TOOL</span>Blender · Adobe After Effects · Premiere Pro</div>
                            </div>
                        </div>

                        {/* 6. DAZED MONTHLY */}
                        <div className="absolute w-full p-10" style={{ top: `${6400 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">DAZED KOREA MONTHLY HIGHLIGHTS</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2025</span>
                                </div>
                            </div>
                        </div>

                        {/* 7. MONCLER */}
                        <div className="absolute w-full p-10" style={{ top: `${7600 * scale}px` }}>
                            <div className="mb-16">
                                <div className="border-b border-black pb-4 mb-6">
                                    <h2 className="text-4xl font-pretendard font-bold uppercase tracking-tighter leading-none">DAZED KOREA — BRAND COLLABORATION VFX</h2>
                                    <span className="text-3xl font-pretendard font-bold tracking-tighter mt-2 block">2025</span>
                                </div>
                                <div className="text-sm font-bold leading-relaxed tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="uppercase block mb-1 text-gray-500">ARTIST</span>BOYNEXTDOOR CORTIS</div>
                                <div className="text-sm font-bold leading-relaxed tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="uppercase block mb-1 text-gray-500">BRAND</span>MONCLER BALENCIAGA</div>
                                <div className="text-sm font-bold leading-relaxed tracking-tight whitespace-pre-wrap break-keep mb-4"><span className="uppercase block mb-1 text-gray-500">ROLE</span>3D 모델링 · 쉐이딩 · 라이팅 · 렌더링 · VFX 컴포지팅 · 컬러 그레이딩</div>
                            </div>
                        </div>
                    </div>"""

target_old = r"\{/\* Left: Description Sidebar Bar \*/\}.*?\{/\* Right: Image Canvas \*/\}"
content = re.sub(target_old, new_sidebar + "\n\n                    {/* Right: Image Canvas */}", content, flags=re.DOTALL)

with open('/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', 'w') as f:
    f.write(content)
