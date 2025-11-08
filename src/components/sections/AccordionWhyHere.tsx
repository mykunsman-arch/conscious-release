import { Heart, Shield, Users, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionWhyHere = () => {
  const reasons = [
    { 
      icon: Heart, 
      title: "גישה רכה, רגישה ומכילה",
      content: "מתן מרחב בטוח ורגוע שבו ניתן להיפתח ללא חשש משיפוטיות. כל מפגש הוא מסע אישי המותאם לקצב שלכם."
    },
    { 
      icon: Shield, 
      title: "שילוב של עבודה תודעתית, רגשית ופיזית",
      content: "גישה הוליסטית המשלבת טכניקות שונות לטיפול בכל רבדי האדם - הרגשי, המחשבתי והגופני."
    },
    { 
      icon: Users, 
      title: "טיפול מותאם אישית – בקליניקה או בזום",
      content: "גמישות מלאה בבחירת צורת הטיפול - פנים אל פנים בקליניקה או בנוחות של הבית דרך זום, בהתאם להעדפותיכם."
    },
    { 
      icon: Sparkles, 
      title: "תוצאות עמוקות ומחזיקות לאורך זמן",
      content: "עבודה על השורש של הבעיה ולא רק על התסמינים, מה שמביא לשינוי מתמשך ועמוק שנשמר לאורך זמן."
    },
    { 
      icon: Shield, 
      title: "דיסקרטיות מלאה ואמון מלא בתהליך",
      content: "שמירה מוחלטת על פרטיותכם וסודיות מלאה. המפגש הוא מרחב בטוח המאפשר לכם להיות אותנטיים."
    },
    { 
      icon: Heart, 
      title: "🕊️ מומלץ על־ידי אנשי מקצוע",
      content: "המרכז מומלץ על ידי אנשי מקצוע מתחום הנפש והבריאות, המכירים את היעילות של הגישה."
    },
    { 
      icon: Sparkles, 
      title: "ברכות והמלצות מרבנים ויועצים רוחניים",
      content: "קיבלנו ברכות והמלצות מרבנים ויועצים רוחניים המעריכים את הגישה העדינה והמכבדת."
    },
  ];

  return (
    <div className="md:hidden space-y-3">
      <Accordion type="single" collapsible className="space-y-3">
        {reasons.map((reason, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 px-4"
          >
            <AccordionTrigger className="text-right hover:no-underline py-4 touch-manipulation min-h-[48px]">
              <div className="flex items-center gap-3">
                <reason.icon className="h-5 w-5 text-sage flex-shrink-0" />
                <span className="text-base font-semibold">{reason.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-right text-base text-foreground/70 pb-4 pr-8 leading-relaxed">
              {reason.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionWhyHere;
