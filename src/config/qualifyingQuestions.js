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
  }
]

export default qualifyingQuestions
