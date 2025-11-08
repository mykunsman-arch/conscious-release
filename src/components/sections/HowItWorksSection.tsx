import { Check } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    "שיחה והקשבה למצב הרגשי והתחושות.",
    "זיהוי נקודות עומס, דפוסים חוזרים ומקורות רגשיים.",
    "עבודה תודעתית עדינה עם תת־המודע לשחרור והקלה.",
    "חיבור מחודש לשקט, לבהירות ולחוסן פנימי.",
  ];

  return (
    <section id="how-it-works" className="py-20 bg-card" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            איך זה עובד בפועל?
          </h2>
          
          <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          
          <div className="space-y-6 pt-8 text-right max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 bg-muted p-6 rounded-lg">
                <div className="flex-shrink-0 bg-accent text-accent-foreground rounded-full p-2">
                  <Check className="h-5 w-5" />
                </div>
                <p className="text-lg text-foreground/80">{step}</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg md:text-xl text-accent font-medium pt-6">
            התהליך מותאם באופן אישי, ויכול לשלב כלים שונים בהתאם לצורך.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
