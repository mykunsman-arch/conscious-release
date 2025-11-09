const LoadingSkeleton = () => {
  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="animate-pulse space-y-8 w-full max-w-4xl px-4">
        <div className="h-32 md:h-48 bg-muted/30 rounded-3xl mx-auto w-64 md:w-96"></div>
        <div className="h-12 md:h-16 bg-muted/30 rounded-2xl w-full"></div>
        <div className="h-8 bg-muted/30 rounded-2xl w-3/4 mx-auto"></div>
        <div className="flex gap-4 justify-center">
          <div className="h-14 bg-muted/30 rounded-2xl w-48"></div>
          <div className="h-14 bg-muted/30 rounded-2xl w-48"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
