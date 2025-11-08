const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-8">
      {/* Hero Skeleton */}
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="space-y-8 w-full max-w-4xl">
          <div className="h-32 md:h-48 bg-muted/30 rounded-3xl mx-auto w-64 md:w-96"></div>
          <div className="h-12 md:h-16 bg-muted/30 rounded-2xl w-full"></div>
          <div className="h-8 bg-muted/30 rounded-2xl w-3/4 mx-auto"></div>
          <div className="flex gap-4 justify-center">
            <div className="h-14 bg-muted/30 rounded-2xl w-48"></div>
            <div className="h-14 bg-muted/30 rounded-2xl w-48"></div>
          </div>
        </div>
      </div>

      {/* Section Skeleton */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="py-24 px-4">
          <div className="container mx-auto max-w-5xl space-y-8">
            <div className="h-12 bg-muted/30 rounded-2xl w-64 mx-auto"></div>
            <div className="h-1 bg-muted/30 rounded-full w-32 mx-auto"></div>
            <div className="space-y-4">
              <div className="h-6 bg-muted/30 rounded-xl w-full"></div>
              <div className="h-6 bg-muted/30 rounded-xl w-5/6"></div>
              <div className="h-6 bg-muted/30 rounded-xl w-4/6"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
