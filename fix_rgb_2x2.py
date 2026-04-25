import re

with open('/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', 'r') as f:
    content = f.read()

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

content = re.sub(r'const layoutConfigCommercial = \{.*?\};', new_layout, content, flags=re.DOTALL)

# Let's replace the top values cleanly instead of assuming their current values since it might be tricky to match statically.
# Using regex to target the sections sequentially based on the titles

replacements = [
    (r'(?s)(<div className="absolute w-full p-10" style=\{\{\s*top: `\$\{).*?(\s*\* scale\}px`\s*\}\}\s*>\s*<div className="mb-16">\s*<div className="border-b border-black pb-4 mb-6">\s*<h2 className="text-4xl[^>]*>ANGELITE CD GRAPHICS)', r'\g<1>3100\g<2>'),
    
    (r'(?s)(<div className="absolute w-full p-10" style=\{\{\s*top: `\$\{).*?(\s*\* scale\}px`\s*\}\}\s*>\s*<div className="mb-16">\s*<div className="border-b border-black pb-4 mb-6">\s*<h2 className="text-4xl[^>]*>ANGELITE VIDEOS)', r'\g<1>5100\g<2>'),
    
    (r'(?s)(<div className="absolute w-full p-10" style=\{\{\s*top: `\$\{).*?(\s*\* scale\}px`\s*\}\}\s*>\s*<div className="mb-16">\s*<div className="border-b border-black pb-4 mb-6">\s*<h2 className="text-4xl[^>]*>DIDI — DAZED KOREA ORIGINAL CHARACTER)', r'\g<1>6000\g<2>'),
    
    (r'(?s)(<div className="absolute w-full p-10" style=\{\{\s*top: `\$\{).*?(\s*\* scale\}px`\s*\}\}\s*>\s*<div className="mb-16">\s*<div className="border-b border-black pb-4 mb-6">\s*<h2 className="text-4xl[^>]*>DAZED KOREA MONTHLY HIGHLIGHTS)', r'\g<1>7400\g<2>'),
    
    (r'(?s)(<div className="absolute w-full p-10" style=\{\{\s*top: `\$\{).*?(\s*\* scale\}px`\s*\}\}\s*>\s*<div className="mb-16">\s*<div className="border-b border-black pb-4 mb-6">\s*<h2 className="text-4xl[^>]*>DAZED KOREA — BRAND COLLABORATION VFX)', r'\g<1>8800\g<2>')
]

for pattern, repl in replacements:
    content = re.sub(pattern, repl, content)

with open('/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', 'w') as f:
    f.write(content)

