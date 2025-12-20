import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  BarChart3,
  Bell,
  Settings,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Users,
  FileCheck,
  MessageSquare,
  Calendar,
  Play
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConsultationModal from '../components/ConsultationModal'
import siteConfig from '../config/siteConfig'

export default function ProductPage() {
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [conversionSource, setConversionSource] = useState('unknown')
  const integrationSteps = [
    {
      title: "Discovery Call",
      description: "We analyze your current process, forms, CRM setup, and identify bottlenecks. Understanding your unique workflow is our foundation.",
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      title: "Custom Integration Design",
      description: "Our team designs a tailored automation that fits your exact needs. Works with any form platform and Clio (or custom CRMs).",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Build & Test",
      description: "We build your custom automation, test it thoroughly, and make adjustments based on your feedback until it's perfect.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Launch & Support",
      description: "Go live with zero friction. Premium ongoing support ensures everything runs smoothly, with dedicated assistance whenever you need it.",
      icon: <Zap className="w-6 h-6" />
    }
  ]

  const coreFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Lead Sync",
      description: "Injury intake forms submitted on Tally appear in Clio within seconds. No delays, no manual work.",
      features: [
        "Instant webhook processing",
        "Automatic data validation",
        "Duplicate detection",
        "Error recovery & retry"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI Lead Scoring",
      description: "Machine learning algorithms analyze each submission to predict case value and conversion probability.",
      features: [
        "Injury severity assessment",
        "Case type classification",
        "Priority recommendations",
        "Historical pattern analysis"
      ]
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Notifications",
      description: "Get alerted about high-priority leads instantly via email, SMS, or Slack integration.",
      features: [
        "Custom notification rules",
        "Multi-channel delivery",
        "Team assignment alerts",
        "Digest summaries"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Track lead sources, conversion rates, response times, and ROI with beautiful visualizations.",
      features: [
        "Lead source attribution",
        "Conversion funnel analysis",
        "Team performance metrics",
        "Custom report builder"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom Field Mapping",
      description: "Map any Tally form field to any Clio field. Support for custom fields and complex data structures.",
      features: [
        "Drag-and-drop mapping",
        "Data transformation rules",
        "Conditional logic",
        "Template library"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Industry-standard security and reliable data handling to keep your client information safe.",
      features: [
        "Encrypted data transmission",
        "Secure cloud storage",
        "Regular automated backups",
        "Protected API connections"
      ]
    }
  ]

  const advancedFeatures = [
    { icon: <MessageSquare />, title: "Automated Follow-ups", description: "AI-powered email sequences for lead nurturing" },
    { icon: <Calendar />, title: "Smart Scheduling", description: "Automatic consultation booking in Clio calendar" },
    { icon: <Users />, title: "Team Collaboration", description: "Assign leads, add notes, and track progress" },
    { icon: <Smartphone />, title: "Mobile Access", description: "Manage leads on-the-go with mobile app" },
    { icon: <Lock />, title: "Data Privacy", description: "GDPR & CCPA compliant data handling" },
    { icon: <Clock />, title: "24/7 Monitoring", description: "Uptime monitoring and instant issue alerts" }
  ]

  const pricingApproach = [
    {
      title: "Discovery & Assessment",
      description: "Free consultation call to understand your firm's needs, current process, and automation goals.",
      included: [
        "30-minute strategy call",
        "Process analysis",
        "ROI estimation",
        "Custom proposal"
      ]
    },
    {
      title: "Custom Development",
      description: "Tailored automation built specifically for your firm's workflow and requirements.",
      included: [
        "Works with any form platform",
        "Clio CRM integration (or custom)",
        "Custom field mapping",
        "Workflow automation",
        "Testing & refinement",
        "Team training"
      ]
    },
    {
      title: "Launch & Support",
      description: "Smooth deployment with premium ongoing support to ensure long-term success.",
      included: [
        "Zero-friction launch",
        "Premium support included",
        "Regular check-ins",
        "Updates & improvements",
        "Dedicated assistance"
      ]
    }
  ]

  const testimonials = [
    {
      quote: "The custom automation they built for us eliminated 20+ hours of manual work every week. It fits our process perfectly.",
      author: "Sarah Mitchell",
      title: "Managing Partner, Mitchell & Associates",
      rating: 5
    },
    {
      quote: "Unlike off-the-shelf solutions, this was tailored exactly to our needs. The team really understood our workflow and pain points.",
      author: "James Rodriguez",
      title: "Lead Attorney, Rodriguez Law Group",
      rating: 5
    },
    {
      quote: "The consultation was thorough, development was fast, and support is exceptional. Best investment we've made in our practice.",
      author: "Emily Chen",
      title: "Operations Manager, Chen Legal",
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>Product Features - Custom Clio Automation for Plaintiff Firms | Tally-Clio</title>
        <meta 
          name="description" 
          content="Custom-built intake automation for plaintiff firms. Tailored Clio CRM integration, intelligent lead capture, and advanced workflow automation designed specifically for your firm's unique needs." 
        />
        <meta 
          name="keywords" 
          content="custom Clio automation, plaintiff firm intake automation, tailored CRM integration, custom lead management, Clio workflow automation, legal intake consulting, bespoke law firm automation, custom case management integration, plaintiff attorney CRM, tailor-made legal automation" 
        />
        <meta property="og:title" content="Custom Clio Automation Solutions for Plaintiff Firms" />
        <meta property="og:description" content="Tailor-made intake automation built specifically for your plaintiff firm's workflow and Clio CRM requirements." />
        <link rel="canonical" href={`${siteConfig.website}/product`} />
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
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                The Complete{' '}
                <span className="gradient-text">Clio Automation</span>
                <br />
                Add-On for Plaintiff Firms
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-4xl mx-auto">
                Custom-built intake automation tailored to your firm's unique workflow and CRM requirements.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button
                  onClick={() => {
                    setConversionSource('product-hero-cta')
                    setShowConsultationModal(true)
                  }}
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Demo Video */}
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/dBLajzNCITw"
                      title="Demo Video - Clio Automation"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <p className="text-center text-gray-400 mt-4">Watch how our custom automation works</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Consultation Modal */}
        <ConsultationModal 
          isOpen={showConsultationModal} 
          onClose={() => setShowConsultationModal(false)}
          conversionSource={conversionSource}
        />

        {/* Integration Steps */}
        <section className="py-20 bg-dark-card px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How We Build Your Custom Solution
              </h2>
              <p className="text-xl text-gray-400">
                A proven process designed to deliver exactly what your firm needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="glass-effect p-6 rounded-xl h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-400 rounded-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="w-10 h-10 bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Powerful Features for Modern Plaintiff Firms
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built specifically for attorneys who need custom automation for Clio CRM
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 rounded-2xl hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-400 rounded-xl flex items-center justify-center text-white mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-20 bg-dark-card px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Even More Powerful Features
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 glass-effect rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Investment <span className="gradient-text">Tiers</span>
              </h2>
              <p className="text-xl text-gray-400">
                One-time pricing designed for law firms. Choose your automation level.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Basic Intake Automation',
                  price: '$750',
                  period: 'one-time',
                  ideal: 'Solo/small firms (1-3 attorneys)',
                  buildTime: '4-8 hours',
                  features: [
                    'Single intake form (Tally/Typeform/Google)',
                    'Auto-create Contact + Matter in Clio',
                    'Map standard + 10 custom fields',
                    'Automated confirmation emails',
                    'Email/Slack notifications to firm',
                    'Basic setup & testing'
                  ],
                  popular: false
                },
                {
                  name: 'Smart Intake + Routing',
                  price: '$1,800',
                  priceRange: '$1,800 - $2,500',
                  period: 'one-time',
                  ideal: 'Mid-size firms (4-15 attorneys)',
                  buildTime: '12-20 hours',
                  features: [
                    'Everything in Basic, plus:',
                    'Multi-step conditional forms',
                    'Branching workflows by case type',
                    'Auto-assign to specific attorneys',
                    'Tailored follow-up emails/SMS',
                    'Weekly intake reporting',
                    'Calendly booking integration',
                    'Advanced testing & optimization'
                  ],
                  popular: true
                },
                {
                  name: 'Full Pipeline Automation',
                  price: '$4,000',
                  priceRange: '$4,000 - $6,000+',
                  period: 'one-time',
                  maintenance: '$300/mo optional',
                  ideal: 'Growing & established firms',
                  buildTime: 'Full implementation',
                  features: [
                    'Everything in Smart Routing, plus:',
                    'Deep Gmail & Calendar integration',
                    'SMS notifications via Twilio',
                    'Auto-generated intake PDF summaries',
                    'Lead scoring & high-value flagging',
                    'Live dashboards (Data Studio/Looker)',
                    'Conversion & source tracking',
                    '90 days of tweaks & support',
                    'Optional Zapier integrations'
                  ],
                  popular: false
                }
              ].map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative glass-effect rounded-2xl p-8 ${
                    tier.popular ? 'ring-2 ring-primary-500 scale-105' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-primary-500 to-green-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-3">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold gradient-text">{tier.price}</span>
                    {tier.priceRange && tier.priceRange !== tier.price && (
                      <span className="text-lg text-gray-400 ml-1">- {tier.priceRange.split(' - ')[1]}</span>
                    )}
                    <p className="text-sm text-gray-500 mt-1">{tier.period}</p>
                    {tier.maintenance && (
                      <p className="text-xs text-gray-600 mt-1">{tier.maintenance}</p>
                    )}
                  </div>
                  <div className="bg-dark-bg rounded-lg p-3 mb-6">
                    <p className="text-xs text-gray-500">Ideal for:</p>
                    <p className="text-white font-semibold text-sm">{tier.ideal}</p>
                    <p className="text-xs text-gray-600 mt-1">Build time: {tier.buildTime}</p>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          feature.includes('Everything in') ? 'text-gray-500' : 'text-primary-400'
                        }`} />
                        <span className={`text-sm ${
                          feature.includes('Everything in') ? 'text-gray-400 font-semibold' : 'text-gray-300'
                        }`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      setConversionSource(`product-pricing-${tier.name.toLowerCase().replace(/\s+/g, '-')}`)
                      setShowConsultationModal(true)
                    }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-primary-500 to-green-500 text-black hover:shadow-lg'
                        : 'bg-dark-bg text-white border border-gray-700 hover:border-primary-500'
                    }`}
                  >
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                to="/pricing"
                className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 font-semibold transition"
              >
                <span>See Full Pricing Details & Comparison</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-dark-card px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Trusted by Leading Plaintiff Firms
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 rounded-2xl"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-black via-primary-950 to-black text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Intake Process?
              </h2>
              <p className="text-xl mb-10 text-primary-100">
                Book a free consultation to discover how custom automation can save your firm 20+ hours per week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setConversionSource('product-bottom-cta')
                    setShowConsultationModal(true)
                  }}
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    setConversionSource('product-demo-cta')
                    setShowConsultationModal(true)
                  }}
                  className="inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all"
                >
                  <span>Schedule Your Demo</span>
                </button>
              </div>
              <p className="text-sm text-primary-100 mt-6">
                Custom-tailored • Premium support • Risk-free consultation
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

