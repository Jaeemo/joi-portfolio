import re

with open('/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', 'r') as f:
    content = f.read()

# 1. New huge layout config
new_layout = """const layoutConfigCommercial = {
    '2-1.png': { x: 100, y: 50, w: 600, h: 900, source: 'commercials' },
    '2-2.png': { x: 800, y: 50, w: 600, h: 900, source: 'commercials' },
    '2-3.png': { x: 100, y: 1000, w: 600, h: 900, source: 'commercials' },
    '2-4.png': { x: 800, y: 1000, w: 600, h: 900, source: 'commercials' },

    '3-1-3.png': { x: 50, y: 2400, w: 1000, h: 1000, source: 'commercials' },
    '3-1-2.png': { x: 500, y: 2300, w: 450, h: 450, source: 'commercials' },
    '3-1-1.png': { x: 200, y: 2950, w: 450, h: 450, source: 'commercials' },
    '3-2.png': { x: 1200, y: 2400, w: 600, h: 800, source: 'commercials' },
    '3-3.png': { x: 1200, y: 3300, w: 600, h: 800, source: 'commercials' },
    '3-4.png': { x: 100, y: 3600, w: 600, h: 800, source: 'commercials' },
    '3-5.png': { x: 800, y: 3600, w: 600, h: 800, source: 'commercials' },

    'video-1.mp4': { x: 200, y: 5000, w: 1200, h: 675, source: 'commercials' },
    'video-2.mp4': { x: 200, y: 5800, w: 1200, h: 675, source: 'commercials' },

    '4-1.png': { x: 100, y: 7000, w: 750, h: 1332, source: 'commercials' },
    '4-2.png': { x: 950, y: 7000, w: 750, h: 1332, source: 'commercials' },
    '4-3.png': { x: 500, y: 8400, w: 750, h: 1332, source: 'commercials' },

    '5-1.png': { x: 100, y: 10400, w: 750, h: 1332, source: 'commercials' },
    '5-2.png': { x: 950, y: 10400, w: 750, h: 1332, source: 'commercials' },
    '5-3.png': { x: 500, y: 11800, w: 750, h: 1332, source: 'commercials' },

    '6-1.jpg': { x: 200, y: 13800, w: 1100, h: 1420, source: 'commercials' },
    '6-2.png': { x: 600, y: 15300, w: 1100, h: 1420, source: 'commercials' },
};"""

content = re.sub(r'const layoutConfigCommercial = \{.*?\};', new_layout, content, flags=re.DOTALL)

# 2. Update sidebar text offsets using simple string replace
replacements = {
    'top: `${2200 * scale}px`': 'top: `${2400 * scale}px`', # CD GRAPHICS
    'top: `${4400 * scale}px`': 'top: `${5000 * scale}px`', # VIDEOS
    'top: `${5800 * scale}px`': 'top: `${7000 * scale}px`', # DIDI
    'top: `${7600 * scale}px`': 'top: `${10400 * scale}px`', # DAZED MONTHLY
    'top: `${9400 * scale}px`': 'top: `${13800 * scale}px`'  # MONCLER
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', 'w') as f:
    f.write(content)
