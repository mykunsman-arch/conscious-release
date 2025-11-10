import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation({ variant: "fade-up", threshold: 0.1 });

  const faqs = [
    {
      question: "כמה זמן לוקח טיפול?",
      answer: "טיפול בודד נמשך בין 45-90 דקות. מספר המפגשים משתנה בהתאם לצורך האישי - חלק מהאנשים מרגישים שינוי כבר אחרי 2-3 מפגשים, ואחרים מעדיפים תהליך ארוך יותר."
    },
    {
      question: "האם זה מתאים לילדים?",
      answer: "בהחלט! הטיפול מתאים לילדים. העבודה עם ילדים היא עדינה, משחקית ומותאמת לגילם. ראינו תוצאות מצוינות בנושאים כמו טיקים, הרטבה, חרדות וקשיי התנהגות."
    },
    {
      question: "מה ההבדל בין ריפוי תודעתי לטיפול רגיל?",
      answer: "ריפוי תודעתי עובד עם השורש הרגשי והתת-מודע של הבעיה, ולא רק עם הסימפטום. התהליך משלב גישות רגשיות, תודעתיות ואנרגטיות, ומתמקד בשחרור עומסים ישנים ושינוי דפוסים מעכבים."
    },
    {
      question: "האם הטיפול יכול להתבצע מרחוק?",
      answer: "כן! הטיפול יעיל באותה מידה בזום כמו בקליניקה. רבים מהלקוחות שלנו מעדיפים את הנוחות של טיפול מהבית, במיוחד כשמדובר בילדים או באנשים עם לוח זמנים עמוס."
    },
    {
      question: "האם יש תופעות לוואי?",
      answer: "הטיפול עדין ולא פולשני. לעיתים, אחרי מפגש עשוי להיות תהליך של 'שחרור' - עייפות קלה, רגשות שעולים, או אפילו הקלה מיידית. זה חלק טבעי מהתהליך ועובר תוך יום-יומיים."
    },
    {
      question: "כמה עולה טיפול?",
      answer: "מחיר הטיפול משתנה בהתאם לסוג המפגש ולמשך הזמן. מומלץ ליצור קשר לשיחת ייעוץ ראשונית (ללא עלות) כדי להבין את הצורך ולקבל הצעת מחיר מדויקת."
    }
  ];

  return (
    <section ref={ref} id="faq" className="py-20 bg-card relative overflow-hidden" dir="rtl">
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className={`space-y-8 section-slide-up ${isVisible ? 'visible' : ''}`}>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full">
              <HelpCircle className="h-5 w-5 text-sage" />
              <span className="text-sage font-semibold">שאלות נפוצות</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient font-varela">
              שאלות נפוצות
            </h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-sage to-peach rounded-full mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-effect rounded-2xl px-6 border-border/30 hover:border-accent/30 transition-all"
              >
                <AccordionTrigger className="text-right text-lg md:text-xl font-semibold hover:text-sage py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-base md:text-lg text-foreground/70 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
