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
    <section ref={ref} id="questionnaire" className="snap-section py-4 md:py-6 bg-gradient-to-b from-background/30 to-background/10 relative overflow-hidden" dir="rtl">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-peach/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className={`text-center space-y-4 section-scale ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
            <ClipboardCheck className="h-4 w-4 text-sage" />
            <span className="text-sage font-semibold text-sm">זה בשבילכם?</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-shimmer leading-tight px-4 font-varela">
            שאלון קצר להקשבה פנימה
          </h2>
          
          <p className="text-sm md:text-base text-foreground/60 max-w-2xl mx-auto px-4 font-light">
            בחרו את התשובות המתאימות לכם
          </p>
          
          <div className="h-0.5 w-24 bg-gradient-to-r from-sage via-peach to-sage mx-auto rounded-full shadow-lg"></div>
          
          <Card className="p-4 md:p-6 space-y-4 md:space-y-5 text-right bg-card/90 backdrop-blur-md shadow-2xl rounded-2xl border-2 border-border/30">
            {questions.map((question, index) => (
              <div
                key={index}
                className="group relative flex items-center gap-3 md:gap-4 p-4 md:p-5 hover:bg-gradient-to-r hover:from-sage/10 hover:to-primary/10 rounded-2xl transition-all duration-500 border-2 border-border/30 hover:border-sage/40 hover:shadow-xl hover:scale-[1.02] cursor-pointer min-h-[72px] touch-manipulation active:scale-100"
                onClick={() => handleCheckboxChange(index, !answers[index])}
              >
                {/* Decorative Number */}
                <div className={`absolute top-3 left-3 md:top-4 md:left-4 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-lg md:text-xl transition-all duration-500 ${
                  answers[index] 
                    ? 'bg-gradient-to-br from-sage to-primary text-white shadow-lg scale-110' 
                    : 'bg-muted/30 text-muted-foreground/40 group-hover:bg-sage/20 group-hover:text-sage'
                }`}>
                  {index + 1}
                </div>
                
                <Checkbox
                  id={`question-${index}`}
                  checked={answers[index]}
                  onCheckedChange={(checked) => handleCheckboxChange(index, checked as boolean)}
                  className="mt-1 w-6 h-6 md:w-7 md:h-7 data-[state=checked]:bg-sage data-[state=checked]:border-sage border-2 flex-shrink-0 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                />
                <label
                  htmlFor={`question-${index}`}
                  className="text-base md:text-lg text-foreground group-hover:text-foreground cursor-pointer flex-1 leading-relaxed transition-all duration-300 pr-12 md:pr-14 font-['Assistant'] font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  {question}
                </label>
              </div>
            ))}
            
            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-primary via-sage to-primary hover:from-primary/90 hover:via-sage/90 hover:to-primary/90 text-primary-foreground py-6 text-lg md:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-sage/50 transition-all duration-500 hover:scale-[1.03] border-2 border-sage/30 min-h-[56px] touch-manipulation active:scale-100"
            >
              <Sparkles className="ml-2 h-5 w-5" />
              הצג תוצאה
            </Button>
            
            {showResult && (
              <div className="mt-6 p-4 md:p-6 bg-gradient-to-br from-accent/10 to-peach/10 rounded-2xl border-2 border-accent/30 shadow-xl animate-scale-in">
                <div className="text-center space-y-3 md:space-y-4">
                  <div className="inline-flex items-center gap-2 bg-sage/20 px-4 py-2 rounded-full">
                    <Sparkles className="h-4 w-4 text-sage" />
                  </div>
                  
                  <p className="text-lg md:text-xl font-bold text-primary">
                    {isMatch
                      ? "אם עניתם \"כן\" על יותר משתי שאלות —"
                      : "תודה שמילאתם את השאלון."}
                  </p>
                  <p className="text-sm md:text-base text-foreground/70">
                    {isMatch 
                      ? "ייתכן שתהליך של ריפוי תודעתי יכול לסייע לכם. זו אינה אבחנה רפואית אלא הזמנה להקשיב לעצמכם."
                      : "זו הזמנה להקשבה פנימה."}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 md:px-8 py-6 text-base md:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 min-h-[56px] touch-manipulation active:scale-100"
                    >
                      לפנייה ופרטים בווצאפ
                    </Button>
                    <Button
                      onClick={scrollToContact}
                      variant="outline"
                      className="border-2 border-sage text-sage hover:bg-sage hover:text-white px-6 md:px-8 py-6 text-base md:text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 min-h-[56px] touch-manipulation active:scale-100"
                    >
                      להשארת פרטים לחזרה
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuestionnaireSection;
