import React from 'react'
import { motion, useInView } from 'framer-motion'

const ServiceRepairs = () => {
  const services = [
    {
      title: "Mobile Repair",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image path later
      description: "Expert repair services for all mobile phones including iPhone, Samsung, and other Android devices. Screen replacement, battery issues, and more."
    },
    {
      title: "TV Repair",
      image: "https://images.unsplash.com/photo-1646821804389-9778ce2a4fd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image path later
      description: "Professional TV repair service for all brands. We fix display issues, sound problems, panel replacement, and smart TV troubleshooting."
    },
    {
      title: "Refrigerator Service",
      image: "https://images.unsplash.com/photo-1716193696093-9c54b6a290e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image path later
      description: "Complete refrigerator repair and maintenance. We handle cooling issues, gas charging, thermostat repairs, and component replacement."
    },
    {
      title: "Washing Machine Repair",
      image: "https://plus.unsplash.com/premium_photo-1664372899525-d99a419fd21a?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image path later
      description: "Expert washing machine repairs for all brands. Fixing motor issues, spin problems, water leakage, and control board repairs."
    },
    {
      title: "Kitchen Appliances",
      image: "https://plus.unsplash.com/premium_photo-1683140593992-4a963b0b9f4b?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Add image path later
      description: "Repairs for rice cookers, microwave ovens, electric kettles, induction cooktops, and other kitchen electronics."
    },
    {
      title: "Commercial Cooling",
      image: "https://images.pexels.com/photos/3675622/pexels-photo-3675622.jpeg", // Add image path later
      description: "Service and repair for chest freezers, display coolers, and commercial refrigeration units."
    },
    {
      title: "Laptop Repair",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Professional laptop repair services for all brands. We fix hardware issues, screen replacement, keyboard repairs, battery replacement, software problems, and virus removal. Expert diagnostics and quick turnaround time."
    }
  ]

  return (
    <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Repair Services</h2>
          <p className="text-white max-w-2xl mx-auto">
            Professional repair services for all your electronic devices and home appliances. Fast, reliable, and backed by our satisfaction guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-blue-100"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <motion.h3 
                className="text-xl font-bold mb-2 text-gray-800"
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600"
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceRepairs