import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Award, Users, Mic, BarChart, Lightbulb, Leaf, BrainCircuit, HeartPulse, Building, Bus, Tractor, Sparkles, Menu, X, ChevronDown } from 'lucide-react';
import heroBackground from '../images/bg.png'; // Import your local image

// Helper component for Icons
const IconWrapper = ({ children }) => (
  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
    {children}
  </div>
);

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Partners', href: '#partners' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-indigo-600 dark:text-indigo-400">
            <path fillRule="evenodd" d="M14.615 1.585a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V4.44l-4.354 4.353a.75.75 0 01-1.06-1.06l4.353-4.354H9.365a.75.75 0 010-1.5h5.25zM3.75 20.25a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zM19.5 8.635a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-4.354-4.353a.75.75 0 111.06-1.06l4.354 4.353V4.635a.75.75 0 011.5 0v4zM20.25 15a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75zM3.75 9.365a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H6.44l4.354 4.353a.75.75 0 01-1.06 1.06L5.385 9.815v2.69a.75.75 0 01-1.5 0v-5.25a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Hack Karnataka</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">{link.name}</a>
          ))}
        </nav>
        <div className="hidden md:block">
            <a href="#sponsors" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">Sponsor Us</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">{link.name}</a>
            ))}
            <a href="#sponsors" onClick={() => setIsOpen(false)} className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-all duration-300">Sponsor Us</a>
          </nav>
        </div>
      )}
    </header>
  );
};

// Countdown Timer Component
const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2025-11-08T09:00:00") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval] && timeLeft[interval] !== 0) {
            return;
        }
        timerComponents.push(
            <div key={interval} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-white">
                    {String(timeLeft[interval]).padStart(2, '0')}
                </div>
                <div className="text-sm uppercase text-indigo-200">{interval}</div>
            </div>
        );
    });

    return (
        <div className="flex justify-center space-x-4 md:space-x-8 my-8">
            {timerComponents.length ? timerComponents : <span className="text-2xl text-white font-bold">The event has started!</span>}
        </div>
    );
};


// Hero Section
const Hero = () => (
  <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden text-white">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    ></div>
    {/* This div creates a dark overlay to ensure text is readable */}
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="container relative z-10 mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-down">
        HACK KARNATAKA
      </h1>
      <p className="text-2xl md:text-3xl text-indigo-300 mb-6 font-light animate-fade-in-up">
        Heritage | Nature | Future
      </p>
      <div className="flex justify-center items-center space-x-6 mb-8 text-lg">
        <div className="flex items-center space-x-2">
          <Calendar className="text-indigo-400" />
          <span>November 8th - 9th, 2025</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="text-indigo-400" />
          <span>KLE Technological University, Hubli</span>
        </div>
      </div>
      <CountdownTimer />
      <div className="space-x-4">
        <a href="https://hackkarnataka.tech" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 inline-block">
          Register Now
        </a>
         <a href="#about" className="bg-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 inline-block">
          Learn More
        </a>
      </div>
    </div>
  </section>
);

// About Section
const About = () => (
  <section id="about" className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">What is Hack Karnataka?</h2>
        <p className="text-indigo-500 dark:text-indigo-400 mt-2 text-lg">Igniting Innovation, Problem-Solving, and Entrepreneurial Thinking</p>
      </div>
      <div className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6 text-justify">
        <p>
          Hack Karnataka is the first of its kind in-person hackathon in North Karnataka, designed to ignite innovation, problem-solving, and entrepreneurial thinking among students and startups. With unique tracks related to Nature, Culture, smart-living, and Agri-tech, we also welcome futuristic innovations built using Generative AI and Agentic solutions.
        </p>
        <p>
          By partnering with government agencies, industry leaders, startups, and educational institutions, we aim to create a vibrant ecosystem. We bring all stakeholders together to brainstorm ideas, tackle real-world problems, and empower young hackers to push the boundaries of what's possible with the latest technologies.
        </p>
      </div>
    </div>
  </section>
);

// Sponsorship Card Component
const SponsorshipCard = ({ tier, cost, features, isFeatured }) => (
    <div className={`border-2 ${isFeatured ? 'border-indigo-500' : 'border-gray-200 dark:border-gray-700'} rounded-lg p-8 flex flex-col h-full shadow-lg ${isFeatured ? 'transform scale-105 bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-800'}`}>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{tier}</h3>
        <p className="text-4xl font-extrabold my-4 text-gray-900 dark:text-white">${cost}<span className="text-base font-normal text-gray-500 dark:text-gray-400">/event</span></p>
        <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <a href="mailto:sponsors@hackkarnataka.tech" className={`w-full text-center py-3 rounded-full font-semibold transition-all duration-300 ${isFeatured ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/50 dark:text-white dark:hover:bg-indigo-900'}`}>
            Become a Sponsor
        </a>
    </div>
);

