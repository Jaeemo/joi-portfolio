import re

with open('/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', 'r') as f:
    content = f.read()

# 1. New hyper-dense layout config
new_layout = """const layoutConfigCommercial = {
    '2-1.png': { x: 0, y: 50, w: 440, h: 660, source: 'commercials' },
    '2-2.png': { x: 460, y: 50, w: 440, h: 660, source: 'commercials' },
    '2-3.png': { x: 920, y: 50, w: 440, h: 660, source: 'commercials' },
    '2-4.png': { x: 1380, y: 50, w: 440, h: 660, source: 'commercials' },

    '3-1-3.png': { x: 0, y: 1800, w: 800, h: 800, source: 'commercials' },
    '3-1-2.png': { x: 820, y: 1800, w: 490, h: 490, source: 'commercials' },
    '3-1-1.png': { x: 1330, y: 1800, w: 490, h: 490, source: 'commercials' },
    '3-2.png': { x: 0, y: 2620, w: 440, h: 660, source: 'commercials' },
    '3-3.png': { x: 460, y: 2620, w: 440, h: 660, source: 'commercials' },
    '3-4.png': { x: 920, y: 2620, w: 440, h: 660, source: 'commercials' },
    '3-5.png': { x: 1380, y: 2620, w: 440, h: 660, source: 'commercials' },

    'video-1.mp4': { x: 0, y: 3900, w: 900, h: 506, source: 'commercials' },
    'video-2.mp4': { x: 920, y: 3900, w: 900, h: 506, source: 'commercials' },

    '4-1.png': { x: 0, y: 5000, w: 590, h: 1048, source: 'commercials' },
    '4-2.png': { x: 610, y: 5000, w: 590, h: 1048, source: 'commercials' },
    '4-3.png': { x: 1220, y: 5000, w: 590, h: 1048, source: 'commercials' },

    '5-1.png': { x: 0, y: 6800, w: 590, h: 1048, source: 'commercials' },
    '5-2.png': { x: 610, y: 6800, w: 590, h: 1048, source: 'commercials' },
    '5-3.png': { x: 1220, y: 6800, w: 590, h: 1048, source: 'commercials' },

    '6-1.jpg': { x: 0, y: 8400, w: 900, h: 1160, source: 'commercials' },
    '6-2.png': { x: 920, y: 8400, w: 900, h: 1160, source: 'commercials' },
};"""

content = re.sub(r'const layoutConfigCommercial = \{.*?\};', new_layout, content, flags=re.DOTALL)

# 2. Update sidebar text offsets
replacements = {
    'top: `${2400 * scale}px`': 'top: `${1800 * scale}px`', # CD GRAPHICS
    'top: `${5000 * scale}px`': 'top: `${3900 * scale}px`', # VIDEOS
    'top: `${7000 * scale}px`': 'top: `${5000 * scale}px`', # DIDI
    'top: `${10400 * scale}px`': 'top: `${6800 * scale}px`', # DAZED MONTHLY
    'top: `${13800 * scale}px`': 'top: `${8400 * scale}px`'  # MONCLER
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', 'w') as f:
    f.write(content)
