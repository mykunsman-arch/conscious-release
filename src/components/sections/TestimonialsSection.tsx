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
import { Star, Plus, Heart } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  age?: number;
  issue: string;
  text: string;
  rating: number;
}

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "א.ש.",
    age: 35,
    issue: "אלרגיות קלות",
    text: "אחרי שנים של אלרגיות עונתיות שלא הגיבו לשום דבר, הגעתי סקפטית. אחרי כחמישה טיפולים ההתקפים נעלמו כמעט לחלוטין. מרגישה שהגוף סוף־סוף נרגע מבפנים.",
    rating: 5,
  },
  {
    id: 2,
    name: "מ.ד.",
    age: 11,
    issue: "טיקים",
    text: "הגענו לטיפול בעקבות טיקים חוזרים. כבר אחרי ארבעה מפגשים ראינו שינוי ברור – הפנים רגועות יותר, הגוף שקט. זו הייתה הקלה עצומה גם לנו כהורים.",
    rating: 5,
  },
  {
    id: 3,
    name: "נ.ל.",
    age: 22,
    issue: "גמגום קל",
    text: "אחרי שלושה מפגשים בלבד הרגשתי שינוי אמיתי. לא רק בדיבור – גם בביטחון שלי. זה כאילו משהו השתחרר בפנים, והכל נהיה קל יותר.",
    rating: 5,
  },
  {
    id: 4,
    name: "ש.ק.",
    age: 8,
    issue: "הרטבה לילית",
    text: "לא האמנתי שזה יעבוד כל כך מהר. אחרי שני מפגשים בלבד היא קמה בבוקר יבשה, שמחה וגאה בעצמה. תודה על הרוך, הסבלנות והאמונה.",
    rating: 5,
  },
  {
    id: 5,
    name: "ד.צ.",
    age: 41,
    issue: "קושי להירדם",
    text: "אחרי תקופה ארוכה של לילות בלי שינה, מצאתי סוף־סוף שקט. שלושה מפגשים שבהם למדתי להרפות, להבין מאיפה זה בא, והלילות שלי השתנו לגמרי.",
    rating: 5,
  },
  {
    id: 6,
    name: "ר.ח.",
    age: 28,
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
    <section ref={ref} id="testimonials" className="snap-section py-24 bg-gradient-soft relative overflow-hidden" dir="rtl">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-peach/5 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className={`text-center space-y-8 mb-16 section-scale ${isVisible ? 'visible' : ''}`}>
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
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {initialTestimonials.map((testimonial) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const tilt = useTilt({ maxTilt: 8, scale: 1.02 });
                return (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card 
                    ref={tilt.ref}
                    onMouseMove={tilt.handleMouseMove}
                    onMouseLeave={tilt.handleMouseLeave}
                    style={tilt.tiltStyle}
                    className="p-6 md:p-8 bg-card/80 backdrop-blur-sm shadow-xl rounded-3xl border-2 border-border/50 hover:border-accent/30 transition-colors hover:shadow-2xl h-full"
                  >
                    <div className="space-y-4 text-center">
                      {/* Stars */}
                      <StarRating rating={testimonial.rating} />

                      {/* Name and Issue */}
                      <div>
                        <h3 className="font-bold text-lg text-primary">
                          {testimonial.name}
                          {testimonial.age && `, בן/בת ${testimonial.age}`}
                        </h3>
                        <p className="text-sm text-accent font-semibold mt-1">
                          {testimonial.issue}
                        </p>
                      </div>

                      {/* Testimonial Text with Quote Marks */}
                      <div className="relative">
                        <span className="absolute -top-4 -right-2 text-6xl text-accent/20 font-serif leading-none">"</span>
                        <p className="text-foreground/80 leading-relaxed text-base lg:text-lg px-4">
                          {testimonial.text}
                        </p>
                        <span className="absolute -bottom-8 -left-2 text-6xl text-accent/20 font-serif leading-none">"</span>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Add Testimonial Button */}
        <div className="text-center mt-12">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                ref={magneticBtn as any}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all gap-2 group min-h-[56px] touch-manipulation active:scale-95"
                style={{ transition: 'transform 0.2s ease-out' }}
              >
                <Plus className="h-5 w-5 group-hover:rotate-90 transition-transform" />
                הוסף המלצה שלך
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]" dir="rtl">
              <DialogHeader>
                <DialogTitle className="text-2xl text-center font-bold text-gradient">
                  שתף את הסיפור שלך
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-right">
                      שם (ראשי תיבות)
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-right min-h-[48px] touch-manipulation"
                      dir="rtl"
                      placeholder="א.כ."
                    />
                  </div>
                  <div>
                    <label htmlFor="age" className="block text-sm font-semibold mb-2 text-right">
                      גיל (אופציונלי)
                    </label>
                    <Input
                      id="age"
                      type="number"
                      inputMode="numeric"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="text-right min-h-[48px] touch-manipulation"
                      dir="rtl"
                      placeholder="35"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="issue" className="block text-sm font-semibold mb-2 text-right">
                    נושא הטיפול
                  </label>
                  <Input
                    id="issue"
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    required
                    className="text-right min-h-[48px] touch-manipulation"
                    dir="rtl"
                    placeholder="לדוגמה: חרדות, כאבים, קשיי שינה..."
                  />
                </div>

                <div>
                  <label htmlFor="testimonial" className="block text-sm font-semibold mb-2 text-right">
                    ההמלצה שלך
                  </label>
                  <Textarea
                    id="testimonial"
                    value={formData.testimonial}
                    onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                    required
                    rows={6}
                    className="text-right resize-none min-h-[140px] touch-manipulation"
                    dir="rtl"
                    placeholder="שתף את החוויה שלך מהטיפול..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground py-6 text-lg rounded-2xl min-h-[56px] touch-manipulation active:scale-95"
                >
                  שלח המלצה
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
