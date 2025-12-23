import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock,
  HelpCircle,
  Send,
  CheckCircle
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConsultationModal from '../components/ConsultationModal'
import siteConfig from '../config/siteConfig'

export default function SupportPage() {
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [conversionSource, setConversionSource] = useState('unknown')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'normal'
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send to your backend/email service
    console.log('Support request:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        priority: 'normal'
      })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const supportChannels = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      contact: siteConfig.supportEmail,
      action: `mailto:${siteConfig.supportEmail}`,
      actionText: "Send Email"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Speak with our team Monday - Friday, 9am - 6pm EST",
      contact: siteConfig.phone,
      action: `tel:${siteConfig.phone.replace(/\D/g, '')}`,
      actionText: "Call Now"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Schedule a Call",
      description: "Book a time that works best for your schedule",
      contact: "Available 7 days a week",
      action: siteConfig.calendlyUrl,
      actionText: "Book Call"
    }
  ]

  const supportResources = [
    {
      icon: <HelpCircle className="w-6 h-6" />,
      title: "Documentation",
      description: "Browse our comprehensive guides and resources",
      link: "/documentation"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "FAQs",
      description: "Find answers to commonly asked questions",
      link: "/documentation#faqs"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Service Status",
      description: "Check real-time system status and uptime",
      link: "#status"
    }
  ]

  return (
    <>
      <Helmet>
        <title>Support & Help Center - Clio Automation Support | {siteConfig.companyName}</title>
        <meta 
          name="description" 
          content="Get expert support for your Clio lead automation. Contact our team via email, phone, or live chat. Fast, dedicated help for plaintiff law firms. Premium support included with all plans."
        />
        <meta 
          name="keywords" 
          content="Clio automation support, law firm software help, legal automation assistance, Clio integration support, plaintiff firm help desk, legal tech support, CRM automation help, attorney software support, law firm technical support" 
        />
        <link rel="canonical" href={`${siteConfig.website}/support`} />
        <meta property="og:title" content="Support & Help Center - Clio Automation Support" />
        <meta property="og:description" content="Get expert support for your Clio lead automation. Fast, dedicated help for plaintiff law firms." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-dark-bg bg-dark-gradient">
        <Navbar onBookConsultation={(source) => {
          setConversionSource(source)
          setShowConsultationModal(true)
        }} />

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                We're Here to <span className="gradient-text">Help</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Premium support for your custom automation solution. Get in touch and we'll respond quickly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 rounded-2xl text-center hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-400 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                    {channel.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {channel.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {channel.description}
                  </p>
                  <p className="text-primary-400 font-semibold mb-6">
                    {channel.contact}
                  </p>
                  <a
                    href={channel.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                  >
                    {channel.actionText}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-dark-card px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-400">
                Fill out the form below and we'll get back to you shortly
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll respond to your inquiry within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-800 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-bg border border-gray-800 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="john@lawfirm.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-gray-800 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-300 mb-2">
                      Priority
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-bg border border-gray-800 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="low">Low - General inquiry</option>
                      <option value="normal">Normal - Standard support</option>
                      <option value="high">High - Urgent issue</option>
                      <option value="critical">Critical - System down</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 bg-dark-bg border border-gray-800 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                      placeholder="Tell us about your issue or question..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-400">
                Find answers and learn more about our services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {supportResources.map((resource, index) => (
                <motion.a
                  key={index}
                  href={resource.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-xl hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                      {resource.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-400">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        
        <ConsultationModal 
          isOpen={showConsultationModal} 
          onClose={() => setShowConsultationModal(false)}
          conversionSource={conversionSource}
        />
      </div>
    </>
  )
}
