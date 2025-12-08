import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, ChevronRight, CheckCircle2, Phone } from 'lucide-react'
import qualifyingQuestions from '../config/qualifyingQuestions'

export default function ConsultationModal({ isOpen, onClose, conversionSource = 'unknown' }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [formData, setFormData] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNextQuestion = () => {
    if (currentQuestion < qualifyingQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleInputChange = (value) => {
    setFormData({
      ...formData,
      [qualifyingQuestions[currentQuestion].id]: value
    })
  }

  const handleSubmitConsultation = async () => {
    setIsSubmitting(true)
    
    try {
      // Format the data for the webhook
      const webhookData = {
        conversionSource,
        timestamp: new Date().toISOString(),
        responses: qualifyingQuestions.map(q => ({
          question: q.question,
          answer: formData[q.id] || ''
        }))
      }

      // Send to webhook
      const response = await fetch('https://n8n.srv1186343.hstgr.cloud/webhook/new-lead-for-AI-plaintiff-intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Success
      onClose()
      setCurrentQuestion(0)
      setFormData({})
      alert('Thank you! We\'ll contact you within 24 hours to schedule your consultation.')
    } catch (error) {
      console.error('Error submitting consultation:', error)
      alert('There was an error submitting your request. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isCurrentQuestionAnswered = () => {
    const currentQuestionData = qualifyingQuestions[currentQuestion]
    const answer = formData[currentQuestionData.id]
    return answer && answer.toString().trim() !== ''
  }

  const handleClose = () => {
    onClose()
    setCurrentQuestion(0)
    setFormData({})
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-dark-card border border-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Book Your Free Consultation</h3>
                <p className="text-gray-400">Question {currentQuestion + 1} of {qualifyingQuestions.length}</p>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 rounded-full h-2 mb-8">
              <div 
                className="bg-gradient-to-r from-primary-600 to-primary-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / qualifyingQuestions.length) * 100}%` }}
              ></div>
            </div>

            {/* Current Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <label className="block text-xl font-semibold text-white mb-4">
                  {qualifyingQuestions[currentQuestion].question}
                  {qualifyingQuestions[currentQuestion].required && <span className="text-primary-500 ml-1">*</span>}
                </label>

                {qualifyingQuestions[currentQuestion].type === 'select' ? (
                  <select
                    value={formData[qualifyingQuestions[currentQuestion].id] || ''}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-800 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                  >
                    {qualifyingQuestions[currentQuestion].options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : qualifyingQuestions[currentQuestion].type === 'textarea' ? (
                  <textarea
                    value={formData[qualifyingQuestions[currentQuestion].id] || ''}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={qualifyingQuestions[currentQuestion].placeholder}
                    rows="4"
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-800 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  />
                ) : (
                  <input
                    type={qualifyingQuestions[currentQuestion].type}
                    value={formData[qualifyingQuestions[currentQuestion].id] || ''}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={qualifyingQuestions[currentQuestion].placeholder}
                    className="w-full px-4 py-3 bg-dark-bg border border-gray-800 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0}
                className="px-6 py-3 text-gray-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>

              {currentQuestion === qualifyingQuestions.length - 1 ? (
                <button
                  onClick={handleSubmitConsultation}
                  disabled={!isCurrentQuestionAnswered() || isSubmitting}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                  <CheckCircle2 className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  disabled={!isCurrentQuestionAnswered()}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
