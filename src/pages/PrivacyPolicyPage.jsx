import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ConsultationModal from '../components/ConsultationModal'
import siteConfig from '../config/siteConfig'

export default function PrivacyPolicyPage() {
  const [showConsultationModal, setShowConsultationModal] = useState(false)
  const [conversionSource, setConversionSource] = useState('unknown')
  
  return (
    <>
      <Helmet>
        <title>Privacy Policy | {siteConfig.companyName}</title>
        <meta 
          name="description" 
          content={`Privacy Policy for ${siteConfig.companyName}. Learn how we collect, use, and protect your personal information.`}
        />
        <link rel="canonical" href={`${siteConfig.website}/privacy-policy`} />
      </Helmet>

      <div className="min-h-screen bg-dark-bg bg-dark-gradient">
        <Navbar onBookConsultation={(source) => {
          setConversionSource(source)
          setShowConsultationModal(true)
        }} />

        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
              <p className="text-gray-400 mb-8">
                Last Updated: December 6, 2025
              </p>

              <div className="space-y-8 text-gray-300">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                  <p className="mb-4">
                    {siteConfig.companyLegalName} ("{siteConfig.companyName}", "we", "us", or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our custom automation services for plaintiff law firms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-white mb-3">2.1 Information You Provide</h3>
                  <p className="mb-4">We may collect the following information that you provide directly:</p>
                  <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                    <li>Name, email address, phone number, and company information</li>
                    <li>Consultation requests and communications with us</li>
                    <li>Technical information about your CRM and workflow requirements</li>
                    <li>Payment and billing information</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">2.2 Automatically Collected Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Device and browser information</li>
                    <li>IP address and location data</li>
                    <li>Usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                  <p className="mb-4">We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our custom automation services</li>
                    <li>Process consultation requests and communicate with you</li>
                    <li>Develop tailored solutions for your firm's needs</li>
                    <li>Send administrative information, updates, and security alerts</li>
                    <li>Analyze usage patterns and optimize our services</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="mb-4">We do not sell your personal information. We may share your information in the following circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., hosting, analytics, payment processing)</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                  <p className="mb-4">
                    We implement industry-standard security measures to protect your information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>256-bit AES encryption for data in transit and at rest</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Employee training on data protection best practices</li>
                  </ul>
                  <p className="mt-4">
                    However, no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
                  <p className="mb-4">Depending on your location, you may have the following rights:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Opt-Out:</strong> Opt out of marketing communications</li>
                    <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at {siteConfig.supportEmail}.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Cookies and Tracking Technologies</h2>
                  <p className="mb-4">
                    We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can control cookies through your browser settings, but disabling them may affect functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
                  <p>
                    Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">11. International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
                  <p className="mb-4">
                    If you have questions or concerns about this Privacy Policy, please contact us:
                  </p>
                  <div className="bg-dark-card p-6 rounded-lg border border-gray-800">
                    <p className="mb-2"><strong>Email:</strong> {siteConfig.supportEmail}</p>
                    <p className="mb-2"><strong>Phone:</strong> {siteConfig.phone}</p>
                    <p>
                      <strong>Address:</strong><br />
                      {siteConfig.companyLegalName}<br />
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}<br />
                      {siteConfig.address.country}
                    </p>
                  </div>
                </section>
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
