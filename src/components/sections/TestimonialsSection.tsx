import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useTilt } from "@/hooks/use-tilt";
import { useMagnetic } from "@/hooks/use-magnetic";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Plus, Heart, CheckCheck, Forward } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  id: number;
  name: string;
  age?: number;
  gender?: "male" | "female";
  issue: string;
  text: string;
  rating: number;
}

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "א.ש.",
    age: 35,
    gender: "female",
    issue: "אלרגיות קלות",
    text: "אחרי שנים של אלרגיות עונתיות שלא הגיבו לשום דבר, הגעתי סקפטית. אחרי כחמישה טיפולים ההתקפים נעלמו כמעט לחלוטין. מרגישה שהגוף סוף־סוף נרגע מבפנים.",
    rating: 5,
  },
  {
    id: 2,
    name: "מ.ד.",
    age: 11,
    gender: "male",
    issue: "טיקים",
    text: "הגענו לטיפול בעקבות טיקים חוזרים. כבר אחרי ארבעה מפגשים ראינו שינוי ברור – הפנים רגועות יותר, הגוף שקט. זו הייתה הקלה עצומה גם לנו כהורים.",
    rating: 5,
  },
  {
    id: 3,
    name: "נ.ל.",
    age: 22,
    gender: "male",
    issue: "גמגום קל",
    text: "אחרי שלושה מפגשים בלבד הרגשתי שינוי אמיתי. לא רק בדיבור – גם בביטחון שלי. זה כאילו משהו השתחרר בפנים, והכל נהיה קל יותר.",
    rating: 5,
  },
  {
    id: 4,
    name: "ש.ק.",
    age: 8,
    gender: "female",
    issue: "הרטבה לילית",
    text: "לא האמנתי שזה יעבוד כל כך מהר. אחרי שני מפגשים בלבד היא קמה בבוקר יבשה, שמחה וגאה בעצמה. תודה על הרוך, הסבלנות והאמונה.",
    rating: 5,
  },
  {
    id: 5,
    name: "ד.צ.",
    age: 41,
    gender: "male",
    issue: "קושי להירדם",
    text: "אחרי תקופה ארוכה של לילות בלי שינה, מצאתי סוף־סוף שקט. שלושה מפגשים שבהם למדתי להרפות, להבין מאיפה זה בא, והלילות שלי השתנו לגמרי.",
    rating: 5,
  },
  {
    id: 6,
    name: "ר.ח.",
    age: 28,
    gender: "female",
    issue: "כאבי ראש ללא רקע רפואי",
    text: "כאב הראש שהיה איתי כמעט כל יום פשוט נעלם. שישה מפגשים עדינים ועמוקים שגרמו לי להבין שהגוף שלי רק ביקש הקשבה.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation({ variant: "zoom", threshold: 0.1 });
  const magneticBtn = useMagnetic({ strength: 0.3, tolerance: 120 });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    issue: "",
    testimonial: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "תודה על ההמלצה!",
      description: "ההמלצה שלך תתפרסם לאחר אישור",
    });
    setFormData({ name: "", age: "", issue: "", testimonial: "" });
    setIsDialogOpen(false);
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1 justify-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 transition-all hover:scale-125 ${
              index < rating
                ? "fill-yellow-400 text-yellow-400 hover:rotate-12"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section ref={ref} id="testimonials" className="snap-section py-4 md:py-5 bg-gradient-soft relative overflow-hidden" dir="rtl">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-peach/5 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className={`text-center space-y-4 mb-8 section-scale ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full animate-fade-in">
            <Heart className="h-5 w-5 text-sage transition-all" />
            <span className="text-sage font-semibold">סיפורי הצלחה</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient-shimmer leading-tight px-4 animate-scale-in font-varela">
            המלצות מלקוחות מרוצים
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto">
            אנשים אמיתיים, סיפורים אמיתיים של שינוי וריפוי
          </p>

          <div className="h-1 w-32 bg-gradient-to-r from-sage via-peach to-sage mx-auto rounded-full"></div>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto px-8 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              direction: "rtl",
            }}
            plugins={[
              Autoplay({
                delay: 10000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {initialTestimonials.map((testimonial) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const tilt = useTilt({ maxTilt: 8, scale: 1.02 });
                return (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  {/* WhatsApp Message Bubble */}
                  <div
                    ref={tilt.ref}
                    onMouseMove={tilt.handleMouseMove}
                    onMouseLeave={tilt.handleMouseLeave}
                    style={tilt.tiltStyle}
                    className="relative space-y-3"
                  >
                    {/* Patient info above the message */}
                    <div className="text-right space-y-1 px-2">
                      <p className="text-sm font-semibold text-accent">
                        {testimonial.issue}
                      </p>
                      <div className="flex items-baseline gap-2 justify-end">
                        <h3 className="font-bold text-lg text-foreground">
                          {testimonial.name}
                        </h3>
                        {testimonial.age && (
                          <span className="text-sm text-foreground/60">
                            {testimonial.gender === "female" ? "בת" : "בן"} {testimonial.age}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* WhatsApp-style message bubble */}
                    <div className="bg-[#DCF8C6] rounded-lg p-4 shadow-lg relative hover:shadow-xl transition-shadow">
                      {/* Tail/Triangle */}
                      <div className="absolute left-0 top-3 w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-[#DCF8C6] border-b-[8px] border-b-transparent -translate-x-3"></div>
                      
                      <div className="space-y-3">
                        {/* Forwarded indicator */}
                        <div className="flex items-center gap-1 text-gray-500 text-xs pb-2 border-b border-gray-300/30">
                          <Forward className="h-3 w-3" />
                          <span className="font-medium">הועברה</span>
                        </div>

                        {/* Message text */}
                        <p className="text-gray-800 leading-relaxed text-sm lg:text-base text-right">
                          {testimonial.text}
                        </p>

                        {/* Time and checkmarks (WhatsApp style) */}
                        <div className="flex items-center justify-end gap-1 text-xs text-gray-600">
                          <span>15:42</span>
                          <CheckCheck className="h-4 w-4 text-[#53BDEB]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
