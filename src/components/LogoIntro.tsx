import logo from "@/assets/logo-main.png";

interface LogoIntroProps {
  showIntro: boolean;
}

const LogoIntro = ({ showIntro }: LogoIntroProps) => {
  if (!showIntro) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background backdrop-blur-sm logo-intro-overlay">
      <div className="logo-intro-content">
        <img 
          src={logo} 
          alt="המרכז לריפוי תודעתי" 
          className="w-64 md:w-96 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default LogoIntro;
