import re

files = ['/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', '/Users/jaeuahn/joi-portfolio/src/pages/CMYK.jsx']

for file_path in files:
    with open(file_path, 'r') as f:
        content = f.read()

    # We need to replace within the activeFilter === 'commercial' section
    # Let's just find the `text-sm font-bold leading-relaxed` string and replace it
    # We will change it to `text-base leading-relaxed text-gray-900`
    
    # Wait, the Dazed Monthly Highlights or others had specific string combinations:
    # "text-sm font-bold leading-relaxed tracking-tight whitespace-pre-wrap break-keep mb-4"
    # "text-sm font-bold leading-relaxed mb-6"
    
    content = content.replace('text-sm font-bold leading-relaxed', 'text-base leading-relaxed text-gray-900')
    
    # also for labels inside span: `<span className="uppercase block mb-1 text-gray-500">`
    # Let's make them slightly smaller/bolder to emulate personal's English descriptions:
    content = content.replace('uppercase block mb-1 text-gray-500', 'text-sm text-gray-600 uppercase font-bold tracking-tight mb-2 block')
    
    with open(file_path, 'w') as f:
        f.write(content)

