const defaultZIndex = () => 10;

const WorkCanvas = ({
  layout,
  height,
  scale,
  resolveSrc,
  onSelectImage,
  imageTitle,
  getZIndex = defaultZIndex,
  imageClassName = 'w-full h-full object-contain cursor-pointer mix-blend-multiply',
  videoClassName = 'w-full h-full object-cover rounded-xl',
  itemClassName = 'absolute',
  sortEntries = true,
}) => {
  const entries = Object.entries(layout);
  const sortedEntries = sortEntries
    ? entries.sort(([filenameA], [filenameB]) => getZIndex(filenameA) - getZIndex(filenameB))
    : entries;

  return (
    <div className="work-canvas flex-1 min-w-0 w-full relative overflow-hidden" style={{ height: `${height * scale}px` }}>
      <div
        className="absolute origin-top-left transition-transform duration-100 ease-out"
        style={{
          width: '1920px',
          height: `${height}px`,
          transform: `scale(${scale})`,
        }}
      >
        {sortedEntries.map(([filename, pos]) => {
          const src = resolveSrc(filename, pos);
          if (!src) return null;

          const style = {
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: `${pos.w}px`,
            height: `${pos.h}px`,
            zIndex: getZIndex(filename),
          };

          if (filename.endsWith('.mp4')) {
            return (
              <div key={filename} className="absolute drop-shadow-2xl" style={style}>
                <video src={src} autoPlay loop muted playsInline className={videoClassName} />
              </div>
            );
          }

          const resolvedImageClass =
            typeof imageClassName === 'function' ? imageClassName(filename) : imageClassName;
          const resolvedItemClass =
            typeof itemClassName === 'function' ? itemClassName(filename) : itemClassName;

          return (
            <div key={filename} className={resolvedItemClass} style={style}>
              <img
                src={src}
                alt={filename}
                className={resolvedImageClass}
                onClick={() => onSelectImage({ src, title: imageTitle })}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCanvas;
