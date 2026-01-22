import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Info from './pages/Info';
import RGB from './pages/RGB';
import CMYK from './pages/CMYK';

function App() {
  return (
    <BrowserRouter>
      {/* 페이지 내용이 바뀌는 부분 */}
      <div className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/info" element={<Info />} />
          <Route path="/rgb" element={<RGB />} />
          <Route path="/cmyk" element={<CMYK />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;