import React from 'react';

const AboutHomeApplication = () => {
  const stats = [
    { number: "8+", text: "Years of Service" },
    { number: "1000+", text: "Happy Customers" },
    { number: "100+", text: "Top Brands" },
    { number: "24/7", text: "Customer Help" },
  ];

  const services = [
    {
      title: "Quality Brands",
      description: "We sell trusted brands like Samsung, LG, Whirlpool, Bosch, and more",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      image: "/savedphoto/qualityhome.jpg"
    },
    {
      title: "Setup Service",
      description: "Our skilled team will set up your appliances properly at your home",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1770&auto=format&fit=crop"
    },
    {
      title: "Long Warranty",
      description: "Get up to 5 years of product protection for peace of mind",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: "/savedphoto/warrentyhome.jpg"
    },
  ];

  const appliances = [
    {
      category: "Kitchen Appliances",
      items: ["Refrigerators", "Dishwashers", "Microwaves", "Gas Stoves", "Electric Ovens"]
    },
    {
      category: "Laundry Appliances",
      items: ["Washing Machines", "Dryers", "Washer-Dryer Combos"]
    },
    {
      category: "Climate Control",
      items: ["Air Conditioners", "Heaters", "Air Purifiers", "Dehumidifiers"]
    },
    {
      category: "Small Appliances",
      items: ["Coffee Makers", "Blenders", "Food Processors", "Electric Kettles"]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Background Image */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <img 
            src="/savedphoto/homeapp1.jpeg" 
            alt="Home Appliances"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to Nagarik Electronics
            </h1>
            <p className="text-2xl text-white mb-4">
              Your Friendly Home Appliance Store
            </p>
            <p className="text-xl text-gray-200 mb-8">
              We offer the best home appliances with great service and friendly support
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 -mt-20 mb-16 relative z-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.text}</div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* New Appliances Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Appliance Collection</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appliances.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Shop With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Best prices with price match guarantee",
              "Trained experts for setup & repairs",
              "100% genuine products with warranty",
              "Free delivery & setup on select items",
              "Easy payment options available",
              "Quick help when you need it"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHomeApplication;