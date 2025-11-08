import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingWhatsAppCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open("https://wa.me/972527176000?text=שלום%20🌿%20הגעתי%20מהאתר", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3" dir="rtl">
      {isExpanded && (
        <div className="glass-effect p-4 rounded-2xl shadow-2xl max-w-xs animate-slide-in-left">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute -top-2 -right-2 bg-card rounded-full p-1 shadow-lg hover:scale-110 transition-transform"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-sm font-medium text-right mb-2">💬 יש שאלה?</p>
          <p className="text-xs text-foreground/70 text-right mb-3">
            נשמח לעזור ולענות על כל שאלה
          </p>
          <button
            onClick={handleClick}
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
          >
            שלחו הודעה
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all group"
      >
        <MessageCircle className="h-6 w-6 transition-transform" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          1
        </span>
      </button>
    </div>
  );
};

export default FloatingWhatsAppCTA;
