import { useEffect, useId, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import andrewGreeneImage from '../images/dianne-guilianelli.jpg'
import cathleneBurrageImage from '../images/dianne-guilianelli.jpg'
import damarisKimuraImage from '../images/dianne-guilianelli.jpg'
import dianneGuilianelliImage from '../images/dianne-guilianelli.jpg'
import erhartCockrinImage from '../images/dianne-guilianelli.jpg'
import giordanoSagucioImage from '../images/dianne-guilianelli.jpg'
import gordonSandersonImage from '../images/dianne-guilianelli.jpg'
import heatherTerryImage from '../images/dianne-guilianelli.jpg'
import ibrahimFraschImage from '../images/dianne-guilianelli.jpg'
import jaquelinIschImage from '../images/dianne-guilianelli.jpg'
import kimberlyParsonsImage from '../images/dianne-guilianelli.jpg'
import parkerJohnsonImage from '../images/dianne-guilianelli.jpg'
import piersWilkinsImage from '../images/dianne-guilianelli.jpg'
import richardAstley from '../images/dianne-guilianelli.jpg'
import rinaldoBeynonImage from '../images/dianne-guilianelli.jpg'
import ronniCantadoreImage from '../images/dianne-guilianelli.jpg'
import stevenMchailImage from '../images/dianne-guilianelli.jpg'
import waylonHydenImage from '../images/dianne-guilianelli.jpg'
// The following components were likely defined elsewhere in the original project.
// I've created basic versions of them here to resolve the import errors.

const Container = ({ children, ...props }) => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" {...props}>
    {children}
  </div>
)

const DiamondIcon = (props) => (
  <svg aria-hidden="true" viewBox="0 0 6 6" {...props}>
    <path
      d="M3 0L6 3L3 6L0 3L3 0Z"
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </svg>
)

const days = [
  {
    name: 'Opening Day',
    date: 'April 4',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Steven McHail',
        role: 'Designer at Globex Corporation',
        image: stevenMchailImage,
      },
      {
        name: 'Jaquelin Isch',
        role: 'UX Design at InGen',
        image: jaquelinIschImage,
      },
      {
        name: 'Dianne Guilianelli',
        role: 'General Manager at Initech',
        image: dianneGuilianelliImage,
      },
      {
        name: 'Ronni Cantadore',
        role: 'Design Engineer at Weyland-Yutani',
        image: ronniCantadoreImage,
      },
      {
        name: 'Erhart Cockrin',
        role: 'Product Lead at Cyberdyne Systems',
        image: erhartCockrinImage,
      },
      {
        name: 'Parker Johnson',
        role: 'UI Designer at MomCorp',
        image: parkerJohnsonImage,
      },
    ],
  },
  {
    name: 'Speakers & Workshops',
    date: 'April 5',
    dateTime: '2022-04-05',
    speakers: [
      {
        name: 'Damaris Kimura',
        role: 'Senior Engineer at OCP',
        image: damarisKimuraImage,
      },
      {
        name: 'Ibrahim Frasch',
        role: 'Programmer at Umbrella Corp',
        image: ibrahimFraschImage,
      },
      {
        name: 'Cathlene Burrage',
        role: 'Frontend Developer at Buy n Large',
        image: cathleneBurrageImage,
      },
      {
        name: 'Rinaldo Beynon',
        role: 'Data Scientist at Rekall',
        image: rinaldoBeynonImage,
      },
      {
        name: 'Waylon Hyden',
        role: 'DevOps at RDA Corporation',
        image: waylonHydenImage,
      },
      {
        name: 'Giordano Sagucio',
        role: 'Game Developer at Soylent Corp',
        image: giordanoSagucioImage,
      },
    ],
  },
  {
    name: 'Interviews',
    date: 'April 6',
    dateTime: '2022-04-06',
    speakers: [
      {
        name: 'Andrew Greene',
        role: 'Frontend Developer at Ultratech',
        image: andrewGreeneImage,
      },
      {
        name: 'Heather Terry',
        role: 'Backend Developer at Xanatos Enterprises',
        image: heatherTerryImage,
      },
      {
        name: 'Piers Wilkins',
        role: 'Full stack Developer at BiffCo',
        image: piersWilkinsImage,
      },
      {
        name: 'Gordon Sanderson',
        role: 'Mobile Developer at Cobra Industries',
        image: gordonSandersonImage,
      },
      {
        name: 'Kimberly Parsons',
        role: 'Game Developer at Tyrell Corporation',
        image: kimberlyParsonsImage,
      },
      {
        name: 'Richard Astley',
        role: 'CEO at Roll Out',
        image: richardAstley,
      },
    ],
  },
]

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="text-4xl font-bold tracking-tighter text-gray-800 dark:text-white sm:text-5xl"
          >
            Speakers
          </h2>
          <p className="mt-4 text-lg text-indigo-500 dark:text-indigo-400">
            Learn from industry experts and thought leaders.
          </p>
        </div>
        <TabGroup
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute top-2 bottom-0 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <TabList className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dayIndex === selectedIndex
                            ? 'fill-blue-600 stroke-blue-600'
                            : 'fill-transparent stroke-slate-400',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-indigo-600 dark:text-indigo-400'
                              : 'text-slate-500 dark:text-slate-400',
                          )}
                        >
                          <Tab className="data-selected:not-data-focus:outline-hidden">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-gray-800 dark:text-white"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </TabList>
          </div>
          <TabPanels className="lg:col-span-3">
            {days.map((day) => (
              <TabPanel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 data-selected:not-data-focus:outline-hidden sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-[17.5rem] transform overflow-hidden rounded-3xl">
                      <div
                        className={clsx(
                          'absolute top-0 right-4 bottom-6 left-0 rounded-3xl border transition duration-300 group-hover:scale-95 xl:right-6',
                          [
                            'border-blue-300',
                            'border-indigo-300',
                            'border-sky-300',
                          ][speakerIndex % 3],
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <img
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt={speaker.name}
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 text-xl font-bold tracking-tight text-gray-800 dark:text-white">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-gray-600 dark:text-gray-400">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  )
}
