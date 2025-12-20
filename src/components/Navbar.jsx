import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'
import siteConfig from '../config/siteConfig'
import logo from '../assets/logo.svg'

export default function Navbar({ onBookConsultation }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt={siteConfig.companyName} className="h-10 w-auto" />
            <span className="text-xl font-bold text-white">
              {siteConfig.companyName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/pricing" 
              className="text-gray-300 hover:text-primary-400 font-medium transition"
            >
              Pricing
            </Link>
            
            {/* Support Representative */}
            <div className="flex items-center space-x-3 px-4 py-2 bg-dark-card/50 rounded-lg border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                alt="Customer Support"
                className="w-10 h-10 rounded-full border-2 border-primary-500"
              />
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-500" />
                <a 
                  href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                  className="text-white font-semibold hover:text-primary-400 transition"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            
            <Link
              to="/product"
              className="bg-gradient-to-r from-primary-600 to-primary-500 text-black px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg glow-green transform hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark-card border-t border-dark-border">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {/* Support Contact for Mobile */}
            <div className="flex items-center space-x-3 py-3 border-b border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                alt="Customer Support"
                className="w-10 h-10 rounded-full border-2 border-primary-500"
              />
              <div>
                <p className="text-xs text-gray-400">Customer Support</p>
                <a 
                  href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                  className="text-white font-semibold hover:text-primary-400 transition flex items-center space-x-1"
                >
                  <Phone className="w-4 h-4 text-primary-500" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>
            
            <Link 
              to="/" 
              className="block text-gray-300 hover:text-primary-400 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/product" 
              className="block text-gray-300 hover:text-primary-400 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Product
            </Link>
            <Link 
              to="/pricing" 
              className="block text-gray-300 hover:text-primary-400 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/product"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-gradient-to-r from-primary-600 to-primary-500 text-black px-6 py-2.5 rounded-lg font-semibold text-center glow-green"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
