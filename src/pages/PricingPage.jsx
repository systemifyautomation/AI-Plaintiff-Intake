import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Check, Zap, TrendingUp, Rocket, ArrowRight, Mail, Phone } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConsultationModal from '../components/ConsultationModal'
import siteConfig from '../config/siteConfig'

const pricingTiers = [
  {
    id: 'basic',
    name: 'Basic Intake Automation',
    price: '$750',
    period: 'one-time',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    description: 'Perfect for solo practitioners and small firms just getting started',
    ideal: 'Solo/small firms (1-3 attorneys)',
    buildTime: '4-8 hours',
    features: [
      'Single intake form (Tally/Typeform/Google Form)',
      'Auto-create Contact + Matter in Clio on submit',
      'Map standard fields + up to 10 custom fields',
      'Automated confirmation email to leads',
      'Email/Slack notifications to firm',
      'Stop leads from falling through cracks',
      'Basic setup & testing included'
    ],
    popular: false
  },
  {
    id: 'smart',
    name: 'Smart Intake + Routing',
    price: '$1,800',
    priceRange: '$1,800 - $2,500',
    period: 'one-time',
    icon: TrendingUp,
    color: 'from-primary-500 to-green-500',
    description: 'Intelligent routing and conditional logic for growing firms',
    ideal: 'Mid-size firms (4-15 attorneys)',
    buildTime: '12-20 hours',
    features: [
      'Everything in Basic, plus:',
      'Multi-step conditional form logic',
      'Branching workflows based on case type',
      'Auto-assign matters to specific attorneys',
      'Tailored follow-up emails/SMS per case type',
      'Weekly intake reporting & analytics',
      'Embedded Calendly booking for strategy calls',
      'Advanced field mapping & testing'
    ],
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Full Pipeline Automation',
    price: '$4,000',
    priceRange: '$4,000 - $6,000+',
    period: 'one-time',
    maintenance: '$300/mo maintenance (optional)',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
    description: 'Complete end-to-end automation with advanced integrations',
    ideal: 'Growing & established firms',
    buildTime: 'Full implementation',
    features: [
      'Everything in Smart Routing, plus:',
      'Deep Gmail & Google Calendar integration',
      'SMS notifications via Twilio',
      'Auto-generated intake summary PDFs',
      'Automatic document upload to Clio matters',
      'Lead scoring & high-value case flagging',
      'Live dashboards (Google Data Studio/Looker)',
      'Conversion rate & source tracking',
      '90 days of tweaks & support included',
      'Optional Zapier integrations'
    ],
    popular: false
  }
]

export default function PricingPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)
  const [selectedTier, setSelectedTier] = useState(null)

  const handleGetStarted = (tier) => {
    setSelectedTier(tier)
    setIsConsultationOpen(true)
  }

  return (
    <>
      <Helmet>
        <title>Pricing - {siteConfig.companyName}</title>
        <meta 
          name="description" 
          content="Transparent pricing for Clio intake automation. Choose from Basic, Smart Routing, or Full Pipeline automation packages designed for law firms of all sizes." 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-dark-bg via-dark-card to-dark-bg">
        <Navbar onBookConsultation={() => setIsConsultationOpen(true)} />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary-400 to-green-400 bg-clip-text text-transparent">
                  Simple, Transparent Pricing
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Choose the automation level that fits your firm's needs. No hidden fees, no surprises.
                One-time investment for lasting efficiency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-dark-card border rounded-2xl p-8 ${
                    tier.popular 
                      ? 'border-primary-500 shadow-2xl shadow-primary-500/20 scale-105' 
                      : 'border-gray-800'
                  }`}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-primary-500 to-green-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${tier.color} mb-6`}>
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Tier Name & Price */}
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    {tier.priceRange && tier.priceRange !== tier.price && (
                      <span className="text-lg text-gray-400 ml-2">- {tier.priceRange.split(' - ')[1]}</span>
                    )}
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                    {tier.maintenance && (
                      <p className="text-sm text-gray-500 mt-1">{tier.maintenance}</p>
                    )}
                  </div>

                  <p className="text-gray-300 mb-6">{tier.description}</p>

                  {/* Ideal For */}
                  <div className="bg-dark-bg rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-400 mb-1">Ideal for:</p>
                    <p className="text-white font-semibold">{tier.ideal}</p>
                    <p className="text-sm text-gray-500 mt-2">Build time: {tier.buildTime}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          feature.includes('Everything in') 
                            ? 'text-gray-500' 
                            : 'text-primary-400'
                        }`} />
                        <span className={`text-sm ${
                          feature.includes('Everything in') 
                            ? 'text-gray-400 font-semibold' 
                            : 'text-gray-300'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleGetStarted(tier)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-primary-500 to-green-500 text-black hover:shadow-lg hover:shadow-primary-500/50'
                        : 'bg-dark-bg text-white border border-gray-700 hover:border-primary-500'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ/Additional Info */}
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-dark-card border border-gray-800 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Why One-Time Pricing?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">No Recurring Fees</h3>
                  <p>
                    Pay once, own it forever. Your automation workflows belong to you—no monthly 
                    subscriptions, no vendor lock-in.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Transparent Value</h3>
                  <p>
                    Know exactly what you're getting upfront. Our pricing reflects the actual 
                    build time and complexity of your automation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">ROI in Weeks</h3>
                  <p>
                    Most firms recoup their investment within 1-2 months through saved time 
                    and eliminated manual data entry.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Optional Support</h3>
                  <p>
                    Enterprise tier includes 90 days of tweaks. Need ongoing support? 
                    Optional maintenance plans available.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-primary-600 to-green-600 rounded-2xl p-12 text-center"
            >
              <h2 className="text-4xl font-bold text-black mb-4">
                Not Sure Which Tier is Right?
              </h2>
              <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                Schedule a free 30-minute consultation. We'll analyze your intake process 
                and recommend the perfect solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all transform hover:scale-105 flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Book Free Consultation</span>
                </button>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                  className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>

      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        conversionSource={selectedTier ? `pricing_${selectedTier.id}` : 'pricing_page'}
      />
    </>
  )
}
