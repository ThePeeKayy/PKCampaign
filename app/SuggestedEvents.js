import { CiBowlNoodles } from "react-icons/ci";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { GiMagicLamp } from "react-icons/gi";
import { PiCookingPot } from "react-icons/pi";
import { RiRedPacketLine } from "react-icons/ri";
import { RiSpeakLine } from "react-icons/ri";
import { FaMoon, FaStar } from 'react-icons/fa';



const timeline = [
  {
    id: 1,
    content: 'Maggie Festival + Welcome',
    date: 'Oct 1-4',
    icon: CiBowlNoodles,
    iconBackground: 'bg-orange-500',
  },
  {
    id: 2,
    content: 'Study Buddy Matchmaking',
    date: 'Oct 14-18',
    icon: HiOutlineAcademicCap,
    iconBackground: 'bg-blue-500',
  },
  
  {
    id: 3,
    content: 'Deepavali',
    date: 'Oct 30',
    icon: GiMagicLamp,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Bluff fiesta (e.g identifying impostor chef, lyrics, word etc)',
    date: 'Nov 11-15',
    icon: RiSpeakLine ,
    iconBackground: 'bg-purple-500',
  },
  {
    id: 5,
    content: 'Hotpot Exchange',
    date: 'Nov 26-29',
    icon: PiCookingPot,
    iconBackground: 'bg-orange-500',
  },
  
  {
    id: 6,
    content: 'Chinese New Year',
    date: 'Jan 24',
    icon: RiRedPacketLine,
    iconBackground: 'bg-red-500',
  },
  {
    id: 7,
    content: 'Hari Raya',
    date: 'Mar 31',
    icon: FaMoon,
    iconBackground: 'bg-green-200',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SuggestedEvents() {
  return (
    <div className="flex justify-evenly gap-y-10 flex-col sm:flex-row items-center gap-x-4 pb-16 px-8">
      <div>
        <h1 className="-z-20 max-w-2xl text-4xl font-bold tracking-tight text-gray-900 lg:col-span-2 xl:col-auto">
            Suggested Activities
        </h1>
        <h3 className="-z-20 mt-2 max-w-2xl text-lg tracking-tight text-gray-900 lg:col-span-2 xl:col-auto">
          I also plan to continue care bear gummy bear in liaison with Sentinel House captain to continue the spirit of gifting 
        </h3>
      </div>
      <ul role="list" className="-z-20 -mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span aria-hidden="true" className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white',
                    )}
                  >
                    <event.icon aria-hidden="true" className="h-5 w-5 text-white" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a href={event.href} className="font-medium text-gray-900">
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
