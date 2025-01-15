import React from 'react'
import { Link } from 'react-router-dom'

const SellingPhone = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Premium Electronics at Best Prices
        </h1>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Nagarik Electronics?</h2>
          <ul className="space-y-4">
            <li className="flex items-center text-lg text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Authorized Dealer for Major Brands
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Official Warranty on All Products
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Installation & After-Sales Support
            </li>
            <li className="flex items-center text-lg text-gray-700">
              <span className="text-green-500 mr-2">✓</span> Best Market Prices Guaranteed
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-8">Our Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart TVs",
                description: "LED, OLED & QLED TVs from top brands",
                image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                path: "/abouttv"
              },
              {
                title: "Home Appliances",
                description: "Refrigerators, Washing Machines & More",
                image: "/savedphoto/frig.jpg",
                path: "/home-appliances"
              },
              {
                title: "Kitchen Appliances",
                description: "Rice Cookers, Microwaves & Induction Cookers",
                image: "/savedphoto/outerkitchen.jpg",
                path: "/kitchen-appliances"
              },
              {
                title: "Smartphones",
                description: "Latest models from all major brands",
                image: "/savedphoto/outerphone.jpg",
                path: "/smartphones"
              },
              {
                title: "Cooling Solutions",
                description: "ACs, Fans & Chest Freezers",
                image: "/savedphoto/outerfan.jpg",
                path: "/cooling-solutions"
              },
              {
                title: "Small Appliances",
                description: "Electric Kettles, Irons & Daily Essentials",
                image: "/savedphoto/outerelecketly.jpg",
                path: "/small-appliances"
              },
              {
                title: "Laptops & Accessories",
                description: "Premium laptops, parts & accessories",
                image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2068&auto=format&fit=crop",
                path: "/laptops"
              }
            ].map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link
                    to={category.path}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full block text-center"
                  >
                    More Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-8">Featured Deals</h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Samsung 43\" Smart TV",
                  price: "Starting from NPR 55,990"
                },
                {
                  title: "LG 260L Refrigerator",
                  price: "Starting from NPR 45,990"
                },
                {
                  title: "Panasonic Washing Machine",
                  price: "Starting from NPR 35,990"
                },
                {
                  title: "Philips Rice Cooker",
                  price: "Starting from NPR 5,990"
                },
                {
                  title: "Samsung Microwave Oven",
                  price: "Starting from NPR 12,990"
                },
                {
                  title: "Kent Electric Kettle",
                  price: "Starting from NPR 2,990"
                }
              ].map((deal, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:bg-blue-50 transition-all"
                >
                  <h3 className="font-semibold text-blue-800">{deal.title}</h3>
                  <p className="text-blue-600 mt-2">{deal.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Repair & Service Center</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Laptop Repairs",
                services: [
                  "Hardware Diagnostics & Repair",
                  "Screen Replacement",
                  "Battery Replacement",
                  "OS Installation & Updates"
                ]
              },
              {
                title: "Smartphone Services",
                services: [
                  "Screen Repairs",
                  "Battery Replacement",
                  "Water Damage Treatment",
                  "Software Issues"
                ]
              },
              {
                title: "Electronics Repair",
                services: [
                  "TV Repairs & Maintenance",
                  "Appliance Troubleshooting",
                  "Circuit Board Repair",
                  "Parts Replacement"
                ]
              }
            ].map((service, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-blue-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">Expert technicians with years of experience</p>
            <Link 
              to="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block"
            >
              Book a Repair Service
            </Link>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Service & Support</h2>
          <div className="warranty-details">
            <p className="text-lg text-gray-700 mb-4">We provide:</p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Manufacturer Warranty on All Products
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Free Installation for Large Appliances
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                24/7 Technical Support
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                EMI Options Available
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellingPhone