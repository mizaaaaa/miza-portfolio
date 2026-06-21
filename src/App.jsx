
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import resumePdf from "./assets/resume/Miza_M_Resume.pdf";
import studentModule from "./assets/projects/studentmodule.png";
import adminPortal from "./assets/projects/adminportal.png";
import counsellingSupport from "./assets/projects/counsellingsupport.png";
import campusHeatmap from "./assets/projects/campusheatmap.png";
import carbonsignlogin from "./assets/projects/carbonsignlogin.png";
import carbondashboard from "./assets/projects/carbondashboard.png";
import carbonreport from "./assets/projects/carbonreport.png";
import carboncommunity from "./assets/projects/carboncommunity.png";
import carbonchallenges from "./assets/projects/carbonchallenges.png";
import archealogical1 from "./assets/projects/archaeological1.png";
import archealogical2 from "./assets/projects/archaeological2.png";
import profilePhoto from "./assets/profilePhoto.jpg";
import safespaceMain from "./assets/projects/safespacemain.png";
import carbonMain from "./assets/projects/carbonmain.png";
import archaeologyMain from "./assets/projects/archaeologymain.png";
import earlymindMain from "./assets/projects/earlymindmain.png";
import earlymindwelcome from "./assets/projects/earlymindwelcome.png";
import earlymindmcq from "./assets/projects/earlymindmcq.png";
import earlymindvideo from "./assets/projects/earlymindvideo.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-fade";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSafeSpace, setShowSafeSpace] = useState(false);
const [showCarbon, setShowCarbon] = useState(false);
  const [showArchaeological, setShowArchaeological] = useState(false);
  const [showPragmatic, setShowPragmatic] = useState(false);
const [activeSection, setActiveSection] = useState(0);
const showcaseRef = useRef(null);
const [activeArchaeologySection, setActiveArchaeologySection] = useState(0);
const archaeologyRef = useRef(null);
const [activeEarlyMindSection, setActiveEarlyMindSection] = useState(0);
const earlyMindRef = useRef(null);
const [activeCarbonSection, setActiveCarbonSection] = useState(0);
const carbonRef = useRef(null);



const safeSpaceSlides = [
  {
    title: "Student Module",
    image: studentModule,
    features: [
      "Report incidents anonymously",
      "Attach media and supporting evidence",
      "Request counselling and track report status",
    ],
  },

  {
    title: "Administration Portal",
    image: adminPortal,
    features: [
      "Access reports categorized by NLP-based analysis",
      "Manage incident cases and counselling approvals",
      "Conduct anonymous follow-ups while maintaining confidentiality",
    ],
  },

  {
    title: "Counselling Support",
    image: counsellingSupport,
    features: [
      "Access and manage assigned counselling cases",
      "Communicate anonymously with students through secure messaging",
      "Provide confidential support throughout the resolution process",
    ],
  },

  {
    title: "Campus Heatmap Analytics",
    image: campusHeatmap,
    features: [
      "Visualize incident-prone locations across the campus",
      "Identify reporting trends and recurring safety concerns",
      "Support informed decision-making through data-driven insights",
    ],
  },
];


const archaeologicalSlides = [
  {
    title: "Image Upload Interface",
    image: archealogical1,
    features: [
      "Upload satellite and drone imagery",
      "Enable archaeological site detection",
      "Analyze terrain and landscape conditions",
      "Support environmental assessment workflows",
    ],
  },

  {
    title: "Segmentation, Detection & Terrain Assessment",
    image: archealogical2,
    features: [
  "Segment vegetation and potential ruin regions using U-Net",
  "Detect archaeological structures using YOLO object detection",
  "Perform terrain analysis for erosion risk assessment",
  "Support heritage conservation and preservation planning",
]
  },
];


const earlyMindSlides = [
  {
    title: "Welcome & Assessment Portal",
    image: earlymindwelcome,
    features: [
      "Provides a centralized platform for developmental assessments",
      "Allows parents and caregivers to begin evaluations easily",
      "Supports secure access to assessment and reporting modules",
      "Guides users through the behavioural screening process",
    ],
  },

  {
    title: "MCQ-Based Behaviour Assessment",
    image: earlymindmcq,
    features: [
      "Collects behavioural information through structured questionnaires",
      "Evaluates communication and social interaction patterns",
      "Generates assessment scores and developmental insights",
      "Provides personalized recommendations for early intervention",
    ],
  },

  {
    title: "AI Video Behaviour Analysis",
    image: earlymindvideo,
    features: [
      "Analyzes behavioural patterns using computer vision techniques",
      "Evaluates eye contact, joint attention, and social cues",
      "Identifies pragmatic behavioural characteristics in children",
      "Generates AI-powered behavioural prediction reports",
    ],
  },
];

