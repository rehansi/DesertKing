import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col space-y-4">
            <img
              // src="/path-to-logo/logo.png" // Replace with the actual logo path
              alt="Desert King"
              className="h-10 text-[#eac206] font-bold text-3xl  "
            />
            <p className="text-gray-400 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              debitis incidunt assumenda, consectetur cum quaerat molestias
              soluta voluptates! Quas inventore sequi odio officia praesentium.
              Maiores assumenda perspiciatis sequi culpa similique!
            </p>
          </div>

          {/* Download Links */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-[#eac206]">Download</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Windows app</li>
              <li>Mac app</li>
              <li>Linux app</li>
              <li>Desktop app</li>
            </ul>
          </div>

          {/* Products Links */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-[#eac206]">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Web</li>
              <li>App</li>
              <li>Software</li>
              <li>Ecommerce</li>
            </ul>
          </div>

          {/* Subscribe & Social */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-[#eac206]">Get in touch</h3>
            <div className="flex space-x-4">
              {/* Social Icons (replace with actual icons) */}
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="..." />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="..." />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="..." />
                </svg>
              </a>
            </div>

            {/* Subscription Form */}
            <div className="flex">
              <input
                type="email"
                placeholder="Enter email address"
                className="px-4 py-2 w-full rounded-l-md text-black"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          &copy; 2022 Glossy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
