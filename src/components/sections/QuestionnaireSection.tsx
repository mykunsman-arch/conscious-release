import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

const QuestionnaireSection = () => {
  const [answers, setAnswers] = useState<boolean[]>([false, false, false, false, false]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    "האם אתם מרגישים עומס רגשי או מחשבתי שקשה לשחרר?",
    "האם יש תחושות שחוזרות על עצמן למרות שניסיתם \"להמשיך הלאה\"?",
    "האם אתם מרגישים לפעמים תקיעות, חוסר שקט או חוסר מיקוד?",
    "האם אתם מרגישים שאתם מחזיקים בפנים יותר ממה שנוח לכם להודות?",
    "האם הייתם רוצים להרגיש יותר שלווה, חופש וביטחון פנימי?",
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
    <section id="questionnaire" className="py-20 bg-gradient-to-b from-muted to-background" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            שאלון קצר: האם זה מתאים לכם?
          </h2>
          
          <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          
          <Card className="p-8 space-y-6 text-right">
            {questions.map((question, index) => (
              <div key={index} className="flex items-start gap-4 p-4 hover:bg-muted/50 rounded-lg transition-colors">
                <Checkbox
                  id={`question-${index}`}
                  checked={answers[index]}
                  onCheckedChange={(checked) => handleCheckboxChange(index, checked as boolean)}
                  className="mt-1"
                />
                <label
                  htmlFor={`question-${index}`}
                  className="text-lg text-foreground/80 cursor-pointer flex-1"
                >
                  {question}
                </label>
              </div>
            ))}
            
            <Button
              onClick={handleSubmit}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg"
            >
              הצג תוצאה
            </Button>
            
            {showResult && (
              <div className="mt-8 p-6 bg-accent/10 rounded-lg border-2 border-accent animate-fade-in">
                <p className="text-xl font-semibold text-primary mb-4">
                  {isMatch
                    ? "נראה שהתיאור שלכם מתאים לתהליך של ריפוי תודעתי."
                    : "תודה שמילאתם את השאלון."}
                </p>
                <p className="text-lg text-foreground/80 mb-6">
                  זה לא אבחון – זו הזמנה להקשבה פנימה.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8"
                  >
                    שיחה אישית בוואטסאפ
                  </Button>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8"
                  >
                    השאירו פרטים ונחזור אליכם
                  </Button>
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
