import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { ClipboardCheck, Sparkles } from "lucide-react";
import lotusImage from "@/assets/lotus-healing.jpg";

const QuestionnaireSection = () => {
  const [answers, setAnswers] = useState<boolean[]>([false, false, false, false, false]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    "האם אתם חווים עומס רגשי או מתח מתמשך בגוף?",
    "האם יש תחום בחיים שמרגיש תקוע או חוזר על עצמו?",
    "האם יש תחושות בגוף שמושפעות ממתח או רגש?",
    "האם אתם חווים קשיים בזוגיות או בתקשורת?",
    "האם יש תסמינים כמו טיקים, הרטבה, בעיות שינה או חוסר איזון הורמונלי?",
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
    <section id="questionnaire" className="py-24 bg-gradient-soft relative overflow-hidden" dir="rtl">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-[0.05] md:opacity-[0.05] bg-contain md:bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${lotusImage})` }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-peach/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center space-y-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
            <ClipboardCheck className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold">זה בשבילכם?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient leading-tight px-4">
            שאלון קצר להקשבה פנימה
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-accent via-peach to-accent mx-auto rounded-full"></div>
          
          <Card className="p-6 md:p-10 space-y-6 md:space-y-8 text-right bg-card/80 backdrop-blur-sm shadow-2xl rounded-3xl border-2 border-border/50">
            {questions.map((question, index) => (
              <div
                key={index}
                className="group flex items-start gap-3 md:gap-4 p-4 md:p-6 hover:bg-accent/5 rounded-2xl transition-all duration-300 border border-transparent hover:border-accent/20"
              >
                <Checkbox
                  id={`question-${index}`}
                  checked={answers[index]}
                  onCheckedChange={(checked) => handleCheckboxChange(index, checked as boolean)}
                  className="mt-1 data-[state=checked]:bg-accent data-[state=checked]:border-accent flex-shrink-0"
                />
                <label
                  htmlFor={`question-${index}`}
                  className="text-base md:text-lg lg:text-xl text-foreground/80 group-hover:text-foreground cursor-pointer flex-1 leading-relaxed transition-colors"
                >
                  {question}
                </label>
              </div>
            ))}
            
            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground py-5 md:py-7 text-lg md:text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="ml-2 h-5 w-5" />
              הצג תוצאה
            </Button>
            
            {showResult && (
              <div className="mt-8 p-6 md:p-8 bg-gradient-to-br from-accent/10 to-peach/10 rounded-3xl border-2 border-accent/30 shadow-xl animate-scale-in">
                <div className="text-center space-y-4 md:space-y-6">
                  <div className="inline-flex items-center gap-2 bg-accent/20 px-6 py-3 rounded-full">
                    <Sparkles className="h-5 w-5 text-accent" />
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
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-4">
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      שיחה מיידית בוואטסאפ
                    </Button>
                    <Button
                      onClick={scrollToContact}
                      variant="outline"
                      className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
