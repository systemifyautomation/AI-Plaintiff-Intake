import { Link } from 'react-router-dom'
import siteConfig from '../config/siteConfig'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-primary-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-400 rounded-lg flex items-center justify-center glow-green">
                <span className="text-black font-bold text-xl">TC</span>
              </div>
              <span className="text-xl font-bold text-white">{siteConfig.companyName}</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Custom-built intake automation tailored specifically for plaintiff law firms. 
              Seamlessly integrate your forms with Clio CRM for maximum efficiency.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-400 hover:text-primary-400 transition">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-gray-400 hover:text-primary-400 transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-primary-400 transition">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href={`mailto:${siteConfig.supportEmail}`} className="text-gray-400 hover:text-primary-400 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-900/20 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
