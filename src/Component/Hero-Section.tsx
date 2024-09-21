import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import React, { useEffect, useState } from "react";

const ElegantLandingPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      title: "Discover Dubai with Elegance",
      description:
        "Luxury, adventure, and unforgettable experiences await you.",
      img: "./asset/1.jpg",
    },
    {
      title: "Exclusive Hotels with Stunning Views",
      description: "World-class hospitality for every type of traveler.",
      img: "./asset/2.jpg",
    },
    {
      title: "Experience the Thrill of Dubai",
      description: "From adventure to relaxation, we offer it all.",
      img: "./asset/3.jpg",
    },
  ];

  const offerItems = [
    {
      title: "Luxury Holiday Packages",
      description:
        "Immerse yourself in a luxury vacation experience tailored to your needs.",
      img: "./asset/5.png",
    },
    {
      title: "Exciting Activities",
      description:
        "Explore Dubai's best attractions and activities with exclusive offers.",
      img: "./asset/6.png",
    },
    {
      title: "World-Class Hotels",
      description:
        "Stay at the finest hotels with breathtaking views and top-tier services.",
      img: "./asset/5.png",
    },
    {
      title: "Seamless Visa Assistance",
      description:
        "Let us handle your visa needs while you plan your perfect trip.",
      img: "./asset/6.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Glassmorphism Navbar */}
      <nav className="backdrop-blur-md bg-white/30 border-b border-gray-300 shadow-sm p-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-4xl font-serif text-[#eac206] font-bold">
            Desert Kings
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-[#333333] hover:text-[#eac206]">
              Home
            </a>
            <a href="#" className="text-[#333333] hover:text-[#eac206]">
              About Us
            </a>
            <a href="#" className="text-[#333333] hover:text-[#eac206]">
              Packages
            </a>
            <a href="#" className="text-[#333333] hover:text-[#eac206]">
              Hotels
            </a>
            <a href="#" className="text-[#333333] hover:text-[#eac206]">
              Visa
            </a>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white/40 border border-gray-300 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#eac206]"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-600" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#f9f9f9] to-[#f1f1f1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-serif font-bold text-[#333333] mb-6">
            Discover Dubai with Desert Kings
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Your gateway to exploring Dubai's luxury, adventure, and
            breathtaking views.
          </p>
          <button className="px-8 py-3 bg-[#eac206] text-[#333333] rounded-full shadow-lg hover:bg-[#ffd700] transition-all">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="relative bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="relative h-96 overflow-hidden rounded-lg shadow-2xl">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center p-6">
                    <h3 className="text-4xl font-bold">{item.title}</h3>
                    <p className="text-xl mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-[#eac206] p-2 rounded-full shadow-lg hover:bg-[#ffd700]"
            >
              <ChevronLeft className="text-[#333333]" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="bg-[#eac206] p-2 rounded-full shadow-lg hover:bg-[#ffd700]"
            >
              <ChevronRight className="text-[#333333]" />
            </button>
          </div>
        </div>
      </section>

      {/* What We Offer Section with Glassmorphism */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#333333] mb-12">
            What We Offer
          </h2>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {offerItems.map((item, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/40 border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#333333] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button className="px-4 py-2 bg-[#eac206] text-[#333333] rounded-full shadow-lg hover:bg-[#ffd700] transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElegantLandingPage;
