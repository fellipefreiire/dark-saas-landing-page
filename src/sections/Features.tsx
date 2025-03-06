import { Feature } from '@/components/Feature'

const features = [
  {
    id: 1,
    title: 'Integration Ecosystem',
    description:
      'Enhance your productivity by connecting with your tools, keeping your essentials in one place.',
  },
  {
    id: 2,
    title: 'Goal Setting and Tracking',
    description:
      'Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight',
  },
  {
    id: 3,
    title: 'Secure Data Encryption',
    description:
      'With end-to-end encryption, your data is securely stored and protected from unauthorized access.',
  },
]

export function Features() {
  return (
    <div className="bg-black text-white py-[72px] md:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl md:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-4 md:flex-row">
          {features.map(({ id, title, description }) => (
            <Feature key={id} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  )
}
