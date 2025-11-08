import { ArrowLeft } from "lucide-react";

const TraumaConnectionSection = () => {
  return (
    <section className="py-20 bg-muted" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            למה אנחנו מרגישים מה שאנחנו מרגישים?
          </h2>
          
          <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            אירועים מהעבר, גם כאלה שנראים "קטנים",
            <br />
            יכולים להישמר כתבניות בתת־המודע ולהמשיך להשפיע על תחושת הערך, הביטחון והקשר עם עצמנו.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed pt-4">
            בתהליך תודעתי נכון, ניגשים אל השורש ברגישות,
            <br />
            משנים את המטען הרגשי סביבו,
            <br />
            ומאפשרים למערכת כולה להירגע.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-primary font-semibold text-lg">עבר</p>
            </div>
            <ArrowLeft className="h-6 w-6 text-accent rotate-180 md:rotate-0" />
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-primary font-semibold text-lg">תת־מודע</p>
            </div>
            <ArrowLeft className="h-6 w-6 text-accent rotate-180 md:rotate-0" />
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-primary font-semibold text-lg">רגש/התנהגות</p>
            </div>
            <ArrowLeft className="h-6 w-6 text-accent rotate-180 md:rotate-0" />
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-accent font-semibold text-lg">ריפוי</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraumaConnectionSection;
