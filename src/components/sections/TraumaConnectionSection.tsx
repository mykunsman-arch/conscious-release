import { CircleDot, Sparkles } from "lucide-react";
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
          <div className="inline-flex items-center gap-2 bg-peach/20 px-6 py-3 rounded-full">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold">התהליך שלנו</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient leading-tight px-4">
            איך זה עובד
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-accent via-peach to-accent mx-auto rounded-full"></div>
          
          <div className="space-y-6 pt-8 px-4 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed">
              בתהליך של ריפוי תודעתי אנחנו ניגשים למקום שבו נוצר הקושי – בתודעה, ברגש ובזיכרון.
              <br />
              באמצעות הקשבה עמוקה ותהליך מודע, המטופל לומד לזהות את המקור, לשחרר אותו ולהרגיש שינוי אמיתי.
            </p>
            
            <div className="bg-gradient-to-br from-muted/50 to-background p-6 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50">
              <ul className="space-y-4 text-right">
                <li className="flex items-start gap-3">
                  <CircleDot className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">זיהוי דפוסים רגשיים ומחשבתיים חוזרים</span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleDot className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">עבודה עם תת־המודע לשחרור עומסים ואמונות מגבילות</span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleDot className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">איזון בין גוף, רגש ותודעה</span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleDot className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">תמיכה בצמיחה רגשית, זוגית ופיזית</span>
                </li>
                <li className="flex items-start gap-3">
                  <CircleDot className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed">התאמה אישית של השיטה לפי הצורך</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraumaConnectionSection;
