import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
      audioRef.current.play().catch(err => {
        console.log("Auto-play prevented:", err);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio
        ref={audioRef}
        src="/audio/background-music.mp3"
        loop
        onEnded={() => setIsPlaying(false)}
      />
      <Button
        onClick={togglePlay}
        size="icon"
        variant="outline"
        className="rounded-full w-14 h-14 bg-background/80 backdrop-blur-sm border-2 shadow-lg hover:scale-110 transition-transform"
        title={isPlaying ? "השתק מוזיקה" : "הפעל מוזיקה"}
      >
        {isPlaying ? (
          isMuted ? (
            <VolumeX className="h-6 w-6" onClick={(e) => { e.stopPropagation(); toggleMute(); }} />
          ) : (
            <Volume2 className="h-6 w-6" onClick={(e) => { e.stopPropagation(); toggleMute(); }} />
          )
        ) : (
          <Volume2 className="h-6 w-6 opacity-50" />
        )}
      </Button>
    </div>
  );
};

export default MusicPlayer;
