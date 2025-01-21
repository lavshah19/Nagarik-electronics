import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nagarik Electronics</h3>
            <div className="flex items-center gap-2 mb-2">
              <FaMapMarkerAlt />
              <p>Bansgadhi Municipality-5, Bardiya</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <FaPhone />
                <p>+977-9801747035</p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone />
                <p>+977-9858047035</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Electronics Sales</li>
              <li>Repair Services</li>
              <li>Installation</li>
              <li>Maintenance</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100082508861018&mibextid=ZbWKwL" className="text-2xl hover:text-blue-400">
                <FaFacebook />
              </a>
              <a href="https://www.tiktok.com/@nagarikelectronics806?_t=ZS-8t4eyMW5nbr&_r=1" className="text-2xl hover:text-blue-400">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Nagarik Electronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer