import { useState, useEffect } from "react";
import logoHeader from "@/assets/logo-header-dark.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AboutSection from "@/components/sections/AboutSection";

const Header = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isAboutDialogOpen, setIsAboutDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 100);

      // Detect which section is currently in view
      const sections = {
        "what-is": ["what-is"],
        "how-it-works": ["trauma-connection", "how-it-works", "questionnaire"],
        "why-here": ["why-here", "testimonials"],
        "next-steps": ["faq", "contact"]
      };
      
      const scrollPosition = window.scrollY + window.innerHeight / 2.5;

      for (const [groupId, sectionIds] of Object.entries(sections)) {
        for (const sectionId of sectionIds) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(groupId);
              return;
            }
          }
        }
      }
    };

    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border/30 h-16 md:h-20"
        dir="rtl"
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="flex items-center justify-between relative w-full">
            {/* Logo */}
            <img 
              src={logoHeader} 
              alt="המרכז לריפוי תודעתי" 
              className={`h-[5.46875rem] md:h-[7.03125rem] w-auto object-contain transition-opacity duration-500 max-h-full ${
                showLogo ? "opacity-100" : "opacity-0"
              }`}
            />
            
            {/* Navigation */}
            <nav className="grid grid-cols-5 md:flex gap-1 md:gap-3 lg:gap-4 justify-center flex-1 max-w-md md:max-w-none mx-auto">
              {[
                { id: "about", label: "אודות", isDialog: true },
                { id: "what-is", label: "ריפוי תודעתי" },
                { id: "how-it-works", label: "איך זה עובד", scrollTo: "trauma-connection" },
                { id: "why-here", label: "למה כאן" },
                { id: "next-steps", label: "איך מתקדמים", scrollTo: "faq" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.isDialog) {
                      setIsAboutDialogOpen(true);
                    } else {
                      scrollToSection(item.scrollTo || item.id);
                    }
                  }}
                  className={`relative text-[0.648rem] md:text-[1.05rem] lg:text-[1.2rem] transition-all group whitespace-nowrap px-0.5 md:px-0 ${
                    activeSection === item.id 
                      ? "text-foreground opacity-100 font-bold" 
                      : "text-foreground/70 opacity-40 hover:opacity-70 hover:text-accent font-medium"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sage to-primary transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <Dialog open={isAboutDialogOpen} onOpenChange={setIsAboutDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto" dir="rtl">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-l from-sage via-primary to-accent bg-clip-text text-transparent">
              אודות המרכז לריפוי תודעתי
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-foreground/90 mt-6">
            <p>
              המרכז לריפוי תודעתי נולד מתוך אמונה עמוקה שכל ריפוי אמיתי מתחיל בתודעה.
              כשאנחנו לומדים לזהות, להבין ולשחרר את הדפוסים, האמונות והרגשות שמגבילים אותנו —
              נפתח מקום חדש בתוכנו של חופש, בהירות וחיבור פנימי.
            </p>

            <p>
              במרכז אנחנו משלבים ידע וניסיון של שנים בגישות תודעתיות, רגשיות ואנרגטיות,
              וביניהן שיטת שלושת המימדים – גישה עדינה ומדויקת העובדת ישירות עם תת־המודע,
              ומאפשרת שחרור עמוק של מטענים רגשיים ואנרגטיים.
            </p>

            <p>
              הטיפול מתבצע באווירה רגועה, אישית ומכילה – בקליניקה או במפגש מקוון (Zoom),
              ומאפשר לכל אדם לעבור תהליך מעצים, מרפא ומדויק לקצב שלו.
            </p>

            <p>
              המרכז מתאים למבוגרים, נוער וילדים, ומתמקד בתהליכים של שינוי וריפוי במגוון תחומים:
              חרדות, עומסים רגשיים, קשיים בזוגיות, כאבים פיזיים ללא רקע רפואי, בעיות שינה, טיקים, הרטבה, חוסר איזון הורמונלי ועוד.
            </p>

            <p>
              הדרך שלנו היא לא רק לטפל – אלא ללמד את האדם להקשיב לעצמו מחדש,
              להתחבר לשורש הפנימי שממנו נובעים השקט, האיזון והחיוניות.
            </p>

            {/* Values Section */}
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-border/20 mt-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-sage flex items-center gap-3">
                <span className="text-3xl">💫</span>
                הערכים שלנו
              </h3>
              <div className="space-y-4 text-base md:text-lg">
                <p><strong className="text-primary">רגישות ואמפתיה</strong> – הקשבה אמיתית לכל אדם ולמסע האישי שלו.</p>
                <p><strong className="text-primary">דיוק וענווה</strong> – גישה מבוססת תובנות תודעתיות עמוקות ולא מתיימרת.</p>
                <p><strong className="text-primary">צניעות ודיסקרטיות</strong> – כל מפגש נשמר באמון מלא ובכבוד הדדי.</p>
                <p><strong className="text-primary">שילוב בין תודעה לגוף</strong> – מתוך הבנה שריפוי אמיתי כולל את שניהם.</p>
              </div>
            </div>

            {/* Personal Note */}
            <div className="bg-gradient-to-br from-sage/10 via-primary/5 to-accent/10 rounded-2xl p-8 md:p-10 border border-sage/20 mt-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-sage flex items-center gap-3">
                <span className="text-3xl">🕊️</span>
                מילה אישית
              </h3>
              <p className="text-base md:text-lg">
                בכל יום אנחנו זוכים לראות איך שינוי קטן בתודעה יוצר שינוי גדול בחיים.
                אנחנו מזמינים אתכם לגלות דרך חדשה להקשיב, לשחרר ולהתרפא — מבפנים החוצה.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