// Why Sponsor Section
const WhySponsor = () => {
    const tiers = [
        {
            tier: 'Gold',
            cost: 500,
            features: [
                'All Silver benefits',
                'Send Mentors/Judges',
                'Logo on T-shirt/Certificates',
                'Webinar/Tech Talk',
            ],
            isFeatured: false,
        },
        {
            tier: 'Title',
            cost: 1000,
            features: [
                'All Platinum benefits',
                'Inaugural/Closing Remarks',
                'Primary branding as Title Sponsor',
            ],
            isFeatured: true,
        },
        {
            tier: 'Platinum',
            cost: 750,
            features: [
                'All Gold benefits',
                'Participant Info Before Event',
                'Keynote Speaker Status',
            ],
            isFeatured: true,
        },
        {
            tier: 'Silver',
            cost: 300,
            features: ['Send Swags/Goodies', 'Brand Promotion on Social Media & Website'],
            isFeatured: false,
        }
    ];

    return (
        <section id="sponsors" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Sponsorship Packages</h2>
                    <p className="text-indigo-500 dark:text-indigo-400 mt-2 text-lg">Connect with the next generation of tech leaders.</p>
                </div>
                <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
                    {tiers.map(tier => <SponsorshipCard key={tier.tier} {...tier} />)}
                </div>
                 <div className="text-center mt-12 text-lg text-gray-600 dark:text-gray-300">
                    <p>We are open to custom packages and in-kind sponsorships. Please contact us for further details!</p>
                    <a href="mailto:sponsors@hackkarnataka.tech" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline mt-2 inline-block">
                        sponsors@hackkarnataka.tech
                    </a>
                </div>
            </div>
        </section>
    );
};


