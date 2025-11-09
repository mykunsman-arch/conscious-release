import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
    }

    // Try to start music on any user interaction
    const startMusic = () => {
      if (audioRef.current && !hasStarted) {
        audioRef.current.play().then(() => {
          setHasStarted(true);
          console.log("Music started");
        }).catch(err => {
          console.log("Auto-play prevented:", err);
        });
      }
    };

    // Listen for user interactions
    const events = ['click', 'touchstart', 'scroll', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, startMusic, { once: true });
    });

    // Try to start immediately (works on desktop)
    startMusic();

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, startMusic);
      });
    };
  }, [hasStarted]);

  const toggleMute = () => {
    if (audioRef.current) {
      // If music hasn't started yet, start it first
      if (!hasStarted) {
        audioRef.current.play().then(() => {
          setHasStarted(true);
          audioRef.current!.muted = !isMuted;
          setIsMuted(!isMuted);
        }).catch(err => {
          console.log("Could not start music:", err);
        });
      } else {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        src="/audio/background-music.mp3"
        loop
      />
      <Button
        onClick={toggleMute}
        size="icon"
        variant="outline"
        className={`rounded-full w-14 h-14 backdrop-blur-sm border-2 shadow-lg hover:scale-110 transition-all ${
          isMuted 
            ? 'bg-red-500/20 border-red-500/50 text-red-500 hover:bg-red-500/30' 
            : 'bg-background/80 text-foreground'
        }`}
        title={isMuted ? "לחץ להפעלת המוזיקה" : "לחץ להשתקת המוזיקה"}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6" />
        ) : (
          <Volume2 className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default MusicPlayer;
