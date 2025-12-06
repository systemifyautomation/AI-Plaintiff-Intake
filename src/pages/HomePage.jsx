import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  BarChart3,
  Users,
  FileText,
  X
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConsultationModal from '../components/ConsultationModal'
import siteConfig from '../config/siteConfig'

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [conversionSource, setConversionSource] = useState('unknown')
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Works With Any Form",
      description: "Connect your existing forms - Tally, Typeform, Google Forms, or any custom solution. No need to change what's working."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Zero Lead Leakage",
      description: "Never lose a lead again. Automated follow-ups and error-free data migration mean every opportunity is captured."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Plug-and-Play Setup",
      description: "Custom-tailored to your exact process. No friction, no changes unless you want optimization. We adapt to you."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Premium Support Included",
      description: "Fast, dedicated support from our team. As a new product, you get premium care and direct access to our experts."
    }
  ]

  const stats = [
    { number: "15+", label: "Hours Saved Weekly" },
    { number: "100%", label: "Error-Free Data Migration" },
    { number: "0", label: "Lead Leakage" },
    { number: "24/7", label: "Premium Support" }
  ]

  const benefits = [
    "Eliminate manual data entry forever - 15+ hours saved weekly",
    "Zero lead leakage with automated follow-ups",
    "Error-free data migration to Clio or your CRM",
    "Smart alerts via WhatsApp, SMS, Slack, or any channel",
    "AI voice agents for lead qualification over the phone",
    "Weekly reports and performance dashboards for complete oversight",
    "Document automation and invoice processing",
    "Turn your firm into a money-making machine"
  ]

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Clio Lead Automation for Plaintiff Firms | Save 15+ Hours Weekly | Risk-Free Setup</title>
        <meta 
          name="title"
          content="Clio Lead Automation for Plaintiff Firms | Save 15+ Hours Weekly"
        />
        <meta 
          name="description" 
          content="Automate lead intake for plaintiff law firms. Connect any form to Clio CRM instantly. Zero lead leakage, 100% error-free data migration. Custom-tailored setup with premium support. Free up 15+ hours weekly. Works with Tally, Typeform, Google Forms & more." 
        />
        <meta 
          name="keywords" 
          content="Clio automation, plaintiff firm software, law firm lead automation, Clio CRM integration, legal intake automation, plaintiff case management, automated client intake, law firm CRM, legal workflow automation, case intake software, lead capture automation, Tally Clio integration, plaintiff attorney software, law firm efficiency tools, legal tech automation" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.website} />
        <meta property="og:title" content="Clio Lead Automation for Plaintiff Firms | Save 15+ Hours Weekly" />
        <meta property="og:description" content="Automate lead intake for plaintiff law firms. Connect any form to Clio CRM. Zero lead leakage, 100% error-free. Save 15+ hours weekly with custom-tailored automation." />
        <meta property="og:image" content={`${siteConfig.website}/og-image.jpg`} />
        <meta property="og:site_name" content={siteConfig.companyName} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteConfig.website} />
        <meta property="twitter:title" content="Clio Lead Automation for Plaintiff Firms | Save 15+ Hours Weekly" />
        <meta property="twitter:description" content="Automate lead intake for plaintiff law firms. Connect any form to Clio CRM. Zero lead leakage, 100% error-free. Save 15+ hours weekly." />
        <meta property="twitter:image" content={`${siteConfig.website}/twitter-image.jpg`} />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content={siteConfig.companyName} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteConfig.website} />
        
        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Tally-Clio Lead Automation",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "priceValidUntil": "2026-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "ratingCount": "50"
            },
            "description": "Plug-and-play lead automation for plaintiff law firms. Automate intake from any form to Clio CRM with zero lead leakage.",
            "featureList": [
              "Works with any form platform",
              "Clio CRM integration",
              "Zero lead leakage",
              "Error-free data migration",
              "15+ hours saved weekly",
              "Premium support included"
            ]
          })}
        </script>
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": siteConfig.companyName,
            "url": siteConfig.website,
            "logo": `${siteConfig.website}/logo.png`,
            "description": "Lead automation software for plaintiff law firms",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "email": siteConfig.companyEmail
            }
          })}
        </script>
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
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                Plug-and-Play{' '}
                <span className="gradient-text">Lead Automation</span>
                <br />
                For Plaintiff Firms
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto">
                Turn any form into Clio leads automatically. No manual data entry, no lead leakage, no stress. 
                Free up 15+ hours weekly and focus on winning cases.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    setConversionSource('hero-cta')
                    setShowConsultationModal(true)
                  }}
                  className="group bg-gradient-to-r from-primary-500 to-primary-400 text-black px-10 py-5 rounded-xl font-bold text-lg flex items-center space-x-2 glow-green-strong hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="bg-dark-card text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-primary-500/30 hover:border-primary-500 hover:glow-green transition-all"
                >
                  See How It Works
                </button>
              </div>

              <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-300">Works with any form platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-300">Custom-tailored to your process</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  <span className="text-gray-300">Risk-free with premium support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-dark-card border-y border-primary-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              YOUR FIRM GETS:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-extrabold gradient-text mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Built for Small to Medium Plaintiff Firms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Stop losing money to manual processes, lead leakage, and high payroll costs. Automate everything and focus on what matters.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 rounded-2xl hover:shadow-xl hover:glow-green hover:border-primary-500/30 transition-all transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-black mb-6 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-dark-card border-y border-primary-900/20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How It Works - Risk-Free & Custom-Tailored
              </h2>
              <p className="text-xl text-gray-300">
                We show you step-by-step how everything works. No surprises, just results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Connect Your Form(s)",
                  description: "Link your injury intake forms with one click. No coding required.",
                  icon: <FileText className="w-12 h-12" />
                },
                {
                  step: "02",
                  title: "Sync with Clio CRM",
                  description: "Authorize Clio integration and map your custom fields automatically.",
                  icon: <Users className="w-12 h-12" />
                },
                {
                  step: "03",
                  title: "Watch Leads Flow",
                  description: "AI processes each submission, scores cases, and creates Clio contacts instantly.",
                  icon: <BarChart3 className="w-12 h-12" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="glass-effect p-8 rounded-2xl">
                    <div className="text-6xl font-bold text-primary-500 mb-4">
                      {item.step}
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-black mb-6 shadow-lg">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-primary-600" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Stop Bleeding Money on Manual Processes
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Lead leakage, data entry errors, missed follow-ups, high payroll costs. These aren't just problems - they're money walking out the door. We fix this.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl glow-green-strong"
              >
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-8 rounded-xl text-black shadow-2xl">
                  <h3 className="text-3xl font-bold mb-4">Ready to Build Your Money-Making Machine?</h3>
                  <p className="text-lg mb-6 text-gray-900">
                    Small to medium plaintiff firms are eliminating bottlenecks, cutting payroll costs, and closing more cases faster.
                  </p>
                  <button
                    onClick={() => {
                      setConversionSource('bottom-cta')
                      setShowConsultationModal(true)
                    }}
                    className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-900 hover:shadow-xl transform hover:-translate-y-1 transition-all"
                  >
                    <span>Book a Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-sm mt-4 text-gray-900 font-medium">
                    Custom-tailored • Premium support • Risk-free consultation
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-black via-primary-950 to-black text-white px-4 sm:px-6 lg:px-8 border-t border-primary-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                This Is The Automation Era - Stop Hiring, Start Automating
              </h2>
              <p className="text-xl mb-10 text-gray-300">
                Lead intake is eating away your margins. Don't hire more people for repetitive manual work. 
                Invest in automation that makes you money, not costs you money.
              </p>
              <Link
                to="/product"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-400 text-black px-10 py-5 rounded-xl font-bold text-lg glow-green-strong hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all"
              >
                <span>Get Your Custom Solution</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />

        {/* Video Modal */}
        {isVideoOpen && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/ijISXWsyFyw?autoplay=1"
                title="How It Works"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        )}

        {/* Consultation Modal */}
        <ConsultationModal 
          isOpen={showConsultationModal} 
          onClose={() => setShowConsultationModal(false)}
          conversionSource={conversionSource}
        />
      </div>
    </>
  )
}