const carbonSections = [
  {
    title: "Authentication & Onboarding",
    image: carbonsignlogin,
   

    features: [
      "User registration and secure login functionality.",
      "Personalized sustainability profile management.",
      "Easy access to carbon tracking modules and reports.",
      "Seamless onboarding experience for new users."
    ]
  },

  {
    title: "Carbon Calculation Dashboard",
    image: carbondashboard,
   
    features: [
      "Unified dashboard for Energy, Travel, and Waste calculators.",
      "Real-time carbon footprint monitoring.",
      "Quick navigation across platform modules.",
      "Environmental impact overview in a single interface."
    ]
  },

  {
    title: "Reports & AI Analytics",
    image: carbonreport,
  
    features: [
      "Emission breakdown by category.",
      "Interactive charts and visual analytics.",
      "AI-generated sustainability recommendations.",
      "Progress tracking and environmental insights."
    ]
  },

  {
    title: "Community Engagement",
    image: carboncommunity,
    
    features: [
      "Community participation and collaboration.",
      "Member rankings and leaderboards.",
      "Shared sustainability initiatives.",
      "Environmental awareness through engagement."
    ]
  },

  {
    title: "Sustainability Challenges",
    image: carbonchallenges,
    
    features: [
      "Carbon reduction challenges and missions.",
      "Points and achievement reward system.",
      "Progress tracking and milestone monitoring.",
      "Long-term sustainability engagement."
    ]
  }
];


  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

     {/* Navbar */}
<nav className="fixed top-8 left-0 w-full z-50">
  <div className="w-[94%] mx-auto ">

    <div
      className="
      flex justify-between items-center
      px-8 py-4
      rounded-full
      bg-[#12071f]/90
border border-purple-500/30
shadow-[0_0_25px_rgba(168,85,247,0.2)]
      backdrop-blur-md
      border border-purple-500/20
      shadow-[0_0_25px_rgba(168,85,247,0.15)]
      "
    >

      <h1 className="pl-14 text-3xl font-bold text-purple-400">
        <a
          href="#home"
          className="hover:text-purple-300 transition"
        >
          Miza M
        </a>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center pr-14 gap-10 text-[20px] text-gray-200">

        <li>
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>
        </li>

        <li>
          <a href="#experience" className="hover:text-purple-400 transition">
            Experience
          </a>
        </li>

        <li>
          <a href="#education" className="hover:text-purple-400 transition">
            Education
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </li>

      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

    </div>

  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden mt-3 px-4">

      <ul
        className="
        flex flex-col items-center
        gap-5
        py-4
        rounded-3xl
        bg-black/95
        backdrop-blur-md
        border border-purple-500/20
        text-white
        "
      >

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>

        <li>
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
        </li>

        <li>
          <a href="#education" onClick={() => setMenuOpen(false)}>
            Education
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>

      </ul>

    </div>
  )}

</nav>
      
        {/* Glow Effect */}
        <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>


{/* Hero Section */}
<section
  id="home"
  className="relative pt-28 lg:pt-40 pb-12 lg:pb-24 px-6 lg:px-12"
>


  {/* Background Glow */}
  <div className="absolute left-0 top-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
  <div className="absolute right-20 top-40 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

<div className="relative z-10 max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-12 items-center">    {/* Left Side */}
<div className="order-2 md:order-1 text-center md:text-left lg:pl-8">
      <p className="text-purple-400 uppercase tracking-[6px] mb-4 text-m">
        Hello, I'm
      </p>

      <h1 className="text-6xl md:text-7xl font-bold mb-3">
        Miza M
      </h1>

      <p className="text-xl text-gray-400 mb-8">
        AI & Full Stack Developer
      </p>

<p className="max-w-xl text-gray-300 text-lg leading-relaxed">
        Passionate about Full Stack Development, Mobile App Development,
        and AI-powered solutions. Experienced in building scalable
        applications, intelligent systems, and user-focused software
        that solve real-world problems.
      </p>

      <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">

        <a
          href="#projects"
         className="bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition"
        >
          View Projects
        </a>

        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold text-lg transition"
        >
          View Resume
        </a>

      </div>

    </div>

    {/* Right Side */}
    <div className="order-1 md:order-2 flex justify-center mb-10 md:mb-0">

      <div className="relative">

        {/* Glow */}
        <div className="absolute inset-0 bg-purple-500/15 blur-3xl"></div>

        {/* Organic Shape */}
        <div
 className="relative w-56 h-72 md:w-64 md:h-[340px]
  overflow-hidden
  border border-purple-500/20
  shadow-[0_0_20px_rgba(168,85,247,0.12)]
  rounded-[70px]
  transition duration-300 hover:scale-105"
>
          <img
            src={profilePhoto}
            alt="Miza M"
            className="w-full h-full object-cover object-top"
            
            
          />

        </div>

      </div>

    </div>

  </div>

</section>


          {/* About Section */}
<section
  id="about"
  className="py-16 lg:py-24 px-6 lg:px-12"
>
  <div className="max-w-7xl mx-auto"></div>
  <div className="max-w-7xl mx-auto">

    {/* Section Label */}
<div className="flex items-center gap-4 mb-8 lg:mb-16 lg:ml-8">

  <div className="w-14 h-[2px] bg-purple-400"></div>

  <p className="text-purple-400 uppercase tracking-[6px] text-sm">
    About Me
  </p>

</div>
    

<div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 items-start">
      {/* Left Side */}
      <div className="lg:pl-8">

<h2 className="text-4xl lg:text-[4.8rem] font-bold leading-[1.08]">
  Building

  <br />

  <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
    Digital
  </span>

  <br />

  <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
    Solutions
  </span>

  <br />

  That Make An

  <br />

  Impact.
