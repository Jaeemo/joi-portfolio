files = ['/Users/jaeuahn/joi-portfolio/src/pages/RGB.jsx', '/Users/jaeuahn/joi-portfolio/src/pages/CMYK.jsx']
for file_path in files:
    with open(file_path, 'r') as f:
        content = f.read()
    content = content.replace('text-gray-900 text-gray-900', 'text-gray-900')
    with open(file_path, 'w') as f:
        f.write(content)

