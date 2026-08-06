"use client";

type PreviewModalProps = {
  title: string;
  video: string;
  onClose: () => void;
};

export default function PreviewModal({
  title,
  video,
  onClose,
}: PreviewModalProps) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-[32px] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-xl font-bold shadow transition hover:scale-110"
        >
          ✕
        </button>

        {/* Video */}

        <video
          controls
          autoPlay
          playsInline
          className="aspect-[9/16] w-full bg-black object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* Info */}

        <div className="p-6">
          <h2 className="font-heading text-2xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="mt-3 text-slate-600">
            Бұл толық курстың қысқартылған 3 минуттық үзіндісі.
          </p>
        </div>
      </div>
    </div>
  );
}