</h2>
</div>

      {/* Right Side */}
<div className="lg:-ml-4">
       

          {/* Intro Statement */}
<div className="border-l-4 border-purple-400 pl-5 mb-10">

<p className="text-base text-gray-100 leading-relaxed">
  I am a B.Tech graduate in Information Technology passionate about
  building scalable digital solutions that solve real-world problems
  and create meaningful impact.
</p>

</div>

{/* Paragraph 1 */}
<p className="text-[15px] text-gray-300  mb-8">
  
  My work spans Full Stack Development, Mobile App Development,
  and AI-powered solutions, allowing me to build end-to-end
  applications that combine functionality, performance, and
  user experience.
</p>

{/* Paragraph 2 */}
<p className="text-[15px] text-gray-300 leading-7 mb-8">
  From creating responsive user interfaces to developing robust
  backend systems, I enjoy turning ideas into practical solutions
  that deliver value and solve real-world challenges.
</p>

        {/* CTA */}
        <a
          href="#contact"
className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-full text-base font-semibold" >
          Let's Connect →
        </a>

      </div>

    </div>

  </div>

</section>



{/* Skills Section */}
<section
  id="skills"
  className="py-16 lg:py-20 px-6 lg:px-12"
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="text-4xl lg:text-5xl font-bold mb-16">
      Technologies{" "}
      <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
        I Work With
      </span>
    </h2>

    {/* Top 6 Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Frontend */}
      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
        <h3 className="text-xl font-semibold text-purple-400 mb-5">
          Frontend Development
        </h3>

        <div className="flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map(
            (skill) => (
              <span
                key={skill}
                className="text-sm text-gray-300 border border-white/10 px-3 py-1 rounded-lg"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      {/* Backend */}
      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
        <h3 className="text-xl font-semibold text-purple-400 mb-5">
          Backend Development
        </h3>

        <div className="flex flex-wrap gap-2">
          {["Python", "Node.js", "Flask"].map((skill) => (
            <span
              key={skill}
              className="text-sm text-gray-300 border border-white/10 px-3 py-1 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
        <h3 className="text-xl font-semibold text-purple-400 mb-5">
          Mobile Development
        </h3>

        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-300 border border-white/10 px-3 py-1 rounded-lg">
            Flutter
          </span>
        </div>
      </div>

      {/* Programming Languages */}
      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
        <h3 className="text-xl font-semibold text-purple-400 mb-5">
          Programming Languages
        </h3>

        <div className="flex flex-wrap gap-2">
          {["Python", "Java", "C"].map((skill) => (
            <span
              key={skill}
              className="text-sm text-gray-300 border border-white/10 px-3 py-1 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Databases */}
      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
        <h3 className="text-xl font-semibold text-purple-400 mb-5">
          Databases
        </h3>

        <div className="flex flex-wrap gap-2">
          {["MySQL", "MongoDB"].map((skill) => (
            <span
              key={skill}
              className="text-sm text-gray-300 border border-white/10 px-3 py-1 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* AI & Automation */}
      <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
        <h3 className="text-xl font-semibold text-purple-400 mb-5">
          AI & Automation
        </h3>

        <div className="flex flex-wrap gap-2">
          {[
            "Prompt Engineering",
            "NLP",
            "Automation",
            "Relay",
          ].map((skill) => (
            <span
              key={skill}
              className="text-sm text-gray-300 border border-white/10 px-3 py-1 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>

    {/* Full Width Tools Card */}
    <div className="mt-6 bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">

      <h3 className="text-xl font-semibold text-purple-400 mb-5">
        Tools & Platforms
      </h3>

      <div className="flex flex-wrap gap-2">
        {[
          "Git",
          "GitHub",
          "VS Code",
          "Render",
          "Railway",
          "Google Colab",
          "Jupyter Notebook",
        ].map((skill) => (
          <span
            key={skill}
            className="text-sm text-gray-300 border border-white/10 px-3 py-1 rounded-lg"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>

  </div>
</section>

            {/* Projects Section */}
<section
  id="projects"
  className="py-16 lg:py-24 px-6 lg:px-12"
>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="mb-16">

  <h2 className="text-4xl lg:text-5xl font-bold">
    Featured <span className="text-purple-400">Projects</span>
  </h2>

</div>

          {/* Project Cards */}
<div className="grid md:grid-cols-2 gap-6 max-w-[980px] mx-auto">
  
    {/* Project 1 - SafeSpace */}
  <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">

    {/* Project Image */}
    
  <div className="h-[250px] md:h-[350px] overflow-hidden rounded-t-3xl">
  <img
    src={safespaceMain}
    alt="SafeSpace"
    className="w-full h-full object-cover"
  />
</div>

  
  

    {/* Content */}
    <div className="p-6">

      <p className="text-purple-400 uppercase tracking-[3px] text-[11px] font-medium mb-2">
        Mobile Application
      </p>

      <h3 className="text-xl font-bold mb-3">
        SafeSpace
      </h3>

      <p className="text-gray-400 text-sm leading-7 mb-5">
        What if every student had a safe way to speak up? SafeSpace enables
        anonymous reporting, counseling support, and campus-wide incident
        tracking to create a safer and more supportive campus environment.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">

<span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">     
     Flutter
        </span>

<span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">     
     NLP
        </span>

<span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">      
    Node.js
        </span>

<span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">      
    MySQL
        </span>


      </div>

      <button
        onClick={() => setShowSafeSpace(true)}
className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition inline-flex items-center gap-1"      >
        View Details →
      </button>

    </div>
  </div>

  {/* Project 2 - Carbon Footprint Tracker */}
  <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">

    {/* Project Image */}
  <div className="h-[250px] md:h-[350px] overflow-hidden rounded-t-3xl">
  <img
    src={carbonMain}
    alt="Carbon Footprint Tracker"
    className="w-full h-full object-cover"
  />
</div>

    {/* Content */}
    <div className="p-6">

      <p className="text-purple-400 uppercase tracking-[3px] text-[11px] font-medium mb-2">
        Web Application
      </p>

      <h3 className="text-xl font-bold mb-3">
        Carbon Footprint Tracker
      </h3>

      <p className="text-gray-400 text-sm leading-7 mb-5">
A full-stack web application designed to help users measure, monitor, and reduce their carbon footprint through daily emission tracking, personalized recommendations, interactive analytics, and community-driven challenges.      </p>

      <div className="flex flex-wrap gap-2 mb-6">

        <span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">
          Flask
        </span>

        <span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">
          MySQL
        </span>

<span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">
          HTML
        </span>

<span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">
CSS
</span>

        <span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">
                  JavaScript
        </span>

      </div>

      <button
        onClick={() => setShowCarbon(true)}
        className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition inline-flex items-center gap-1"
      >
        View Details →
      </button>

    </div>
  </div>


            {/* Project 3 - EARLYMIND AI */}
<div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">

  {/* Project Image */}
  <div className="h-[300px] md:h-[350px] overflow-hidden rounded-t-3xl">
  <img
    src={earlymindMain}
    alt="EARLYMIND AI"
    className="w-full h-full object-cover"
  />
</div>

  {/* Content */}
  <div className="p-6">

    <p className="text-purple-400 uppercase tracking-[3px] text-[11px] font-medium mb-2">
      web application
    </p>

    <h3 className="text-xl font-bold mb-3">
      EARLYMIND AI
    </h3>

    <p className="text-gray-400 text-sm leading-7 mb-5">

      AI-powered behavioural assessment platform that combines MCQ-based 
      evaluations completed by parents or caregivers with video analysis to identify
       pragmatic behavioural patterns in children under 10,
       enabling early detection and informed intervention decisions.
    </p>

    <div className="flex flex-wrap gap-2 mb-6">

      <span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">
        Python
      </span>

      <span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">
        OpenCV
      </span>

      <span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">
        MySQL
      </span>

      

    </div>

    <button
      onClick={() => setShowPragmatic(true)}
      className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition inline-flex items-center gap-1"
    >
      View Details →
    </button>

  </div>

</div>

           

            {/* Project 4 - Archaeological Site Mapping */}
<div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">

  {/* Project Image */}
  <div className="h-[250px] md:h-[350px] overflow-hidden rounded-t-3xl">
  <img
    src={archaeologyMain}
    alt="AI-Powered Archaeological Site Mapping"
    className="w-full h-full object-cover"
  />
</div>

  {/* Content */}
  <div className="p-6">

    <p className="text-purple-400 uppercase tracking-[3px] text-[11px] font-medium mb-2">
      web application
    </p>

    <h3 className="text-xl font-bold mb-3">
       Archaeological Site Analysis System
    </h3>

     <p className="text-gray-400 text-sm leading-7 mb-5">
  An AI-powered web application that uses satellite and drone imagery
  to detect potential archaeological sites through image segmentation,
  object detection, terrain analysis, and erosion risk assessment,
  helping researchers preserve and study cultural heritage.
</p>
    
    <div className="flex flex-wrap gap-2 mb-6">

      <span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">
        Python
      </span>

      <span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">
        AI/ML
      </span>

      <span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">
        YOLOv5
      </span>

      <span className="bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-full text-[11px]">
        U-Net
      </span>

      

    </div>

    <button
      onClick={() => setShowArchaeological(true)}
      className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition inline-flex items-center gap-1"
    >
      View Details →
    </button>

  </div>

</div>

  

</div>

</div>


      </section>


{/* Experience Section */}
<section
  id="experience"
  className="py-16 lg:py-24 px-6 lg:px-12"
>

  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold mb-12 text-center">
      Experience
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Experience 1 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold">
            AI Intern
          </h3>

          <span className="text-purple-400 text-sm">
            Aug 2025 – Sep 2025
          </span>
        </div>

        <h4 className="text-lg text-purple-300 mb-4">
          AICTE, Shell India & Edunet Foundation
        </h4>

        <ul className="text-gray-400 space-y-3 leading-relaxed">
          <li>• Completed a 4-week AI internship focused on sustainability and green technology.</li>
          <li>• Applied AI concepts to address environmental challenges.</li>
          <li>• Explored machine learning approaches for sustainable development.</li>
          <li>• Strengthened AI application development and problem-solving skills.</li>
        </ul>

      </div>

      {/* Experience 2 */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold">
            AI Intern
          </h3>

          <span className="text-purple-400 text-sm">
            Nov 2025 – Jan 2026
          </span>
        </div>

        <h4 className="text-lg text-purple-300 mb-4">
          Infosys Springboard
        </h4>

        <ul className="text-gray-400 space-y-3 leading-relaxed">
          <li>• Developed AI-powered archaeological site mapping solutions.</li>
          <li>• Implemented image segmentation and object detection models.</li>
          <li>• Built terrain analysis and erosion prediction systems.</li>
          <li>• Worked with satellite and drone imagery using machine learning techniques.</li>
        </ul>

      </div>

    </div>

  </div>

</section>


{/* Education Section */}
<section
  id="education"
  className="py-16 lg:py-24 px-6 lg:px-12"
>

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold mb-12 text-center">
      Education
    </h2>
    
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">
    

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

        <div>
          <h3 className="text-2xl font-bold mb-2">
            B.Tech in Information Technology
          </h3>

          <h4 className="text-lg text-purple-300 mb-2">
            LBS College of Engineering, Kasaragod
          </h4>

          <p className="text-gray-400">
            Kasaragod, Kerala
          </p>
        </div>

        <div>
          <span className="text-purple-400 font-medium">
            2022 – 2026
          </span>
        </div>

      </div>


    </div>

  </div>

</section>


{/* Contact Section */}
<section
  id="contact"
  className="py-16 lg:py-24 px-6 lg:px-12"
>

  <div className="max-w-5xl mx-auto text-center">

    <p className="text-purple-400 text-lg mb-3">
      Contact
    </p>

    <h2 className="text-4xl font-bold mb-6">
      Let's Connect
    </h2>

    <p className="text-gray-400 mb-3 leading-relaxed max-w-3xl mx-auto">
  Passionate about building impactful web applications and AI-powered solutions.
  Open to software engineering, full-stack development, AI/ML opportunities,
  internships, and collaborative projects.
</p>

    <p className="text-gray-500 text-sm mb-10">
      Kasaragod, Kerala, India
    </p>

    {/* Contact Cards */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Email */}
      <a
        href="mailto:mizam0605@gmail.com"
        className="bg-white/5 border border-white/10 rounded-2xl p-6
                   hover:border-purple-500 hover:-translate-y-1
                   transition-all duration-300 block"
      >
        <h3 className="text-xl font-semibold mb-3">
          Email
        </h3>

        <p className="text-gray-400 hover:text-purple-400 transition break-all">
          mizam0605@gmail.com
        </p>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/miza-m-621b20338/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/5 border border-white/10 rounded-2xl p-6
                   hover:border-purple-500 hover:-translate-y-1
                   transition-all duration-300 block"
      >
        <h3 className="text-xl font-semibold mb-3">
          LinkedIn
        </h3>

        <p className="text-gray-400 hover:text-purple-400 transition">
          View LinkedIn Profile
        </p>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/mizaaaaa"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/5 border border-white/10 rounded-2xl p-6
                   hover:border-purple-500 hover:-translate-y-1
                   transition-all duration-300 block"
      >
        <h3 className="text-xl font-semibold mb-3">
          GitHub
        </h3>

        <p className="text-gray-400 hover:text-purple-400 transition">
          View GitHub Profile
        </p>
      </a>
      {/* WhatsApp */}
<a
  href="https://wa.me/918075340456"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/5 border border-white/10 rounded-2xl p-6
             hover:border-purple-500 hover:-translate-y-1
             transition-all duration-300 block"
>
  <h3 className="text-xl font-semibold mb-3">
    WhatsApp
  </h3>

  <p className="text-gray-400 hover:text-purple-400 transition">
    Chat With Me
  </p>
</a>

    </div>

  </div>

</section>

{/* Footer */}

<footer className="border-t border-white/10 py-8 px-6 mt-12">

  <div className="max-w-6xl mx-auto text-center">

    <p className="text-gray-400">
      © 2026 Miza M. All rights reserved.
    </p>

    <p className="text-gray-500 text-sm mt-2">
      Built with React & Tailwind CSS
    </p>

  </div>

</footer>



{/* SafeSpace Modal */}
{showSafeSpace && (
  <div
    className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
    onClick={() => setShowSafeSpace(false)}
  >
    {/* Close Button */}
    <div
      className="sticky top-4 z-[99999] flex justify-end px-4"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowSafeSpace(false)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0f0f0f] border border-white/10 text-white text-xl hover:bg-[#161616] transition"
      >
        ✕
      </button>
    </div>

    <div
className="max-w-6xl mx-auto px-1 md:p-8 min-h-screen"
  onClick={(e) => e.stopPropagation()}
>
      {/* Hero Card */}

      <div className="bg-[#0f0f0f] border border-purple-500/20 rounded-3xl p-8 mb-8">

        <h2 className="text-5xl font-bold mb-3">
          SafeSpace
        </h2>

        <p className="text-gray-300 mb-6">
          Anonymous Campus Safety & Support Platform
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "Flutter",
            "Node.js",
            "MySQL",
            "NLP",
            "Machine Learning",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-purple-500/10 text-purple-300 border border-purple-500/20 px-4 py-2 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

      {/* Project Overview */}

      <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 mb-8">

        <h3 className="text-3xl font-bold mb-4">
          Project Overview
        </h3>

        <p className="text-gray-400 leading-relaxed text-lg">
          SafeSpace is a full-stack mobile application designed to improve
          campus safety by enabling students to anonymously report incidents,
          seek counselling support, and track case progress. The platform
          provides dedicated portals for students, counsellors, and
          administrators while ensuring secure communication, efficient
          case management, and data-driven safety monitoring.
        </p>

      </div>

      {/* Showcase */}

      <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8">

        <Swiper
          modules={[Autoplay, EffectFade, Mousewheel]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
          }}
          
          onSwiper={(swiper) => {
            showcaseRef.current = swiper;
          }}
          onSlideChange={(swiper) =>
            setActiveSection(swiper.realIndex)
          }
          simulateTouch={true}
          allowTouchMove={true}
          grabCursor={false}
          loop
        >
          {safeSpaceSlides.map((section) => (
            <SwiperSlide key={section.title}>

<h3 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-8">
                  {section.title}
              </h3>

              {/* Image */}

<div className="w-[110%] -ml-[7.5%] md:w-full md:ml-0 rounded-3xl overflow-hidden border border-white/10 bg-[#1a1a1a] p-0 md:p-5">
  <img
    src={section.image}
    alt={section.title}
    className="w-full h-auto object-contain max-h-[420px] sm:max-h-[480px] md:max-h-[520px]"
  />

</div>

              {/* Counter */}

              <div className="flex justify-center items-center gap-4 mt-6 mb-8">

                <button
                  onClick={() => showcaseRef.current?.slidePrev()}
                  className="w-10 h-10 rounded-full bg-[#0f0f0f] border border-white/10 hover:bg-[#1a1a1a] transition"
                >
                  ‹
                </button>

                <div className="px-4 py-2 rounded-full bg-[#0f0f0f] border border-white/10 text-sm">
                  {activeSection + 1} / {safeSpaceSlides.length}
                </div>

                <button
                  onClick={() => showcaseRef.current?.slideNext()}
                  className="w-10 h-10 rounded-full bg-[#0f0f0f] border border-white/10 hover:bg-[#1a1a1a] transition"
                >
                  ›
                </button>

              </div>

              {/* Thumbnails */}

              <div className="flex justify-center gap-3 flex-wrap mb-8">

                {safeSpaceSlides.map((thumb, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      showcaseRef.current?.slideToLoop(index)
                    }
                    className={`overflow-hidden rounded-xl border-2 transition-all ${
                      activeSection === index
                        ? "border-purple-500 shadow-lg shadow-purple-500/20"
                        : "border-white/20 opacity-80"
                    }`}
                  >
                    <img
                      src={thumb.image}
                      alt={thumb.title}
                      className="w-28 md:w-32 aspect-[4/3] object-cover"
                    />
                  </button>

                ))}

              </div>

              {/* Features */}

              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">

                <ul className="space-y-6">

                  {section.features.map((feature, index) => (

                    <li
                      key={index}
                      className="flex items-center gap-4 text-gray-300"
                    >
                      <div className="w-3 h-3 rounded-full bg-purple-400 flex-shrink-0"></div>

                      <span className="text-base">
                        {feature}
                      </span>
                    </li>

                  ))}

                </ul>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  </div>
)}




{/* Carbon Modal */}
{showCarbon && (
  <div
    className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
    onClick={() => setShowCarbon(false)}
  >
    <div
      className="sticky top-4 z-[99999] flex justify-end px-4"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowCarbon(false)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0f0f0f] border border-white/10 text-white text-xl"
      >
        ✕
      </button>
    </div>

    <div
      className="max-w-6xl mx-auto p-8 min-h-screen"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Hero Card */}
      <div className="bg-[#0f0f0f] border border-purple-500/20 rounded-3xl p-8 mb-8">

        <h2 className="text-5xl font-bold mb-3">
          Carbon Footprint Tracker
        </h2>

        <p className="text-gray-300 mb-6">
          AI-Powered Sustainability Monitoring & Carbon Reduction Platform
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "Flask",
            "Python",
            "MySQL",
            "Gemini AI",
            "Full Stack",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-purple-500/10 text-purple-300 border border-purple-500/20 px-4 py-2 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

      {/* Project Overview */}
      <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 mb-8">

        <h3 className="text-3xl font-bold mb-4">
          Project Overview
        </h3>

        <p className="text-gray-400 leading-relaxed text-lg">
          Carbon Footprint Tracker is a full-stack sustainability platform
          designed to help users measure, analyze, and reduce their
          environmental impact. The system combines carbon emission
          calculators, AI-powered recommendations, analytics dashboards,
          community engagement features, and sustainability challenges
          to encourage eco-friendly habits and responsible environmental
          decision-making.
        </p>

      </div>

      {/* Showcase */}
      <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8">

        <Swiper
          modules={[Autoplay, EffectFade, Mousewheel]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
          }}
         
          onSwiper={(swiper) => {
            carbonRef.current = swiper;
          }}
          onSlideChange={(swiper) =>
            setActiveCarbonSection(swiper.realIndex)
          }
          simulateTouch={true}
          allowTouchMove={true}
          grabCursor={false}
          loop
        >

          {carbonSections.map((section) => (
            <SwiperSlide key={section.title}>

              <h3 className="text-4xl font-bold text-center mb-8">
                {section.title}
              </h3>

              <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-[#1a1a1a] p-5">

                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full max-h-[520px] object-contain"
                />

              </div>

              {/* Counter */}
              <div className="flex justify-center items-center gap-4 mt-6 mb-8">

                <button
                  onClick={() => carbonRef.current?.slidePrev()}
                  className="w-10 h-10 rounded-full bg-[#0f0f0f] border border-white/10 hover:bg-[#1a1a1a] transition"
                >
                  ‹
                </button>

                <div className="px-4 py-2 rounded-full bg-[#0f0f0f] border border-white/10 text-sm">
                  {activeCarbonSection + 1} / {carbonSections.length}
                </div>

                <button
                  onClick={() => carbonRef.current?.slideNext()}
                  className="w-10 h-10 rounded-full bg-[#0f0f0f] border border-white/10 hover:bg-[#1a1a1a] transition"
                >
                  ›
                </button>

              </div>

              {/* Thumbnails */}
              <div className="flex justify-center gap-3 flex-wrap mb-8">

                {carbonSections.map((thumb, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      carbonRef.current?.slideToLoop(index)
                    }
                    className={`overflow-hidden rounded-xl border-2 transition-all ${
                      activeCarbonSection === index
                        ? "border-purple-500 shadow-lg shadow-purple-500/20"
                        : "border-white/20 opacity-80"
                    }`}
                  >
                    <img
                      src={thumb.image}
                      alt={thumb.title}
                      className="w-28 md:w-32 aspect-[4/3] object-cover"
                    />
                  </button>

                ))}

              </div>

              {/* Features */}
              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {section.description}
                </p>

                <ul className="space-y-6">

                  {section.features.map((feature, index) => (

                    <li
                      key={index}
                      className="flex items-center gap-4 text-gray-300"
                    >
                      <div className="w-3 h-3 rounded-full bg-purple-400 flex-shrink-0"></div>

                      <span className="text-base">
                        {feature}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </div>
  </div>
)}

{/* Archaeological Modal */}
{showArchaeological && (
  <div
    className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
    onClick={() => setShowArchaeological(false)}
  >
    <div
      className="sticky top-4 z-[99999] flex justify-end px-4"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowArchaeological(false)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0f0f0f] border border-white/10 text-white text-xl"
      >
        ✕
      </button>
    </div>

    <div
      className="max-w-6xl mx-auto p-8 min-h-screen"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Hero Card */}

      <div className="bg-[#0f0f0f] border border-purple-500/20 rounded-3xl p-8 mb-8">

        <h2 className="text-5xl font-bold mb-3">
          Archaeological Site Analysis System
        </h2>

        <p className="text-gray-300 mb-6">
          AI-Powered Archaeological Analysis Platform
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "Python",
            "AI/ML",
            "YOLOv5",
            "U-Net",
            "Computer vision",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-purple-500/10 text-purple-300 border border-purple-500/20 px-4 py-2 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

      {/* Project Overview */}

      <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 mb-8">

        <h3 className="text-3xl font-bold mb-4">
          Project Overview
        </h3>

        <p className="text-gray-400 leading-relaxed text-lg">
          AI-Powered Archaeological Site Mapping is an intelligent web
          application that utilizes satellite and drone imagery to
          identify potential archaeological sites through image
          segmentation, object detection, terrain analysis, and erosion
          risk assessment. The platform supports archaeological
          research, site monitoring, and heritage preservation through
          AI-driven geospatial analysis.
        </p>

      </div>

      {/* Showcase */}

      <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8">

        <Swiper
          modules={[Autoplay, EffectFade, Mousewheel]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
          }}
          onSwiper={(swiper) => {
            archaeologyRef.current = swiper;
          }}
          onSlideChange={(swiper) =>
            setActiveArchaeologySection(swiper.realIndex)
          }
          simulateTouch={true}
          allowTouchMove={true}
          grabCursor={false}
          loop
        >

          {archaeologicalSlides.map((section) => (
            <SwiperSlide key={section.title}>

              <h3 className="text-3xl font-bold text-center mb-6">
                {section.title}
              </h3>

              <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-[#1a1a1a] p-5">

  <img
    src={section.image}
    alt={section.title}
    className="w-full max-h-[550px] object-contain"
  />

</div>

              {/* Counter */}

              <div className="flex justify-center items-center gap-4 mt-6 mb-8">

                <button
                  onClick={() => archaeologyRef.current?.slidePrev()}
                  className="w-10 h-10 rounded-full bg-[#0f0f0f] border border-white/10"
                >
                  ‹
                </button>

                <div className="px-4 py-2 rounded-full bg-[#0f0f0f] border border-white/10 text-sm">
                  {activeArchaeologySection + 1} / {archaeologicalSlides.length}
                </div>

                <button
                  onClick={() => archaeologyRef.current?.slideNext()}
                  className="w-10 h-10 rounded-full bg-[#0f0f0f] border border-white/10"
                >
                  ›
                </button>

              </div>

              {/* Thumbnails */}

              <div className="flex justify-center gap-3 flex-wrap mb-8">

                {archaeologicalSlides.map((thumb, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      archaeologyRef.current?.slideToLoop(index)
                    }
                    className={`overflow-hidden rounded-xl border-2 transition-all ${
                      activeArchaeologySection === index
                        ? "border-purple-500 shadow-lg shadow-purple-500/20"
                        : "border-white/20 opacity-80"
                    }`}
                  >
                    <img
                      src={thumb.image}
                      alt={thumb.title}
                      className="w-28 md:w-32 aspect-[4/3] object-cover"
                    />
                  </button>

                ))}

              </div>

              {/* Features */}

              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">

                <ul className="space-y-6">

                  {section.features.map((feature, index) => (

                    <li
                      key={index}
                      className="flex items-center gap-4 text-gray-300"
                    >
                      <div className="w-3 h-3 rounded-full bg-purple-400 flex-shrink-0"></div>

                      <span className="text-base">
                        {feature}
                      </span>
                    </li>

                  ))}

                </ul>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </div>
  </div>
)}

{/* EARLYMIND AI Modal */}
{showPragmatic && (
  <div
    className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
    onClick={() => setShowPragmatic(false)}
  >
    <div
      className="sticky top-4 z-[99999] flex justify-end px-4"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowPragmatic(false)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0f0f0f] border border-white/10 text-white text-xl"
      >
        ✕
      </button>
    </div>

    <div
      className="max-w-6xl mx-auto p-8 min-h-screen"
      onClick={(e) => e.stopPropagation()}
    >

      {/* Hero Card */}
      <div className="bg-[#0f0f0f] border border-purple-500/20 rounded-3xl p-8 mb-8">

        <h2 className="text-5xl font-bold mb-3">
          EARLYMIND AI
        </h2>

        <p className="text-gray-300 mb-6">
          AI-Powered Pragmatic Behaviour Analysis Platform
        </p>

        <div className="flex flex-wrap gap-3">

          {[
            "Python",
            "Machine Learning",
            "AI",
            "OpenCV",
            "MySQL",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-purple-500/10 text-purple-300 border border-purple-500/20 px-4 py-2 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

      {/* Overview */}
      <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 mb-8">

        <h3 className="text-3xl font-bold mb-4">
          Project Overview
        </h3>

        <p className="text-gray-400 leading-relaxed text-lg">
          EARLYMIND AI is an intelligent behavioural assessment platform designed
           to support the early identification of pragmatic behavioural patterns in
            children under 10. The platform combines questionnaire-based assessments completed
             by parents and caregivers with AI-powered video analysis to evaluate communication,
              attention, eye contact, and social interaction behaviours. By generating 
              detailed behavioural insights and reports, it helps parents, educators, and healthcare
           professionals make informed decisions regarding early
            intervention and developmental support.
        </p>

      </div>

      {/* Showcase */}
      <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8">

        <Swiper
          modules={[Autoplay, EffectFade, Mousewheel]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
          }}
          onSwiper={(swiper) => {
            earlyMindRef.current = swiper;
          }}
          onSlideChange={(swiper) =>
            setActiveEarlyMindSection(swiper.realIndex)
          }
          simulateTouch={true}
          allowTouchMove={true}
          grabCursor={false}
          loop
        >

          {earlyMindSlides.map((section) => (
            <SwiperSlide key={section.title}>

              <h3 className="text-3xl font-bold text-center mb-6">
                {section.title}
              </h3>

              <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-[#1a1a1a] p-5">

                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full max-h-[550px] object-contain"
                />

              </div>
              
              {/* Counter */}
              <div className="flex justify-center items-center gap-4 mt-6 mb-8">

                <button
                  onClick={() => earlyMindRef.current?.slidePrev()}
                  className="w-10 h-10 rounded-full bg-[#0f0f0f] border border-white/10"
                >
                  ‹
                </button>

                <div className="px-4 py-2 rounded-full bg-[#0f0f0f] border border-white/10 text-sm">
                  {activeEarlyMindSection + 1} / {earlyMindSlides.length}
                </div>

                <button
                  onClick={() => earlyMindRef.current?.slideNext()}
                  className="w-10 h-10 rounded-full bg-[#0f0f0f] border border-white/10"
                >
                  ›
                </button>

              </div>

              {/* Thumbnails */}
              <div className="flex justify-center gap-3 flex-wrap mb-8">

                {earlyMindSlides.map((thumb, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      earlyMindRef.current?.slideToLoop(index)
                    }
                    className={`overflow-hidden rounded-xl border-2 transition-all ${
                      activeEarlyMindSection === index
                        ? "border-purple-500 shadow-lg shadow-purple-500/20"
                        : "border-white/20 opacity-80"
                    }`}
                  >
                    <img
                      src={thumb.image}
                      alt={thumb.title}
                      className="w-28 md:w-32 aspect-[4/3] object-cover"
                    />
                  </button>

                ))}

              </div>

              {/* Features */}
              <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">

                <ul className="space-y-6">

                  {section.features.map((feature, index) => (

                    <li
                      key={index}
                      className="flex items-center gap-4 text-gray-300"
                    >
                      <div className="w-3 h-3 rounded-full bg-purple-400 flex-shrink-0"></div>

                      <span className="text-base">
                        {feature}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </div>
  </div>
)}
    </div>
  )
}

export default App
