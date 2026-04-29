const Lightbox = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
      onClick={onClose}
    >
      <div
        className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-4 right-4 text-white/50 hover:text-white text-5xl font-light transition-colors z-50"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={image.src} alt={image.title} className="max-w-full max-h-[85vh] object-contain shadow-2xl" />
      </div>
    </div>
  );
};

export default Lightbox;
