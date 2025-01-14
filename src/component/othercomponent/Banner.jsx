import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 text-white py-8 px-4 md:px-8 shadow-xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side - Shop Information */}
        <div className="md:w-1/2 space-y-4 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold animate-slideFromLeft text-white">
            Nagarik Electronics
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-100">
            Proprietor: Tilak Jaishi
          </h2>
          
          {/* Location */}
          <div className="flex items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <p className="text-lg">
              Location: Bansgadhi municipality-8, Bardiya
            </p>
          </div>
          
          <p className="text-xl text-blue-100 italic">
            Your Trusted Electronics Partner Since 2073/10/18
          </p>

          <div className="space-y-3">
            <p className="text-lg font-semibold text-white">
              We Offer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-blue-50">
              <li className="animate-slideFromLeft animation-delay-100">
                Mobile Phones, Repairs & Accessories
              </li>
              <li className="animate-slideFromLeft animation-delay-200">
                Laptops: Sales, Repairs & Accessories
              </li>
              <li className="animate-slideFromLeft animation-delay-300">
                Home Appliances: TV, Refrigerator, Washing Machine & Chest Freezer
              </li>
              <li className="animate-slideFromLeft animation-delay-400">
                Kitchen Electronics: Rice Cooker, Microwave, Electric Kettle & Induction Cooktop
              </li>
              <li className="animate-slideFromLeft animation-delay-500">
                Fans
              </li>
              <li className="animate-slideFromLeft animation-delay-600">
                Expert Repair Services for All Electronics
              </li>
              <li className="animate-slideFromLeft animation-delay-700">
                Free Technical Consultation
              </li>
            </ul>
          </div>
          
          <div className="space-y-3 pt-4">
            <a 
              href="mailto:nagarikelectronics1986@gmail.com"
              className="inline-block bg-white text-blue-800 px-6 py-2 rounded-full 
                hover:bg-blue-50 transition-all duration-300 animate-pulse font-semibold
                shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            <p className="text-sm text-blue-100">
              Email: nagarikelectronics1986@gmail.com
            </p>
            <p className="text-sm italic text-blue-100">
              Visit us today for free consultation on any electronic issues!
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 animate-fadeIn">
          <div className="bg-white/10 backdrop-blur-sm h-64 md:h-80 rounded-lg flex items-center justify-center border border-blue-400/30 shadow-lg">
            <img 
              src="/ourgallery/1.jpeg" 
              alt="Nagarik Electronics Shop"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
