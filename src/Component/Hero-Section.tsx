import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Search,
  Twitter,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const EnhancedTourismWebsite: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  const carouselItems = [
    {
      title: "Discover Dubai with Elegance",
      description:
        "Luxury, adventure, and unforgettable experiences await you.",
      img: "https://plus.unsplash.com/premium_photo-1661963885635-2b428cedce28?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Exclusive Hotels with Stunning Views",
      description: "World-class hospitality for every type of traveler.",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Experience the Thrill of Dubai",
      description: "From adventure to relaxation, we offer it all.",
      img: "https://plus.unsplash.com/premium_photo-1661964298224-7747aa0ac10c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const offerItems = [
    {
      title: "Luxury Holiday Packages",
      description:
        "Immerse yourself in a luxury vacation experience tailored to your needs.",
      img: "https://plus.unsplash.com/premium_photo-1697729798591-8b7e1b271515?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Exciting Activities",
      description:
        "Explore Dubai's best attractions and activities with exclusive offers.",
      img: "https://images.unsplash.com/photo-1527244801394-a5594462a962?q=80&w=1702&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "World-Class Hotels",
      description:
        "Stay at the finest hotels with breathtaking views and top-tier services.",
      img: "https://images.unsplash.com/photo-1546412414-c2658fffe7d9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Seamless Visa Assistance",
      description:
        "Let us handle your visa needs while you plan your perfect trip.",
      img: "https://images.unsplash.com/photo-1507020177664-e4eac8761972?q=80&w=1606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Desert Kings made our Dubai trip unforgettable. The attention to detail was impeccable!",
      img: "https://www.shutterstock.com/image-photo/portrait-mature-business-woman-smiling-260nw-1593894763.jpg",
    },
    {
      name: "Michael Chen",
      text: "From luxury hotels to thrilling desert safaris, every moment was perfect. Highly recommended!",
      img: "https://www.shutterstock.com/image-photo/portrait-attractive-man-smiling-confident-260nw-1629683515.jpg",
    },
    {
      name: "Emma Rodriguez",
      text: "The team at Desert Kings went above and beyond to ensure we had the trip of a lifetime.",
      img: "https://www.shutterstock.com/image-photo/portrait-mature-business-woman-smiling-260nw-1593894763.jpg",
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

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dubai Skyline"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-6xl font-serif font-bold mb-6">
            Discover Dubai with Desert Kings
          </h1>
          <p className="text-2xl mb-10 max-w-2xl">
            Your gateway to exploring Dubai's luxury, adventure, and
            breathtaking views.
          </p>
          <button className="px-8 py-3 bg-[#eac206] text-[#333333] rounded-full shadow-lg hover:bg-[#ffd700] transition-all text-xl font-bold">
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
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
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

      {/* Interactive Map Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#000000] mb-12">
            Explore Dubai's Hotspots
          </h2>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <img
              src="https://plus.unsplash.com/premium_photo-1661962680724-d926ef951cb8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Interactive Map of Dubai"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600 mb-4">
                Discover the best locations Dubai has to offer with our
                interactive map.
              </p>
              <button className="px-6 py-3 bg-[#eac206] text-[#333333] rounded-full shadow-lg hover:bg-[#ffd700] transition-all">
                Open Interactive Map
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#333333] mb-12">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-[#333333]">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-[#000000]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#333333] mb-6">
            Ready to Experience Dubai?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Book your dream vacation with Desert Kings today and create memories
            that last a lifetime.
          </p>
          <button className="px-8 py-3 bg-[#333333] text-white rounded-full shadow-lg hover:bg-gray-800 transition-all text-xl font-bold">
            Book Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-bold mb-4">Desert Kings</h3>
              <p>Your premier Dubai travel partner.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#eac206]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#eac206]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#eac206]">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#eac206]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <p>1234 Tourism Street</p>
              <p>Dubai, UAE</p>
              <p>Phone: +971 123 456 789</p>
              <p>Email: info@desertkings.com</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#eac206]">
                  <Instagram />
                </a>
                <a href="#" className="hover:text-[#eac206]">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-[#eac206]">
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 Desert Kings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedTourismWebsite;
