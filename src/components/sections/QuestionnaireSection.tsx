import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { ClipboardCheck, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const QuestionnaireSection = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "scale", threshold: 0.1 });
  const [answers, setAnswers] = useState<boolean[]>([false, false, false, false, false]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    "האם אתם חווים עומס רגשי או מתח מתמשך בגוף?",
    "האם יש תחום בחיים שמרגיש תקוע או חוזר על עצמו?",
    "האם יש תחושות בגוף שמושפעות ממתח או רגש?",
    "האם אתם חווים קשיים בזוגיות או בתקשורת?",
    "האם יש תסמינים מטרידים בפעילות הגופנית שלכם?",
  ];

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const newAnswers = [...answers];
    newAnswers[index] = checked;
    setAnswers(newAnswers);
    setShowResult(false);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const countYes = answers.filter(Boolean).length;
  const isMatch = countYes >= 2;

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972527176000", "_blank");
  };

  return (
    <section ref={ref} id="questionnaire" className="py-12 md:py-16 bg-background/20 relative overflow-hidden" dir="rtl">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-peach/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className={`text-center space-y-8 section-scale ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
            <ClipboardCheck className="h-5 w-5 text-sage" />
            <span className="text-sage font-semibold">זה בשבילכם?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-shimmer leading-tight px-4 font-varela">
            שאלון קצר להקשבה פנימה
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-sage to-peach rounded-full"></div>
          
          <div className="space-y-6 pt-8 px-4 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-muted/50 to-background p-6 md:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50">
              <div className="space-y-4 text-right">
                {questions.map((question, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 hover:border-accent/30 transition-all duration-300 shadow-lg group cursor-pointer"
                    onClick={() => handleCheckboxChange(index, !answers[index])}
                  >
                    <Checkbox
                      id={`question-${index}`}
                      checked={answers[index]}
                      onCheckedChange={(checked) => handleCheckboxChange(index, checked as boolean)}
                      className="mt-1 w-6 h-6 data-[state=checked]:bg-sage data-[state=checked]:border-sage border-2 flex-shrink-0 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <label
                      htmlFor={`question-${index}`}
                      className="text-base md:text-lg text-foreground/80 group-hover:text-foreground cursor-pointer flex-1 leading-relaxed transition-all duration-300 font-semibold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {question}
                    </label>
                  </div>
                ))}
              
              </div>
              
              <Button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-primary via-sage to-primary hover:from-primary/90 hover:via-sage/90 hover:to-primary/90 text-primary-foreground py-6 text-lg font-bold rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl mt-6"
              >
                <Sparkles className="ml-2 h-5 w-5" />
                הצג תוצאה
              </Button>
              
              {showResult && (
                <div className="mt-6 p-6 md:p-8 bg-gradient-to-br from-accent/10 to-peach/10 rounded-3xl border border-accent/30 shadow-lg animate-scale-in">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 bg-sage/20 px-6 py-3 rounded-full">
                      <Sparkles className="h-5 w-5 text-sage" />
                    </div>
                    
                    <p className="text-xl md:text-2xl font-bold text-primary">
                      {isMatch
                        ? "אם עניתם \"כן\" על יותר משתי שאלות —"
                        : "תודה שמילאתם את השאלון."}
                    </p>
                    <p className="text-base md:text-lg text-foreground/70">
                      {isMatch 
                        ? "ייתכן שתהליך של ריפוי תודעתי יכול לסייע לכם. זו אינה אבחנה רפואית אלא הזמנה להקשיב לעצמכם."
                        : "זו הזמנה להקשבה פנימה."}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                      <Button
                        onClick={handleWhatsAppClick}
                        className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
                      >
                        לפנייה ופרטים בווצאפ
                      </Button>
                      <Button
                        onClick={scrollToContact}
                        variant="outline"
                        className="border-2 border-sage text-sage hover:bg-sage hover:text-white px-6 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
                      >
                        להשארת פרטים לחזרה
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionnaireSection;
