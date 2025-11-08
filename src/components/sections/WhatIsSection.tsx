const WhatIsSection = () => {
  return (
    <section id="what-is" className="py-20 bg-card" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            מה זה ריפוי תודעתי
          </h2>
          
          <div className="h-1 w-24 bg-accent mx-auto rounded-full"></div>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            חוויות, אמונות וטראומות מהעבר נשמרות בתת־המודע,
            <br />
            ולעיתים מנהלות את הרגש, המחשבות והבחירות שלנו בלי שנשים לב.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed pt-4">
            ריפוי תודעתי הוא תהליך עדין שמכוון אל אותם שורשים פנימיים,
            <br />
            מאפשר לזהות ולשחרר מטען רגשי,
            <br />
            ולהחזיר את הגוף והנפש לאיזון, לבהירות ולתחושת חופש מבפנים.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
