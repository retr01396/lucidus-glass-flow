type VideoOverlayProps = {
  src: string;
  onEnd: () => void;
};

const VideoOverlay = ({ src, onEnd }: VideoOverlayProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <video
        className="w-full h-full object-cover"
        src={src}
        autoPlay
        muted
        playsInline
        onEnded={onEnd}
      />
    </div>
  );
};

export default VideoOverlay;


