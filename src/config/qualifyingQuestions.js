// Qualifying questions for consultation booking
// These questions appear one by one in the consultation modal
// Update this array to modify the questions shown to potential clients

export const qualifyingQuestions = [
  {
    id: 1,
    question: "What is your law firm's name?",
    type: "text",
    placeholder: "Enter your firm name",
    required: true
  },
  {
    id: 2,
    question: "What's your name?",
    type: "text",
    placeholder: "Enter your name",
    required: true
  },
  {
    id: 3,
    question: "What's your email address?",
    type: "email",
    placeholder: "Enter your email",
    required: true
  },
  {
    id: 4,
    question: "What's your phone number?",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true
  },
  {
    id: 5,
    question: "How many cases do you handle per month?",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select range" },
      { value: "1-10", label: "1-10 cases" },
      { value: "11-25", label: "11-25 cases" },
      { value: "26-50", label: "26-50 cases" },
      { value: "51-100", label: "51-100 cases" },
      { value: "100+", label: "100+ cases" }
    ]
  },
  {
    id: 6,
    question: "What forms platform are you currently using?",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select platform" },
      { value: "tally", label: "Tally" },
      { value: "typeform", label: "Typeform" },
      { value: "google-forms", label: "Google Forms" },
      { value: "jotform", label: "Jotform" },
      { value: "wufoo", label: "Wufoo" },
      { value: "custom", label: "Custom forms" },
      { value: "other", label: "Other" }
    ]
  },
  {
    id: 7,
    question: "Are you currently using Clio as your CRM?",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select answer" },
      { value: "yes-clio", label: "Yes, using Clio" },
      { value: "other-crm", label: "No, using different CRM" },
      { value: "no-crm", label: "No CRM currently" }
    ]
  },
  {
    id: 8,
    question: "How many hours per week does your team spend on manual data entry?",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select range" },
      { value: "1-5", label: "1-5 hours" },
      { value: "6-10", label: "6-10 hours" },
      { value: "11-20", label: "11-20 hours" },
      { value: "21-30", label: "21-30 hours" },
      { value: "30+", label: "30+ hours" }
    ]
  },
  {
    id: 9,
    question: "What's your biggest challenge with lead intake?",
    type: "textarea",
    placeholder: "Tell us about your main pain points...",
    required: true
  },
  {
    id: 10,
    question: "When would you like to implement automation?",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select timeframe" },
      { value: "immediately", label: "Immediately / ASAP" },
      { value: "1-month", label: "Within 1 month" },
      { value: "2-3-months", label: "2-3 months" },
      { value: "3-6-months", label: "3-6 months" },
      { value: "exploring", label: "Just exploring options" }
    ]
  }
]

export default qualifyingQuestions
