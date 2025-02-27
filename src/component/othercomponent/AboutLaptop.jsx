import React from 'react'

const AboutLaptop = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img 
            src="/savedphoto/bannerlaptop.jpg" 
            alt="Nagarik Electronics Store laptop" 
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
          />
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Welcome to Nagarik Electronics
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your Trusted Partner for Laptop Sales and Repairs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sales Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="/savedphoto/prelaptop.jpg" 
              alt="Premium Laptops" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Premium Laptop Sales
            </h3>
            <p className="text-gray-600 mb-4">
              We offer a wide range of laptops from leading brands at competitive prices. Our collection includes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Gaming Laptops</li>
              <li>Business Notebooks</li>
              <li>Student-friendly Options</li>
              <li>High-performance Workstations</li>
            </ul>
          </div>

          {/* Repair Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="/ourgallery/2.jpeg" 
              alt="Laptop Repair Service" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Professional Repair Services
            </h3>
            <p className="text-gray-600 mb-4">
              Our expert technicians provide comprehensive repair solutions including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Hardware Repairs & Upgrades</li>
              <li>Software Troubleshooting</li>
              <li>Screen Replacement</li>
              <li>Data Recovery</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Why Choose Nagarik Electronics?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <img 
                src="/savedphoto/expertteam.jpg" 
                alt="Expert Team" 
                className="w-16 h-16 mx-auto mb-4"
              />
              <h4 className="font-medium text-gray-800">Expert Team</h4>
              <p className="text-gray-600">Certified technicians with years of experience</p>
            </div>
            <div className="p-4">
              <img 
                src="/savedphoto/quickservice.jpg" 
                alt="Quick Service" 
                className="w-16 h-16 mx-auto mb-4"
              />
              <h4 className="font-medium text-gray-800">Quick Service</h4>
              <p className="text-gray-600">Fast turnaround time for repairs</p>
            </div>
            <div className="p-4">
              <img 
                src="/savedphoto/satisfy.png" 
                alt="Quality Guarantee" 
                className="w-16 h-16 mx-auto mb-4"
              />
              <h4 className="font-medium text-gray-800">Quality Guarantee</h4>
              <p className="text-gray-600">Warranty on all repairs and products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutLaptop