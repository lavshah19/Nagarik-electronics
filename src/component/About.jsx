import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const cards = [
    {
      title: "All Electronics in One Place",
      description: "We sell all types of electronics - from mobile phones to TVs, fridges, and washing machines. Whatever you need, you'll find it here.",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      borderColor: "border-l-4 border-blue-500"
    },
    {
      title: "Home Electronics",
      description: "We have everything for your home - fridges, washing machines, TVs, freezers, and more. All from good brands you can trust.",
      bgColor: "bg-green-50 hover:bg-green-100",
      borderColor: "border-l-4 border-green-500"
    },
    {
      title: "TV and Sound Systems",
      description: "Get the best TVs and sound systems for your home. Watch movies and listen to music with amazing quality.",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      borderColor: "border-l-4 border-purple-500"
    },
    {
      title: "Kitchen Electronics",
      description: "Make cooking easy with our rice cookers, water boilers, induction stoves, and microwaves. Perfect for every kitchen.",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      borderColor: "border-l-4 border-orange-500"
    },
    {
      title: "Quick Repair Service",
      description: "Our experts can fix your electronics quickly - from phones to home appliances. Fast and reliable repairs at good prices.",
      bgColor: "bg-red-50 hover:bg-red-100",
      borderColor: "border-l-4 border-red-500"
    },
    {
      title: "Friendly Help",
      description: "Our team is here to help you choose the right product. We give honest advice and good service to all customers.",
      bgColor: "bg-teal-50 hover:bg-teal-100",
      borderColor: "border-l-4 border-teal-500"
    },
    {
      title: "Laptops & Computers",
      description: "Browse our collection of laptops from trusted brands. Whether for work, study, or gaming, we'll help you find the perfect computer.",
      bgColor: "bg-indigo-50 hover:bg-indigo-100",
      borderColor: "border-l-4 border-indigo-500"
    },
    {
      title: "Expert Computer Repairs",
      description: "Having laptop problems? Our skilled technicians can fix hardware issues, remove viruses, upgrade components, and get your computer running like new.",
      bgColor: "bg-yellow-50 hover:bg-yellow-100",
      borderColor: "border-l-4 border-yellow-500"
    }
  ]

  return (
    <div className="p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-2 text-center text-gray-800"
        >
          About Us
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-bold mb-6 text-center text-gray-800"
        >
          Welcome to Nagarik Electronics
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-6 mb-4 bg-white rounded-lg shadow-md border border-gray-200"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Welcome to Nagarik Electronics in Bansgadhi Municipality-5, Bardiya. We sell and repair all types of electronics. From mobile phones and laptops to home appliances, we have everything you need in one place.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Looking for a new laptop, TV, fridge, washing machine, or kitchen items like rice cookers and microwaves? We have them all. Our expert technicians also provide professional computer repair services, including hardware fixes and software solutions. Our friendly staff is ready to help you find exactly what you need.
          </p>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-gray-800 mt-8 mb-6"
        >
          Why Choose Nagarik Electronics?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-sm transition-all duration-300 ${card.bgColor} ${card.borderColor}`}
            >
              <h3 className="font-semibold text-xl mb-2 text-gray-800">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 p-6 rounded-lg shadow-sm bg-gradient-to-r from-blue-50 to-purple-50 border-t-4 border-blue-500"
        >
          <h3 className="font-semibold text-xl mb-2 text-gray-800">Come Visit Us</h3>
          <p className="text-gray-700">
            You can find us in Bansgadhi Municipality-5, Bardiya. We're open Monday to Saturday. Come by anytime - we're happy to help!
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About