// Tracks Section
const Tracks = () => {
  const tracks = [
    { name: 'Nature & Sustainability', icon: <Leaf className="w-8 h-8 text-green-500" /> },
    { name: 'Generative AI for Good', icon: <BrainCircuit className="w-8 h-8 text-purple-500" /> },
    { name: 'HealthTech & Wellness', icon: <HeartPulse className="w-8 h-8 text-red-500" /> },
    { name: 'Culture & Tourism Tech', icon: <Building className="w-8 h-8 text-yellow-500" /> },
    { name: 'Smart Cities & Future Living', icon: <Bus className="w-8 h-8 text-blue-500" /> },
    { name: 'AgriTech & Rural Innovation', icon: <Tractor className="w-8 h-8 text-orange-500" /> },
    { name: 'Open Innovation', icon: <Sparkles className="w-8 h-8 text-pink-500" /> },
  ];

  return (
    <section id="tracks" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Hackathon Tracks</h2>
          <p className="text-indigo-500 dark:text-indigo-400 mt-2 text-lg">Innovate across diverse and impactful themes.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <IconWrapper>{track.icon}</IconWrapper>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">{track.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Highlights Section
const Highlights = () => {
    const highlights = [
        "Keynotes from Google, AWS, and Microsoft",
        "Workshops by Kaggle Grandmasters & ACM ICPC Winners",
        "30-Hour In-Person Hackathon",
        "2000+ Students from 350+ Colleges",
        "Networking & Internship Opportunities",
        "Ideation and Startup Incubation Support",
    ];

    return (
        <section id="highlights" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Event Highlights</h2>
                    <p className="text-indigo-500 dark:text-indigo-400 mt-2 text-lg">An experience packed with learning, networking, and fun.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-3 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                            <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                            <p className="text-gray-700 dark:text-gray-200">{highlight}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CheckCircle = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);


// Prizes Section
const Prizes = () => (
  <section id="prizes" className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <Award className="mx-auto text-yellow-500 w-16 h-16 mb-4" />
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Prizes & Recognition</h2>
        <p className="text-indigo-500 dark:text-indigo-400 mt-2 text-lg">Over ₹10 Lakhs in prizes to be won!</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-100 w-[80%] ml-[20%] dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center border-2 border-gray-300 dark:border-gray-700">
          <p className="text-2xl font-semibold text-gray-500 dark:text-gray-400">2nd Place</p>
          <p className="text-5xl font-bold text-gray-800 dark:text-white my-4">₹50,000</p>
          <p className="text-gray-600 dark:text-gray-300">Cash Prize</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-300 to-orange-400 p-8 rounded-lg shadow-2xl text-center text-white transform md:scale-110 border-2 border-yellow-500">
          <p className="text-2xl font-semibold">1st Place</p>
          <p className="text-6xl font-bold my-4">₹1,00,000</p>
          <p className="font-medium">Cash Prize</p>
        </div>
        <div className="bg-gray-100 w-[80%] dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center border-2 border-gray-300 dark:border-gray-700">
          <p className="text-2xl font-semibold text-gray-500 dark:text-gray-400">3rd Place</p>
          <p className="text-5xl font-bold text-gray-800 dark:text-white my-4">₹25,000</p>
          <p className="text-gray-600 dark:text-gray-300">Cash Prize</p>
        </div>
      </div>
       <div className="text-center mt-12">
            <div className="bg-indigo-100 dark:bg-indigo-900/50 inline-block p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200">Track Prizes</h3>
                <p className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mt-2">₹10,000 x 6</p>
                <p className="text-indigo-700 dark:text-indigo-300 mt-1">for each track winner!</p>
            </div>
        </div>
    </div>
  </section>
);


// Partner Card Component
const PartnerCard = ({ name, logoUrl, websiteUrl }) => (
    <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="block bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img 
            src={logoUrl} 
            alt={`${name} logo`} 
            className="h-20 mx-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x100/ffffff/333333?text=Logo+Not+Found'; }}
        />
        <p className="text-center mt-4 font-semibold text-gray-700 dark:text-gray-200">{name}</p>
    </a>
);


// Partners Section
const Partners = () => {
    const esteemedPartners = [
        { name: "Google Cloud", logoUrl: "https://placehold.co/200x100/ffffff/1a73e8?text=Google+Cloud", websiteUrl: "#" },
        { name: "KLE Technological University", logoUrl: "https://placehold.co/200x100/ffffff/d62828?text=KLE+Tech", websiteUrl: "#" },
        { name: "Karnataka Tourism", logoUrl: "https://placehold.co/200x100/ffffff/f77f00?text=Karnataka+Tourism", websiteUrl: "#" },
    ];
    
    const communityPartners = [
        { name: "Google Developer Group Hubli", logoUrl: "https://placehold.co/200x100/ffffff/4285f4?text=GDG+Hubli", websiteUrl: "#" },
        { name: "Major League Hacking", logoUrl: "https://placehold.co/200x100/000000/ffffff?text=MLH", websiteUrl: "#" },
        { name: "Developer Student Clubs", logoUrl: "https://placehold.co/200x100/ffffff/34a853?text=GDSC", websiteUrl: "#" },
    ];

    return (
        <section id="partners" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Our Supporters</h2>
                    <p className="text-indigo-500 dark:text-indigo-400 mt-2 text-lg">Proudly backed by industry and community leaders.</p>
                </div>

                <div>
                    <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Esteemed Partners</h3>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {esteemedPartners.map(partner => <PartnerCard key={partner.name} {...partner} />)}
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Community Partners</h3>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {communityPartners.map(partner => <PartnerCard key={partner.name} {...partner} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};


// FAQ Section
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">{question}</h3>
                <ChevronDown className={`w-5 h-5 text-indigo-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <p className="mt-4 text-gray-600 dark:text-gray-300">{answer}</p>}
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        { question: "Who can participate?", answer: "The hackathon is open to all university students, recent graduates, and startup enthusiasts. If you love to code and build things, you are welcome!" },
        { question: "Is this an in-person or virtual event?", answer: "Hack Karnataka is a fully in-person 30-hour hackathon held at KLE Technological University in Hubli." },
        { question: "How much does it cost to participate?", answer: "Participation is completely free for all selected hackers. This includes meals, snacks, and a place to hack for the entire duration." },
        { question: "What should I bring?", answer: "You'll need your laptop, charger, any other hardware you plan to use, and your enthusiasm! We'll provide the rest." },
        { question: "What if I don't have a team?", answer: "No problem! We'll have dedicated team formation sessions at the beginning of the event. You can also connect with other participants on our Discord server beforehand." },
        { question: "What can I build?", answer: "You can build anything you want, as long as it aligns with one of the hackathon tracks. We encourage you to be creative and innovative!" },
    ];
    return (
        <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Frequently Asked Questions</h2>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => <FaqItem key={index} question={faq.question} answer={faq.answer} />)}
                </div>
            </div>
        </section>
    );
};


// Footer
const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Hack Karnataka</h3>
          <p className="text-gray-400">Heritage | Nature | Future</p>
          <p className="text-gray-400 mt-2">November 8th-9th, 2025</p>
          <p className="text-gray-400">KLE Technological University, Hubli</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#tracks" className="text-gray-400 hover:text-white">Tracks</a></li>
            <li><a href="#sponsors" className="text-gray-400 hover:text-white">Sponsors</a></li>
            <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400">For general inquiries:</p>
          <a href="mailto:contact@hackkarnataka.tech" className="text-indigo-400 hover:text-indigo-300">contact@hackkarnataka.tech</a>
           <p className="text-gray-400 mt-4">For sponsorship:</p>
          <a href="mailto:sponsors@hackkarnataka.tech" className="text-indigo-400 hover:text-indigo-300">sponsors@hackkarnataka.tech</a>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Hack Karnataka. All rights reserved.</p>
        <p className="text-sm mt-2">Website: <a href="https://hackkarnataka.tech" className="text-indigo-400 hover:text-indigo-300">hackkarnataka.tech</a></p>
      </div>
    </div>
  </footer>
);


// Main App Component
export default function App() {
  // A simple dark mode toggle for demonstration
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode ? 'dark' : ''} bg-white dark:bg-gray-900`}>
        <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="fixed bottom-5 right-5 bg-gray-800 dark:bg-gray-100 text-white dark:text-black p-3 rounded-full z-50 shadow-lg"
            aria-label="Toggle Dark Mode"
        >
            {isDarkMode ? '☀️' : '🌙'}
        </button>
      <Header />
      <main>
        <Hero />
        <About />
        <WhySponsor />
        <Tracks />
        <Highlights />
        <Prizes />
        <Partners />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
