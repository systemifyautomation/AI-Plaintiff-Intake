import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  FileText, 
  BookOpen, 
  Code, 
  Settings, 
  Zap, 
  Shield,
  Database,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConsultationModal from '../components/ConsultationModal'
import siteConfig from '../config/siteConfig'

export default function DocumentationPage() {
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [conversionSource, setConversionSource] = useState('unknown')
  const documentationSections = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Getting Started",
      description: "Learn how our consultation process works and what to expect",
      topics: [
        "Initial discovery call process",
        "Requirements gathering",
        "Timeline and milestones",
        "What information to prepare"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom Integration",
      description: "Understanding how we build your tailored automation",
      topics: [
        "Form platform compatibility",
        "Clio CRM integration methods",
        "Custom field mapping",
        "Workflow automation design"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "How your data is handled, stored, and protected",
      topics: [
        "Data security and encryption",
        "HIPAA compliance considerations",
        "Backup and recovery procedures",
        "Data retention policies"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Features & Capabilities",
      description: "Explore what's possible with custom automation",
      topics: [
        "Real-time lead sync capabilities",
        "Intelligent lead scoring options",
        "Multi-channel notifications",
        "Analytics and reporting"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Specifications",
      description: "Technical details for IT teams and administrators",
      topics: [
        "API integration methods",
        "Authentication and security",
        "System requirements",
        "Third-party integrations"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Our commitment to data protection and legal compliance",
      topics: [
        "SOC 2 compliance framework",
        "GDPR and CCPA compliance",
        "Security best practices",
        "Audit logs and monitoring"
      ]
    }
  ]

  const faqs = [
    {
      question: "How long does the custom development process take?",
      answer: "Timeline varies based on complexity, but most custom solutions are completed within 2-4 weeks from the initial consultation to launch. We provide detailed timelines during the discovery phase."
    },
    {
      question: "Can you integrate with CRMs other than Clio?",
      answer: "Yes! While we specialize in Clio, we can build custom integrations for any CRM system your firm uses, including Salesforce, HubSpot, or proprietary systems."
    },
    {
      question: "What form platforms do you support?",
      answer: "We work with any form platform including Tally, Typeform, Google Forms, Jotform, Wufoo, and custom-built forms. The integration is tailored to your specific setup."
    },
    {
      question: "What kind of support do you provide after launch?",
      answer: "Premium support is included with all custom solutions. This includes regular check-ins, troubleshooting, updates, and adjustments as your needs evolve."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We implement bank-level 256-bit AES encryption, HIPAA-compliant storage, and follow SOC 2 security standards. Your data security is our top priority."
    },
    {
      question: "Can I request changes after the solution is deployed?",
      answer: "Yes! We build flexibility into all our solutions and provide ongoing support for adjustments, enhancements, and new feature requests as your firm's needs change."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Documentation | {siteConfig.companyName}</title>
        <meta 
          name="description" 
          content={`Comprehensive documentation for ${siteConfig.companyName}. Learn about our custom automation process, integration methods, security, and best practices.`}
        />
        <meta 
          name="keywords" 
          content="Clio automation documentation, custom integration guide, plaintiff firm automation, CRM integration setup, legal automation docs, intake automation guide" 
        />
        <link rel="canonical" href={`${siteConfig.website}/documentation`} />
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
                Documentation & <span className="gradient-text">Resources</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Everything you need to know about our custom automation solutions for plaintiff firms
              </p>
            </motion.div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 rounded-2xl hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-400 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {section.description}
                  </p>
                  <ul className="space-y-2">
                    {section.topics.map((topic, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-dark-card px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400">
                Common questions about our custom automation solutions
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-xl"
                >
                  <h3 className="text-xl font-bold text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Book a free consultation to discuss your firm's specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={siteConfig.calendlyUrl}
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center justify-center space-x-2 bg-dark-card text-white px-8 py-4 rounded-lg font-semibold text-lg border border-gray-800 hover:border-primary-500 transition-all"
                >
                  <span>Contact Support</span>
                </a>
              </div>
            </motion.div>
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
