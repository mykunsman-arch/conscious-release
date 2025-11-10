import { useState, useEffect } from "react";
import { X } from "lucide-react";

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
            className="absolute -top-2 -right-2 bg-card rounded-full p-2 shadow-lg hover:scale-110 transition-transform min-h-[40px] min-w-[40px] touch-manipulation active:scale-95 flex items-center justify-center"
          >
            <X className="h-4 w-4" />
          </button>
          <p className="text-sm font-medium text-right mb-2">💬 יש שאלה?</p>
          <p className="text-xs text-foreground/70 text-right mb-3">
            נשמח לעזור ולענות על כל שאלה
          </p>
          <button
            onClick={handleClick}
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 rounded-xl text-sm font-semibold transition-colors min-h-[48px] touch-manipulation active:scale-95"
          >
            שלחו הודעה
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all group min-h-[56px] min-w-[56px] touch-manipulation active:scale-95 flex items-center justify-center"
      >
        <svg 
          className="h-6 w-6 transition-transform group-hover:scale-110" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          1
        </span>
      </button>
    </div>
  );
};

export default FloatingWhatsAppCTA;
