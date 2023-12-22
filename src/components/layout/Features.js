import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Diverse Topic Library.",
    description:
      "Dive into a vast array of conversation starters spanning business, technology, personal interests, and current events. Tailored to suit every occasion, our topics are designed to ignite interest and keep the conversation flowing.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Personalized Experience.",
    description:
      "Set your preferences and let Connect Cues bring you conversation starters that resonate with your interests and the context of your gathering. Networking at a tech conference? Mingling at a social event? We've got you covered.",
    icon: LockClosedIcon,
  },
  {
    name: "AI-Powered Suggestions.",
    description:
      "Harness the power of AI to bring real-time relevance to your chats. Our intelligent system suggests topics and questions based on the flow of your conversation, ensuring you're always a step ahead.",
    icon: ArrowPathIcon,
  },
  {
    name: "Interactive Ice-Breakers.",
    description:
      "Break the initial barriers with fun, engaging games and activities. Perfect for group settings, these ice-breakers are sure to set a relaxed and interactive tone.",
    icon: FingerPrintIcon,
  },
  {
    name: "Grow with Feedback.",
    description:
      "Reflect on your interactions and grow your conversational skills. Rate topics, receive personalized tips, and evolve into a networking pro!",
    icon: Cog6ToothIcon,
  },
  {
    name: "Community Driven.",
    description:
      "Join a community of like-minded individuals. Share experiences, exchange topics, and collectively enhance your conversational prowess.",
    icon: ServerIcon,
  },
];

export default function Features() {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-base font-semibold leading-7 text-indigo-600'>
            Everything you need
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Why Choose Connect Cues?
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Helping you to build a better future one conversation at a time.
          </p>
        </div>
      </div>
      <div className='relative overflow-hidden pt-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <img
            src='https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt='App screenshot'
            className='mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 opacity-50'
            width={2432}
            height={1442}
          />
          <div className='relative' aria-hidden='true'>
            <div className='absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]' />
          </div>
        </div>
      </div>
      <div className='mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8'>
        <dl className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16'>
          {features.map((feature) => (
            <div key={feature.name} className='relative pl-9'>
              <dt className='inline font-semibold text-gray-900'>
                <feature.icon
                  className='absolute left-1 top-1 h-5 w-5 text-indigo-600'
                  aria-hidden='true'
                />
                {feature.name}
              </dt>{" "}
              <dd className='inline font-light'>{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
