import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { X } from 'lucide-react'
import { InlineWidget } from 'react-calendly'

export default function ConsultationModal({ isOpen, onClose, conversionSource = 'unknown' }) {
  useEffect(() => {
    // Track when modal opens
    if (isOpen) {
      console.log('Consultation modal opened from:', conversionSource)
    }
  }, [isOpen, conversionSource])

  const handleClose = () => {
    onClose()
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
            className="bg-dark-card border border-gray-800 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Book Your Free Consultation</h3>
                <p className="text-gray-400">Select a time that works best for you</p>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Calendly Widget */}
            <div className="flex-1 overflow-auto rounded-lg">
              <InlineWidget
                url="https://calendly.com/austin-arbitriolegal/30min"
                styles={{
                  height: '700px',
                  minWidth: '320px'
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: '3b82f6',
                  textColor: '1f2937'
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
