const buildAssetMap = (modules) =>
  Object.fromEntries(
    Object.entries(modules).map(([path, url]) => [path.split('/').pop(), url])
  );

export const rgbWorkAssets = buildAssetMap(
  import.meta.glob('../assets/RGB_work/*.{png,jpg,jpeg,webp,gif}', {
    eager: true,
    import: 'default',
  })
);

export const rgbCommercialAssets = buildAssetMap(
  import.meta.glob('../assets/RGB-commercial/*.{png,jpg,jpeg,webp,gif,mp4}', {
    eager: true,
    import: 'default',
  })
);

export const cmykWorkAssets = buildAssetMap(
  import.meta.glob('../assets/CMYK_work/*.{png,jpg,jpeg,webp,gif}', {
    eager: true,
    import: 'default',
  })
);
