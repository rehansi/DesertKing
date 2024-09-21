import "./App.css";
import Footer from "./Component/Footer";
import HeroSection from "./Component/Hero-Section";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow">
        <HeroSection />
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
