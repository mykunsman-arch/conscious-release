import lotusImage from "@/assets/lotus-healing.jpg";

const WhyHereSection = () => {
  return (
    <section className="py-20 bg-card" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              למה דווקא כאן
            </h2>
            
            <div className="h-1 w-24 bg-accent rounded-full"></div>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              המרכז לריפוי תודעתי שם במרכז את האדם, לא את השיטה.
              <br />
              הגישה משלבת כלים עדינים ומדויקים,
              <br />
              מרחב מכיל ולא שיפוטי,
              <br />
              ואפשרות למפגשים בקליניקה או אונליין,
              <br />
              כדי שתוכלו לעבור תהליך עמוק בקצב שנכון לכם.
            </p>
          </div>
          
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl animate-fade-in">
            <img
              src={lotusImage}
              alt="ריפוי תודעתי"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHereSection;
