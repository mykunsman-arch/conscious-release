const FloatingBubbles = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 15,
    duration: Math.random() * 10 + 15,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-100px',
            background: `radial-gradient(circle, hsl(var(--accent) / 0.4), hsl(var(--peach) / 0.2))`,
            animation: `float-up ${bubble.duration}s ease-in infinite`,
            animationDelay: `${bubble.delay}s`,
            filter: 'blur(2px)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
