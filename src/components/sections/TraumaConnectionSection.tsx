import { ArrowLeft, CircleDot } from "lucide-react";
import healingHandsImage from "@/assets/healing-hands.jpg";

const TraumaConnectionSection = () => {
  return (
    <section className="py-24 bg-gradient-soft relative overflow-hidden" dir="rtl">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-[0.06] md:opacity-[0.06] bg-contain md:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${healingHandsImage})` }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-10 w-2 h-32 bg-gradient-to-b from-accent to-transparent rounded-full"></div>
      <div className="absolute top-1/2 left-10 w-2 h-32 bg-gradient-to-b from-peach to-transparent rounded-full"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center space-y-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight px-4">
            <span className="text-primary">למה אנחנו מרגישים</span>
            <br />
            <span className="text-gradient-accent">מה שאנחנו מרגישים?</span>
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-accent via-peach to-accent mx-auto rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 pt-8 px-4">
            <div className="bg-card/80 backdrop-blur-sm p-6 md:p-10 rounded-3xl shadow-xl border border-border/50 hover:scale-105 transition-transform duration-300">
              <CircleDot className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-6" />
              <p className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                אירועים מהעבר, גם כאלה שנראים <span className="text-accent font-semibold">"קטנים"</span>,
                יכולים להישמר כתבניות בתת־המודע ולהמשיך להשפיע על תחושת הערך, הביטחון והקשר עם עצמנו.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/5 p-6 md:p-10 rounded-3xl shadow-xl border border-accent/20 hover:scale-105 transition-transform duration-300">
              <CircleDot className="h-8 w-8 md:h-10 md:w-10 text-accent mx-auto mb-6" />
              <p className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">
                בתהליך תודעתי נכון, <span className="text-primary font-semibold">ניגשים אל השורש ברגישות</span>,
                משנים את המטען הרגשי סביבו,
                ומאפשרים למערכת כולה להירגע.
              </p>
            </div>
          </div>
          
          {/* Process flow */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-12 px-4">
            <div className="bg-card p-4 md:p-8 rounded-2xl shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <p className="text-primary font-bold text-base md:text-xl">עבר</p>
            </div>
            <ArrowLeft className="h-6 w-6 md:h-8 md:w-8 text-accent rotate-180 md:rotate-0 animate-pulse" />
            <div className="bg-card p-4 md:p-8 rounded-2xl shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <p className="text-primary font-bold text-base md:text-xl whitespace-nowrap">תת־מודע</p>
            </div>
            <ArrowLeft className="h-6 w-6 md:h-8 md:w-8 text-accent rotate-180 md:rotate-0 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="bg-card p-4 md:p-8 rounded-2xl shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <p className="text-primary font-bold text-base md:text-xl whitespace-nowrap">רגש/התנהגות</p>
            </div>
            <ArrowLeft className="h-6 w-6 md:h-8 md:w-8 text-accent rotate-180 md:rotate-0 animate-pulse" style={{ animationDelay: '0.4s' }} />
            <div className="bg-gradient-to-br from-accent to-peach p-4 md:p-8 rounded-2xl shadow-xl glow">
              <p className="text-white font-bold text-base md:text-xl">ריפוי</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraumaConnectionSection;
