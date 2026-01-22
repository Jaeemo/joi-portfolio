import React from 'react';
import Main from './Main'; // Use Main as Hero

const Info = () => {
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* 1. Main Page as Hero (Top Section) */}
      <Main activePage="info" />

      {/* 2. Page Content (Below the Main Hero) */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">

        {/* 2-Column Layout */}
        <div className="flex flex-col md:flex-row gap-20">

          {/* LEFT COLUMN: EDUCATION */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-black mb-8 border-b-4 border-black pb-2 uppercase tracking-tight">EDUCATION</h2>

            <div className="space-y-8 font-bold text-lg md:text-xl font-sans">

              <div>
                <p className="mb-1">2025 (KR)</p>
                <p className="text-xl md:text-2xl font-black uppercase">DAZED KOREA</p>
                <p className="text-gray-600">- Graphic Deisgner/Digital editor</p>
              </div>

              {/* Item 1 */}
              <div>
                <p className="mb-1">2024-2025 (BE)</p>
                <p className="text-xl md:text-2xl font-black uppercase">Royal Academy of Fine Arts Antwerp</p>
                <p className="text-gray-600">- GRAPHIC DESIGN MA</p>
              </div>

              {/* Item 2 */}
              <div>
                <p className="mb-1">2019-2024 (BE)</p>
                <p className="text-xl md:text-2xl font-black uppercase">Royal Academy Of Fine Arts Antwerp</p>
                <p className="text-gray-600">- GRAPHIC DESIGN BA</p>
              </div>

              {/* Item 3 */}
              <div>
                <p className="mb-1">2018-2019 (JP)</p>
                <p className="text-xl md:text-2xl font-black uppercase">COCONOGACCO</p>
                <p className="text-gray-600">- PRIMARY COURSE</p>
              </div>

              {/* Item 4 */}
              <div>
                <p className="mb-1">2015-2018 (KR)</p>
                <p className="text-xl md:text-2xl font-black uppercase">KONKUK UNIV.</p>
                <p className="text-gray-600">- FASHION DESIGN</p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: EXHIBITIONS */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-black mb-8 border-b-4 border-black pb-2 uppercase tracking-tight">EXHIBITIONS</h2>

            <div className="space-y-12 font-sans text-lg md:text-xl">

              {/* 2025 Block */}
              <div>
                <h3 className="text-2xl md:text-2xl font-black mb-4">2025</h3>

                {/* Item 1 */}
                <div className="mb-8">
                  <p className="font-medium mb-1">오버하우젠 단편영화제</p>
                  <p className="text-xl md:text-2xl font-black uppercase leading-tight mb-1">INTERNATIONAL SHORT FILM FESTIVAL OBERHAUSEN</p>
                  <p className="text-xl md:text-2xl font-black uppercase leading-tight mb-1">FILM SCREENING - "MIRRORING"</p>
                  <p className="text-xl md:text-2xl font-black uppercase leading-tight">(DE)</p>
                  <p className="font-medium mb-1">온보드 비엔날레</p>
                  <p className="text-xl md:text-2xl font-black uppercase leading-tight mb-1">ONBOARDS BIENNALE</p>
                  <p className="text-xl md:text-2xl font-black uppercase leading-tight mb-1">-EXHIBITION ON BILLBOARDS</p>
                  <p className="text-xl md:text-2xl font-black uppercase leading-tight">(BE)</p>
                </div>
              </div>

              {/* 2024 Block */}
              <div>
                <h3 className="text-2xl md:text-2xl font-black mb-4">2024</h3>
                <div>
                  <p className="font-medium mb-1">원미닛 단편영화 상영</p>
                  <p className="text-xl md:text-2xl font-black uppercase leading-tight mb-1">THE ONE MINUTES</p>
                  <p className="text-xl md:text-2xl font-black uppercase leading-tight mb-1">"MIRRORING"</p>
                  <p className="text-xl md:text-2xl font-black uppercase leading-tight mb-1">MOVIE SCREENING</p>
                  <p className="text-xl md:text-2xl font-black uppercase leading-tight">(NL)</p>
                </div>
              </div>

              {/* 2023 Block */}
              <div>
                <h3 className="text-2xl md:text-2xl font-black mb-4">2023</h3>
                <div>
                  <p className="font-medium mb-1">로렘입숨 전시</p>
                  <p className="text-xl md:text-2xl font-black uppercase leading-tight mb-1">_LOREM IPSUM) EXHIBITION</p>
                  <p className="text-xl md:text-2xl font-black uppercase leading-tight">(NL)</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Info;