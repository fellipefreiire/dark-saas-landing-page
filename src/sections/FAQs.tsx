import { AccordionItem } from '@/components/AccordionItem'

const items = [
  {
    id: 1,
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and various other methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.',
  },
  {
    id: 2,
    question: 'How does the pricing work for teams?',
    answer:
      'Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.',
  },
  {
    id: 3,
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.',
  },
  {
    id: 4,
    question: 'Is my data secure?',
    answer:
      'Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.',
  },
]

export function FAQs() {
  return (
    <div className="text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] md:py-24">
      <div className="container">
        <h2 className="text-center text-5xl md:text-6xl md:max-w-[648px] mx-auto font-bold tracking-tighter">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ id, question, answer }) => (
            <AccordionItem key={id} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  )
}
