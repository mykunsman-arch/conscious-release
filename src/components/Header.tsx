const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="hidden md:block fixed top-0 w-full z-50 bg-transparent"
      dir="rtl"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <nav className="flex gap-6 lg:gap-8 mx-auto">
            {[
              { id: "what-is", label: "מה זה ריפוי תודעתי" },
              { id: "how-it-works", label: "איך זה עובד" },
              { id: "questionnaire", label: "שאלון" },
              { id: "contact", label: "יצירת קשר" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-sm md:text-base font-medium text-foreground/70 hover:text-accent transition-colors group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sage to-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
