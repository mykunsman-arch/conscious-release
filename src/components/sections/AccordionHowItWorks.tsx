import { CircleDot } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionHowItWorks = () => {
  const points = [
    { title: "זיהוי דפוסים", content: "זיהוי דפוסים רגשיים ומחשבתיים חוזרים שמשפיעים על חיי היומיום" },
    { title: "עבודה עם תת־המודע", content: "עבודה עם תת־המודע לשחרור עומסים ואמונות מגבילות שנוצרו בעבר" },
    { title: "איזון בין גוף לנפש", content: "איזון בין גוף, רגש ותודעה ליצירת הרמוניה פנימית" },
    { title: "תמיכה בצמיחה", content: "תמיכה בצמיחה רגשית, זוגית ופיזית באמצעות תהליך מודע ומלווה" },
    { title: "התאמה אישית", content: "התאמה אישית של השיטה לפי הצורך הייחודי של כל אדם" },
  ];

  return (
    <div className="md:hidden space-y-3">
      <Accordion type="single" collapsible className="space-y-3">
        {points.map((point, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-gradient-to-br from-muted/50 to-background rounded-2xl border border-border/50 px-4"
          >
            <AccordionTrigger className="text-right hover:no-underline py-4 touch-manipulation min-h-[48px]">
              <div className="flex items-center gap-3">
                <CircleDot className="h-5 w-5 text-sage flex-shrink-0" />
                <span className="text-base font-semibold">{point.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-right text-base text-foreground/70 pb-4 pr-8">
              {point.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionHowItWorks;
