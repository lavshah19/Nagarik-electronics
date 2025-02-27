import React from 'react'

const SmallApp = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Small Appliances & Daily Essentials</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Item 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <img 
            src="/savedphoto/elec1.jpg"
            alt="Electric Kettle" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Electric Kettles</h3>
            <p className="text-gray-600">Premium electric kettles for quick and efficient water boiling</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <img 
            src="/savedphoto/iron.jpg" 
            alt="Electric Iron" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Electric Irons</h3>
            <p className="text-gray-600">High-quality irons for wrinkle-free clothing</p>
          </div>
        </div>

        {/* Item 3 - Thermos */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <img 
            src="/savedphoto/thermos.jpg" 
            alt="Thermos" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Thermos</h3>
            <p className="text-gray-600">Keep your beverages hot with our premium thermos collection</p>
          </div>
        </div>

        {/* Item 4 - Heater */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <img 
            src="/savedphoto/heater.jpg" 
            alt="Room Heater" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Room Heaters</h3>
            <p className="text-gray-600">Stay warm with our efficient and safe room heaters</p>
          </div>
        </div>

        {/* Item 5 - Chest Freezer */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <img 
            src="/savedphoto/chestfreez.jpg" 
            alt="Chest Freezer" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Chest Freezers</h3>
            <p className="text-gray-600">Spacious and energy-efficient chest freezers for your storage needs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallApp