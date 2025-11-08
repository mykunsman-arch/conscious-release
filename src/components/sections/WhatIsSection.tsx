import { Heart, Brain, Sparkles } from "lucide-react";
import healingWomanImage from "@/assets/healing-woman.jpg";

const WhatIsSection = () => {
  return (
    <section id="what-is" className="py-24 bg-card relative overflow-hidden" dir="rtl">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-[0.08] md:opacity-[0.08] bg-contain md:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${healingWomanImage})` }}
      ></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-peach/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold">הבסיס שלנו</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary leading-tight px-4">
            מהו ריפוי תודעתי
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-accent rounded-full"></div>
            <Heart className="h-6 w-6 text-accent animate-pulse" />
            <div className="h-1 w-12 bg-gradient-to-l from-transparent to-accent rounded-full"></div>
          </div>
          
          <div className="space-y-8 pt-12 px-4 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-muted/50 to-background p-6 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50">
              <p className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed text-center">
                ריפוי תודעתי <span className="text-primary font-semibold">רואה את האדם כמכלול של גוף, נפש ותודעה</span>.
                <br />
                חוויות, טראומות, דפוסים ואמונות שנצרבו בעבר עשויים להשפיע עלינו גם היום.
                <br /><br />
                באמצעות הקשבה עדינה, עבודה עם התודעה ותת־המודע,
                <br />
                התהליך מסייע בשחרור מטענים רגשיים ואנרגטיים וביצירת תחושת הקלה, איזון וחיבור פנימי.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-peach/10 p-6 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-accent/20">
              <Sparkles className="h-10 w-10 md:h-12 md:w-12 text-accent mx-auto mb-6" />
              <p className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed text-center">
                <span className="text-muted-foreground font-semibold">⚠️ הערה חשובה:</span>
                <br /><br />
                התהליך אינו מהווה טיפול רפואי או תחליף לטיפול רפואי,
                <br />
                אך עשוי לשמש תהליך תומך ומשלים לריפוי ולצמיחה אישית.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
