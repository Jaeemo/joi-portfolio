export const SIDEBAR_WIDTH = 420;
export const MOBILE_SIDEBAR_WIDTH_MIN = 128;
export const MOBILE_SIDEBAR_WIDTH_MAX = 168;
export const MOBILE_SIDEBAR_WIDTH_RATIO = 0.34;

export const getResponsiveSidebarWidth = (viewportWidth) => {
  if (viewportWidth >= 768) return SIDEBAR_WIDTH;

  return Math.min(
    Math.max(viewportWidth * MOBILE_SIDEBAR_WIDTH_RATIO, MOBILE_SIDEBAR_WIDTH_MIN),
    MOBILE_SIDEBAR_WIDTH_MAX,
  );
};

export const getSidebarBlockStyle = ({ y, nextY, scale, isMobile, reserve = 16, minHeight = 64 }) => {
  const style = { top: `${y * scale}px` };

  if (isMobile && nextY) {
    style['--mobile-description-max-height'] = `${Math.max((nextY - y) * scale - reserve, minHeight)}px`;
  }

  return style;
};

export const angeliteImageY = 15744;
export const angeliteTextY = 15364;

export const rgbPersonalLayout = {
  '1.png': { x: 0, y: 150, w: 1920, h: 1080 },
  '2.png': { x: 0, y: 1230, w: 1920, h: 1080 },
  '3.png': { x: 0, y: 2310, w: 1920, h: 1080 },
  '4.png': { x: -709, y: 3590, w: 3338, h: 2808 },
  '4-1.png': { x: 1350, y: 5698, w: 450, h: 600 },
  '5.png': { x: 0, y: 6334, w: 1209, h: 1600 },
  '6.png': { x: 382, y: 7207, w: 1538, h: 2050 },
  '7.png': { x: 59, y: 9257, w: 1802, h: 2988 },
  '8.png': { x: 802, y: 12545, w: 1139, h: 1485 },
  '9.png': { x: 59, y: 13295, w: 1202, h: 1669 },
  '10.png': { x: 0, y: angeliteImageY, w: 1920, h: 1080 },
  '2-1.png': { x: 30, y: 18184, w: 450, h: 675, source: 'commercials' },
  '2-2.png': { x: 500, y: 18184, w: 450, h: 675, source: 'commercials' },
  '2-3.png': { x: 970, y: 18184, w: 450, h: 675, source: 'commercials' },
  '2-4.png': { x: 1440, y: 18184, w: 450, h: 675, source: 'commercials' },
  '3-1-3-transparent.png': { x: 260, y: 19300, w: 1400, h: 1400, source: 'commercials' },
  '3-1-2.png': { x: 250, y: 20100, w: 440, h: 440, source: 'commercials' },
  '3-1-1.png': { x: 1200, y: 19550, w: 440, h: 440, source: 'commercials' },
  '3-2.png': { x: 0, y: 20604, w: 440, h: 660, source: 'commercials' },
  '3-3.png': { x: 480, y: 20604, w: 440, h: 660, source: 'commercials' },
  '3-4.png': { x: 960, y: 20604, w: 440, h: 660, source: 'commercials' },
  '3-5.png': { x: 1440, y: 20604, w: 440, h: 660, source: 'commercials' },
  'video-1.mp4': { x: 0, y: 21650, w: 920, h: 517, source: 'commercials' },
  'video-2.mp4': { x: 960, y: 21650, w: 920, h: 517, source: 'commercials' },
};

export const rgbCommercialLayout = {
  '4-1.png': { x: 0, y: 50, w: 600, h: 1066, source: 'commercials' },
  '4-2.png': { x: 640, y: 50, w: 600, h: 1066, source: 'commercials' },
  '4-3.png': { x: 1280, y: 50, w: 600, h: 1066, source: 'commercials' },
  '5-1video.mp4': { x: 0, y: 1450, w: 600, h: 1066, source: 'commercials' },
  '5-2video.mp4': { x: 640, y: 1450, w: 600, h: 1066, source: 'commercials' },
  '5-3video.mp4': { x: 1280, y: 1450, w: 600, h: 1066, source: 'commercials' },
  '6-1.jpg': { x: 0, y: 2850, w: 920, h: 1186, source: 'commercials' },
  '6-2.png': { x: 960, y: 2850, w: 920, h: 1186, source: 'commercials' },
};

export const cmykPersonalLayout = {
  '1.png': { x: 0, y: 150, w: 1920, h: 2560 },
  '2.png': { x: 0, y: 2716, w: 1933, h: 1289 },
  '3-1.png': { x: 0, y: 3766, w: 1080, h: 1440 },
  '3-2.png': { x: 985, y: 4138, w: 1080, h: 1440 },
  '4.png': { x: 790, y: 5056, w: 1080, h: 1440 },
  '5.png': { x: 50, y: 5579, w: 1080, h: 1440 },
  '6.png': { x: 250, y: 6618, w: 1080, h: 1440 },
  '7.png': { x: -263, y: 8058, w: 2447, h: 2063 },
  '8.png': { x: 0, y: 10121, w: 935, h: 623 },
  '9.png': { x: 868, y: 10469, w: 1052, h: 701 },
  '10.png': { x: 811, y: 11214, w: 999, h: 1499 },
  '11.png': { x: -2, y: 12913, w: 1925, h: 1203 },
  '12-1.png': { x: 0, y: 14202, w: 981, h: 613 },
  '12-2.png': { x: 985, y: 14202, w: 940, h: 588 },
  '13-1.png': { x: 0, y: 14815, w: 624, h: 622 },
  '13-2.png': { x: 676, y: 14815, w: 623, h: 623 },
  '13-3.png': { x: 1299, y: 14819, w: 621, h: 619 },
  '14.png': { x: 173, y: 15438, w: 252, h: 270 },
  '15.png': { x: 425, y: 15524, w: 1070, h: 723 },
  'word1.png': { x: 1394, y: 9990, w: 470, h: 665 },
  'word2.png': { x: 0, y: 10830, w: 480, h: 679 },
  'word3.png': { x: 505, y: 10999, w: 480, h: 678 },
};

export const cmykCommercialLayout = {
  'CMYK_Cm1.jpg': { x: 50, y: 50, w: 1800, h: 1200, source: 'images' },
  '7-1.png': { x: 30, y: 1500, w: 610, h: 887, source: 'commercials' },
  '7-2.png': { x: 650, y: 1500, w: 610, h: 887, source: 'commercials' },
  '7-3.png': { x: 1270, y: 1500, w: 610, h: 887, source: 'commercials' },
};

export const getLayoutHeight = (layout, lastFilename, fallbackHeight) => {
  const lastItem = layout[lastFilename];
  return lastItem ? lastItem.y + lastItem.h + 50 : fallbackHeight;
};
