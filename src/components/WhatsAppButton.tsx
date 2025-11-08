import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 group bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 md:p-5 shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 animate-glow-pulse"
      aria-label="שיחה בוואטסאפ"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7 group-hover:rotate-12 transition-transform" />
      
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </button>
  );
};

export default WhatsAppButton;
