import { Heart, Brain, Sparkles, CheckCircle2 } from "lucide-react";
import CTAContactSection from "@/components/sections/CTAContactSection";

const HowItWorksPage = () => {
  return (
    <div className="pt-20" dir="rtl">
      {/* What Is Section */}
      <section className="py-6 md:py-8 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 bg-sage/10 px-4 py-2 rounded-full">
            <Sparkles className="h-4 w-4 text-sage" />
            <span className="text-sage font-semibold text-sm">הבסיס שלנו</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            מהו ריפוי תודעתי
          </h1>
          
          <div className="bg-gradient-to-br from-muted/50 to-background p-6 md:p-8 rounded-3xl shadow-lg border border-border/50 max-w-3xl mx-auto">
            <div className="text-sm md:text-base text-foreground/80 space-y-3 leading-relaxed text-center">
              <p>
                ריפוי תודעתי רואה את האדם כמכלול של גוף, נפש ותודעה.
              </p>
              <p>
                חוויות, טראומות, דפוסים ואמונות שנצרבו בעבר עשויים להשפיע עלינו גם היום.
              </p>
              <p>
                באמצעות הקשבה עדינה, עבודה עם התודעה ותת־המודע, התהליך מסייע בשחרור מטענים רגשיים ואנרגטיים וביצירת תחושת הקלה, איזון וחיבור פנימי.
              </p>
              <p>
                התהליך עשוי לשמש תהליך תומך ומשלים לריפוי ולצמיחה אישית.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-6 md:py-8 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 bg-peach/20 px-4 py-2 rounded-full">
            <Brain className="h-4 w-4 text-sage" />
            <span className="text-sage font-semibold text-sm">התהליך שלנו</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            איך זה עובד
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-3 text-sm md:text-base text-foreground/80">
            <p className="leading-relaxed">
              בתהליך של ריפוי תודעתי אנחנו ניגשים למקום שבו נוצר הקושי – בתודעה, ברגש ובזיכרון.
            </p>
            <p className="leading-relaxed">
              באמצעות הקשבה עמוקה ותהליך מודע, המטופל לומד לזהות את המקור, לשחרר אותו ולהרגיש שינוי אמיתי.
            </p>
          </div>

          <div className="bg-gradient-to-br from-muted/50 to-background p-6 md:p-8 rounded-3xl shadow-lg border border-border/50 max-w-3xl mx-auto">
            <ul className="space-y-3 text-right text-sm md:text-base text-foreground/80">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span>זיהוי דפוסים רגשיים ומחשבתיים חוזרים</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span>עבודה עם תת־המודע לשחרור עומסים ואמונות מגבילות</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span>איזון בין גוף, רגש ותודעה</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span>תמיכה בצמיחה רגשית, זוגית ופיזית</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span>התאמה אישית של השיטה לפי הצורך</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="py-6 md:py-8 bg-gradient-to-br from-primary/5 to-peach/5">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 bg-peach/20 px-4 py-2 rounded-full">
            <Heart className="h-4 w-4 text-sage" />
            <span className="text-sage font-semibold text-sm">התהליך שלנו</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            למי זה עשוי להתאים
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-2 text-sm md:text-base text-foreground/80">
            <p className="leading-relaxed">
              התהליך מתאים למבוגרים, נוער וילדים,
            </p>
            <p className="leading-relaxed">
              ומסייע בהתמודדות עם אתגרים רגשיים, מנטליים ופיזיים כמו:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 md:gap-4 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-muted/50 to-background p-4 md:p-6 rounded-2xl shadow-lg border border-border/50 text-right">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-foreground/80">חרדות, חוסר שקט ופחדים</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-muted/50 to-background p-4 md:p-6 rounded-2xl shadow-lg border border-border/50 text-right">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-foreground/80">כאבים פיזיים, מתח כרוני או עייפות</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-muted/50 to-background p-4 md:p-6 rounded-2xl shadow-lg border border-border/50 text-right">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-foreground/80">קשיים בזוגיות ותקשורת בין־אישית</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-muted/50 to-background p-4 md:p-6 rounded-2xl shadow-lg border border-border/50 text-right">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-foreground/80">חוסר איזון הורמונלי, קשיי שינה או עייפות מתמשכת</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-muted/50 to-background p-4 md:p-6 rounded-2xl shadow-lg border border-border/50 text-right">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-foreground/80">תופעות כמו טיקים, הרטבה, או קשיים רגשיים אצל ילדים</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-muted/50 to-background p-4 md:p-6 rounded-2xl shadow-lg border border-border/50 text-right">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-foreground/80">תחושת תקיעות, בלבול או חוסר חיבור פנימי</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-6 md:py-8 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gradient-to-br from-sage/5 to-primary/5 p-3 md:p-4 rounded-2xl border border-sage/20 space-y-2">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-sage" />
              <h3 className="text-base md:text-lg font-bold text-foreground">חשוב לדעת</h3>
            </div>
            
            <div className="space-y-2 text-sm md:text-base text-foreground/80 leading-relaxed">
              <p>
                התהליך מותאם באופן אישי לכל אדם ולצרכים שלו. אין שני טיפולים זהים, כי כל אדם הוא עולם ומלואו.
              </p>
              <p>
                משך הטיפול משתנה בהתאם למטופל - יש מי שחש שינוי משמעותי כבר אחרי פגישה אחת, 
                ויש מי שצריך מספר פגישות כדי להגיע לשינוי המיוחל.
              </p>
              <p>
                הטיפול מתאים לילדים, מתבגרים ומבוגרים. ניתן להגיע לקליניקה או לקיים את הפגישות בזום.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTAContactSection />
    </div>
  );
};

export default HowItWorksPage;
