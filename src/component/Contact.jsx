import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // console.log('Form submitted:', formData)
    
    setFormData({
      fullName: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="p-8 max-w-6xl mx-auto bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg space-y-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Get in Touch</h2>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Contact Information */}
        <div className="flex-1 bg-blue-600 p-8 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-6">Nagarik Electronics</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p className="text-lg">Proprietor: Tilak Jaishi</p>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>Bansgadhi municipality-8, Bardiya</p>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <p>9801747035, 9858047035</p>
            </div>
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:nagarikelectronics1986@gmail.com" className="hover:text-blue-200 transition-colors duration-300">
                nagarikelectronics1986@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex-1 bg-white p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none text-gray-600" 
              placeholder="full name"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none text-gray-600" 
              placeholder="XYZ@example.com"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none text-gray-600" 
              rows="6" 
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact