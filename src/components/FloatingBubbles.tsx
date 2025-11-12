const FloatingBubbles = () => {
  const bubbles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 50 + 30,
    left: Math.random() * 100,
    delay: Math.random() * 12,
    duration: Math.random() * 8 + 18,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full opacity-15 will-change-transform"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: '-100px',
            background: `radial-gradient(circle, hsl(var(--accent) / 0.3), hsl(var(--peach) / 0.15))`,
            animation: `float-up ${bubble.duration}s ease-in infinite`,
            animationDelay: `${bubble.delay}s`,
            filter: 'blur(1.5px)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
