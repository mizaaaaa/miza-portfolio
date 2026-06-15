import { useState } from "react";
import { Menu, X } from "lucide-react";
import resumePdf from "./assets/resume/Miza_M_Resume.pdf";
import welcomeImg from "./assets/projects/welcome.png";
import reportSubmissionImg from "./assets/projects/report-submission.png";
import myReportsImg from "./assets/projects/my-reports.png";
import campusHeatmapImg from "./assets/projects/campus-heatmap.png";
import reportReviewImg from "./assets/projects/report-review.png";
import anonymousChatImg from "./assets/projects/anonymous-chat.png";
import adminDashboardImg from "./assets/projects/admin-dashboard.png";
import adminLoginImg from "./assets/projects/admin-login.png";
import counsellorLoginImg from "./assets/projects/counsellor-login.png";
import counsellorViewImg from "./assets/projects/counsellor-view.png";
import cfcwelcome from "./assets/projects/cfcwelcome.png";
import cfcdashboard from "./assets/projects/cfcdashboard.png";
import cfcenergy1 from "./assets/projects/cfcenergy1.png";
import cfctravel1 from "./assets/projects/cfctravel1.png";
import cfcwaste from "./assets/projects/cfcwaste.png";
import cfccommunity3 from "./assets/projects/cfccommunity3.png";
import cfccommunity4 from "./assets/projects/cfccommunity4.png";
import cfcchallenges1 from "./assets/projects/cfcchallenges1.png";
import cfcchallenges2 from "./assets/projects/cfcchallenges2.png";
import cfcreport2 from "./assets/projects/cfcreport2.png";
import cfcreport4 from "./assets/projects/cfcreport4.png";
import archealogical1 from "./assets/projects/archaelogical1.png";
import archealogical2 from "./assets/projects/archaelogical2.png";
import earlymindregister from "./assets/projects/earlymindregister.png";
import earlymindlogin from "./assets/projects/earlymindlogin.png";
import earlyminddashboard from "./assets/projects/earlyminddashboard.png";
import earlymindmcq from "./assets/projects/earlymindmcq.png";
import earlymindmcq1 from "./assets/projects/earlymindmcq1.png";
import earlymindvideoanalysisreport1 from "./assets/projects/earlymindvideoanalysisreport1.png";
import earlymindvideoanalysisreport2 from "./assets/projects/earlymindvideoanalysisreport2.png";
import profilePhoto from "./assets/profilePhoto.jpg";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSafeSpace, setShowSafeSpace] = useState(false);
  const [showCarbon, setShowCarbon] = useState(false);
  const [showArchaeological, setShowArchaeological] = useState(false);
  const [showPragmatic, setShowPragmatic] = useState(false);
  
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* Navbar */}
<nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

    <h1 className="text-2xl font-bold text-purple-400">
      <a
  href="#home"
  className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition"
>
  Miza M
</a>
    </h1>

    {/* Desktop Menu */}
<ul className="hidden md:flex gap-8 text-gray-300">

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
  className="md:hidden text-white text-3xl"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>

</div>

{/* Mobile Menu */}
{menuOpen && (
  <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-black/90 text-white">

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
)}
</nav>
      
        {/* Glow Effect */}
        <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>

      {/* Hero Section */}
<section
  id="home"
  className="relative py-20 md:py-28 px-6"
>

  {/* Background Glow */}
  <div className="absolute left-0 top-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
  <div className="absolute right-20 top-40 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

  <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
    {/* Left Side */}
    <div className="order-2 md:order-1 text-center md:text-left">

      <p className="text-purple-400 uppercase tracking-[6px] mb-4 text-sm">
        Hello, I'm
      </p>

      <h1 className="text-6xl md:text-7xl font-bold mb-3">
        Miza M
      </h1>

      <p className="text-xl text-gray-400 mb-8">
        AI & Full Stack Developer
      </p>

<p className="max-w-lg text-gray-300 text-lg leading-relaxed md:mx-0 mx-auto">
        Passionate about Full Stack Development, Mobile App Development,
        and AI-powered solutions. Experienced in building scalable
        applications, intelligent systems, and user-focused software
        that solve real-world problems.
      </p>

      <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">

        <a
          href="#projects"
          className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-semibold transition"
        >
          View Projects
        </a>

        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-xl font-semibold transition"
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
<section id="about" className="pt-6 pb-16 px-6">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Left Side */}
    <div>

      <p className="text-purple-400 text-lg mb-3">
        About Me
      </p>

      <h2 className="text-4xl font-bold mb-6">
        Passionate About Building Full Stack Solutions
      </h2>

      <p className="text-gray-400 leading-relaxed mb-4">
        I am a B.Tech graduate in Information Technology with a strong
        interest in Full Stack Development, software engineering, and
        scalable web applications. I enjoy building end-to-end solutions
        that combine intuitive user experiences with robust backend systems.
      </p>

      <p className="text-gray-400 leading-relaxed">
        My experience includes developing frontend interfaces, backend
        services, database-driven applications, and AI-powered solutions
        using modern technologies. I am passionate about creating impactful
        software that solves real-world problems.
      </p>

    </div>

    {/* Right Side */}
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">

      <div className="grid grid-cols-2 gap-6">

        <div>
          <h3 className="text-3xl font-bold text-purple-400">
            4+
          </h3>
          <p className="text-gray-400 mt-2">
            Major Projects
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-purple-400">
            2
          </h3>
          <p className="text-gray-400 mt-2">
            Internships
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-purple-400">
            Full Stack
          </h3>
          <p className="text-gray-400 mt-2">
            Development
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-purple-400">
            2026
          </h3>
          <p className="text-gray-400 mt-2">
            Graduate
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
            {/* Skills Section */}
      <section id="skills" className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="text-purple-400 text-lg mb-3">
              Skills
            </p>

            <h2 className="text-4xl font-bold">
              Technologies I Work With
            </h2>

          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-purple-500/10 transition">
              <h3 className="text-xl font-semibold">
                Python
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-purple-500/10 transition">
              <h3 className="text-xl font-semibold">
                Java
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-purple-500/10 transition">
              <h3 className="text-xl font-semibold">
                C
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-purple-500/10 transition">
              <h3 className="text-xl font-semibold">
                HTML & CSS
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-purple-500/10 transition">
              <h3 className="text-xl font-semibold">
                MySQL
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-purple-500/10 transition">
              <h3 className="text-xl font-semibold">
                Flask
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-purple-500/10 transition">
              <h3 className="text-xl font-semibold">
                AI/ML
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-purple-500/10 transition">
              <h3 className="text-xl font-semibold">
                React
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-purple-500/10 transition">
              <h3 className="text-xl font-semibold">
                Tailwind CSS
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-purple-500/10 transition">
              <h3 className="text-xl font-semibold">
                Git & GitHub
              </h3>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-purple-500/10 transition">
              <h3 className="text-xl font-semibold">
                Flutter
              </h3>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-purple-500/10 transition">
              <h3 className="text-xl font-semibold">
                Node.js
              </h3>
            </div>

          </div>

        </div>

      </section>

            {/* Projects Section */}
        <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">

            <p className="text-purple-400 text-lg mb-3">
              Projects
            </p>

            <h2 className="text-4xl font-bold">
              Featured Work
            </h2>

          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 gap-8">
             {/* Project 1 - SafeSpace */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">
  <h3 className="text-2xl font-bold mb-4">
    SafeSpace
  </h3>

  <p className="text-gray-400 leading-relaxed mb-6">
    Anonymous reporting and counselling platform designed to help
    students safely report incidents, request support, communicate
    with counsellors, and improve campus safety through heatmap
    analytics and real-time case management.
  </p>

  <div className="flex flex-wrap gap-3 mb-6">

    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
      Flutter
    </span>

    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
      NLP
    </span>

    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
      Node.js
    </span>

    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
      MySQL
    </span>

  </div>
  <button
    onClick={() => setShowSafeSpace(true)}
    className="text-purple-400 font-semibold hover:text-purple-300 transition inline-flex items-center gap-1"
  >
    View Details →
  </button>
  </div>

   {/* Project 2 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">

              <h3 className="text-2xl font-bold mb-4">
                Carbon Footprint Tracker
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                
                Full-stack sustainability platform that helps users monitor and reduce carbon emissions through energy, travel, and waste tracking, AI-powered insights, community engagement, and environmental analytics.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">

              

                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  HTML/CSS
                </span>

                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  MySQL
                </span>

                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  Flask
                </span>
                

              </div>
  <button
    onClick={() => setShowCarbon(true)}
    className="text-purple-400 font-semibold hover:text-purple-300 transition inline-flex items-center gap-1"
  >
    View Details →
  </button>

            </div>

            {/* Project 3 */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">
  <h3 className="text-2xl font-bold mb-4">
    Pragmatic Behaviour Analysis
  </h3>

    <p className="text-gray-400 leading-relaxed mb-6">
  AI-powered behavioural assessment platform that combines MCQ-based evaluations completed by parents or caregivers with video analysis to identify pragmatic behavioural patterns in children under 10, enabling early detection and informed intervention decisions.
</p>

  <div className="flex flex-wrap gap-3 mb-6">

    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
      AI/ML
    </span>

    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
      Python
    </span>

    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
      Computer Vision
    </span>

  </div>
  <button
  onClick={() => setShowPragmatic(true)}
  className="text-purple-400 font-semibold hover:text-purple-300 transition inline-flex items-center gap-1"
>
  View Details →
</button>

</div>

           

            {/* Project 4 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                AI-Powered Archaeological Site Mapping
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                AI-powered platform that utilizes satellite and drone imagery to identify potential archaeological sites through image segmentation, object detection, terrain analysis, and erosion risk assessment, supporting heritage preservation and archaeological research.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">

                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  Python
                </span>

                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  AI/ML
                </span>

                <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  YOLOv5
                </span>

              </div>
              
              <button
  onClick={() => setShowArchaeological(true)}
  className="text-purple-400 font-semibold hover:text-purple-300 transition inline-flex items-center gap-1"
>
  View Details →
</button>

            </div>
           

  

</div>

</div>


      </section>

{/* Experience Section */}
<section id="experience" className="py-16 px-6">

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
<section id="education" className="py-12 px-6">

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
<section id="contact" className="py-16 px-6">

  <div className="max-w-5xl mx-auto text-center">

    <p className="text-purple-400 text-lg mb-3">
      Contact
    </p>

    <h2 className="text-4xl font-bold mb-6">
      Let's Connect
    </h2>

    <p className="text-gray-400 mb-3 leading-relaxed max-w-3xl mx-auto">
      Passionate about building impactful software and AI-powered solutions.
Open to full-stack development, AI, and software engineering opportunities,
as well as collaborations on innovative projects.
    </p>

    <p className="text-gray-500 text-sm mb-10">
      Kasaragod, Kerala, India
    </p>

    {/* Contact Cards */}
    <div className="grid md:grid-cols-3 gap-6">

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
    className="fixed inset-0 bg-black z-50 overflow-y-auto backdrop-blur-sm"
    onClick={() => setShowSafeSpace(false)}
  >

    {/* Sticky Close Button */}
    <div
      className="sticky top-4 z-[99999] flex justify-end px-4"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowSafeSpace(false)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl hover:bg-white/20 transition"
      >
        ✕
      </button>
    </div>

    <div
      className="max-w-7xl mx-auto p-8 relative bg-black min-h-screen"
      onClick={(e) => e.stopPropagation()}
    >
 

      <h2 className="text-5xl font-bold mb-4">
  SafeSpace
</h2>

<div className="grid md:grid-cols-2 gap-8 mb-20">

  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
    <h3 className="text-3xl font-bold text-red-400 mb-4">
      Problem
    </h3>

    <p className="text-gray-400 leading-relaxed">
      Students often hesitate to report ragging, harassment,
      safety concerns, and mental health issues because of
      fear of exposure and lack of trusted support channels.
    </p>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
    <h3 className="text-3xl font-bold text-green-400 mb-4">
      Solution
    </h3>

    <p className="text-gray-400 leading-relaxed text">
      SafeSpace provides anonymous reporting, counselling
      support, case tracking, secure communication, and
      campus analytics to create a safer environment.
    </p>
  </div>

</div>


      {/* Student Module */}
      <div className="mb-20">

        <h3 className="text-3xl font-bold mb-4">
          Student Module
        </h3>

        <p className="text-gray-400 mb-8">
          Students can anonymously report incidents,
          track case progress, and request support.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
  <img
    src={welcomeImg}
    alt="Welcome"
    className="w-32 mx-auto rounded-xl mb-4"
  />

  <h4 className="font-semibold text-center mb-2">
    Welcome Screen
  </h4>

  <p className="text-gray-400 text-sm text-center">
    Entry point providing students access to anonymous
    reporting and counselling services.
  </p>
</div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
  <img
    src={reportSubmissionImg}
    alt="Report Submission"
    className="w-32 mx-auto rounded-xl mb-4"
  />

  <h4 className="font-semibold text-center mb-2">
    Report Submission
  </h4>

  <p className="text-gray-400 text-sm text-center">
    Submit incidents anonymously with evidence uploads
    and campus location selection.
  </p>
</div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
  <img
    src={myReportsImg}
    alt="My Reports"
    className="w-32 mx-auto rounded-xl mb-4"
  />

  <h4 className="font-semibold text-center mb-2">
    My Reports
  </h4>

  <p className="text-gray-400 text-sm text-center">
    Track report status and monitor case progress in
    real time.
  </p>
</div>
        </div>

      </div>

      {/* Admin Module */}
      <div className="mb-20">

        <h3 className="text-3xl font-bold mb-4">
          Admin Module
        </h3>

        <p className="text-gray-400 mb-8">
          Administrators review reports, manage incidents,
          and monitor campus safety.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
            <img
              src={adminLoginImg}
              alt="Admin Login"
              className="w-32 mx-auto rounded-xl mb-3"
            />
            <h4 className="font-semibold text-center">
              Admin Login
            </h4>
            <p className="text-gray-400 text-sm text-center">
  Secure authentication portal for administrators.
</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
            <img
              src={adminDashboardImg}
              alt="Admin Dashboard"
              className="w-32 mx-auto rounded-xl mb-3"
            />
            <h4 className="font-semibold text-center">
              Admin Dashboard
            </h4>
            <p className="text-gray-400 text-sm text-center">
  Centralized dashboard displaying active incidents
  and case priorities.
</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
            <img
              src={reportReviewImg}
              alt="Report Review"
              className="w-32 mx-auto rounded-xl mb-3"
            />
            <h4 className="font-semibold text-center">
              Report Review
            </h4>
            <p className="text-gray-400 text-sm text-center">
  Review reports, approve counselling requests,
  and manage incidents.
</p>
          </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
  <img
    src={campusHeatmapImg}
    alt="Campus Heatmap"
    className="w-32 mx-auto rounded-xl mb-3"
  />

  <h4 className="font-semibold text-center mb-2">
    Campus Heatmap
  </h4>

  <p className="text-gray-400 text-sm text-center">
    Visualizes incident-prone locations across campus
    to support safety planning.
  </p>
</div>

        </div>

      </div>

      {/* Counsellor Module */}
      <div className="mb-20">

        <h3 className="text-3xl font-bold mb-4">
          Counsellor Module
        </h3>

        <p className="text-gray-400 mb-8">
          Counsellors manage assigned cases and provide
          confidential support to students.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <img
              src={counsellorLoginImg}
              alt="Counsellor Login"
              className="w-32 mx-auto rounded-xl mb-4"
            />
            <h4 className="font-semibold text-center">
              Counsellor Login
            </h4>
            <p className="text-gray-400 text-sm text-center">
  Secure portal for authorized counsellors.
</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <img
              src={counsellorViewImg}
              alt="Counsellor Dashboard"
              className="w-32 mx-auto rounded-xl mb-4"
            />
            <h4 className="font-semibold text-center">
              Counsellor Dashboard
            </h4>
            <p className="text-gray-400 text-sm text-center">
  View assigned cases and provide student support.
</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <img
              src={anonymousChatImg}
              alt="Anonymous Chat"
              className="w-32 mx-auto rounded-xl mb-4"
            />
            <h4 className="font-semibold text-center">
              Anonymous Chat
            </h4>
            <p className="text-gray-400 text-sm text-center">
  Confidential two-way communication between students and
  counsellors.
</p>
          </div>

        </div>

      </div>
     
    </div>

  </div>
)}


{/* Carbon Modal */}
{showCarbon && (
  <div
    className="fixed inset-0 bg-black z-50 overflow-y-auto backdrop-blur-sm"
    onClick={() => setShowCarbon(false)}
  >

    {/* Sticky Close Button */}
    <div
      className="sticky top-4 z-[99999] flex justify-end px-4"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowCarbon(false)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl hover:bg-white/20 transition"
      >
        ✕
      </button>
    </div>

    <div
      className="max-w-7xl mx-auto p-8 relative bg-black min-h-screen"
      onClick={(e) => e.stopPropagation()}
    >

      <h2 className="text-5xl font-bold mb-4">
        Carbon Footprint Tracker
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-20">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-red-400 mb-4">
            Problem
          </h3>

          <p className="text-gray-400 leading-relaxed">
            People often struggle to understand how their daily
            activities impact the environment and lack tools to
            track and reduce carbon emissions.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-green-400 mb-4">
            Solution
          </h3>

            <p className="text-gray-400 leading-relaxed">
  Carbon Footprint Tracker helps users monitor and reduce their
  environmental impact by tracking carbon emissions from energy,
  travel, and waste activities while providing sustainability
  analytics, AI-driven insights, community engagement, and
  environmental challenges.
</p>
        </div>

      </div>

      {/* Dashboard Module */}
      <div className="mb-20">

        <h3 className="text-3xl font-bold mb-4">
          Dashboard Module
        </h3>

        <p className="text-gray-400 mb-8">
          Provides centralized access to all sustainability
          tracking features.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
           <img
  src={cfcwelcome}
  alt="Welcome"
  className="w-4/5 mx-auto rounded-xl mb-6"
/>

            <h4 className="font-semibold text-center mb-2">
              Welcome Screen
            </h4>

            <p className="text-gray-400 text-base text-center leading-relaxed px-4">
  Landing page introducing users to the Carbon Footprint Tracker platform and providing access to sustainability monitoring features.
</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
            <img
  src={cfcdashboard}
  alt="Dashboard"
  className="w-4/5 mx-auto rounded-xl mb-6"
/>

            <h4 className="font-semibold text-center mb-2">
              Main Dashboard
            </h4>

            <p className="text-gray-400 text-base text-center leading-relaxed px-4">
  Central dashboard connecting energy, travel, waste, reporting, community, and challenge modules through a unified interface.
</p>
          </div>

        </div>

      </div>
{/* Calculator Modules */}
<div className="mb-20">

  <h3 className="text-3xl font-bold mb-4">
    Carbon Calculation Modules
  </h3>

  <p className="text-gray-400 mb-8">
    The platform provides dedicated calculators for energy,
    travel, and waste activities to accurately measure
    carbon emissions.
  </p>

  <div className="grid md:grid-cols-3 gap-6">

    {/* Energy */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

      <img
        src={cfcenergy1}
        alt="Energy Calculator"
        className="w-full rounded-xl mb-4"
      />

      <h4 className="text-xl font-semibold text-center mb-3">
        Energy Calculator
      </h4>

      <p className="text-gray-400 text-sm text-center leading-relaxed">
        Calculates emissions generated from household
        appliances, lighting systems, cooling devices,
        and daily electricity consumption.
      </p>

    </div>

    {/* Travel */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

      <img
        src={cfctravel1}
        alt="Travel Calculator"
        className="w-full rounded-xl mb-4"
      />

      <h4 className="text-xl font-semibold text-center mb-3">
        Travel Calculator
      </h4>

      <p className="text-gray-400 text-sm text-center leading-relaxed">
        Measures emissions from private vehicles,
        public transportation, and daily travel
        activities to encourage sustainable mobility.
      </p>

    </div>

    {/* Waste */}
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

      <img
        src={cfcwaste}
        alt="Waste Calculator"
        className="w-full rounded-xl mb-4"
      />

      <h4 className="text-xl font-semibold text-center mb-3">
        Waste Calculator
      </h4>

      <p className="text-gray-400 text-sm text-center leading-relaxed">
        Tracks carbon emissions generated through waste
        disposal and helps users adopt responsible
        waste management practices.
      </p>

    </div>

  </div>

</div>

{/*report& analytics */}

      <div className="mt-24 mb-20">
        
      <h3 className="text-3xl font-bold mb-4">
  Reports & Analytics
</h3>

<p className="text-gray-400 mb-8">
  The reporting module provides detailed insights into users' carbon emissions through activity breakdowns, visual analytics, and personalized sustainability recommendations.
</p>

<div className="grid md:grid-cols-2 gap-6">

  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

    <img
      src={cfcreport2}
      alt="Emission Report"
      className="w-4/5 mx-auto rounded-xl mb-6"
    />

    <h4 className="text-xl font-semibold text-center mb-3">
      Emission Breakdown Report
    </h4>

    <p className="text-gray-400 text-sm text-center leading-relaxed">
      Displays detailed carbon emissions categorized by energy, travel, and waste activities, helping users identify major emission sources.
    </p>

  </div>

  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

    <img
      src={cfcreport4}
      alt="Analytics & Recommendations"
      className="w-4/5 mx-auto rounded-xl mb-6"
    />

    <h4 className="text-xl font-semibold text-center mb-3">
      Analytics & AI Recommendations
    </h4>

    <p className="text-gray-400 text-sm text-center leading-relaxed">
      Visual charts and AI-powered recommendations provide actionable insights to reduce carbon emissions and improve sustainability practices.
    </p>

  </div>

</div>

  </div>

{/* Community Engagement & Sustainability Challenges */}
<div className="mb-20">


  <h3 className="text-3xl font-bold mb-4">
  Community Engagement & Sustainability Challenges
</h3>

<p className="text-gray-400 mb-8">
  The platform encourages environmental awareness through community
  participation, sustainability initiatives, leaderboards, and carbon
  reduction challenges that motivate users to adopt eco-friendly habits.
</p>

{/* Community Module */}
<div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">

  <div className="grid md:grid-cols-2 gap-4 mb-6">

    <img
      src={cfccommunity3}
      alt="Community Hub"
      className="rounded-xl"
    />

    <img
      src={cfccommunity4}
      alt="Community Rankings"
      className="rounded-xl"
    />

  </div>

  <h4 className="text-xl font-semibold text-center mb-3">
    Community Participation & Leaderboards
  </h4>

  <p className="text-gray-400 text-sm text-center leading-relaxed max-w-4xl mx-auto">
    The community module enables users to participate in sustainability
    initiatives, collaborate with other members, track community
    statistics, and view leaderboards that encourage environmentally
    responsible behavior through healthy competition.
  </p>

</div>

{/* Challenges Module */}
<div className="bg-white/5 border border-white/10 rounded-2xl p-5">

  <div className="grid md:grid-cols-2 gap-4 mb-6">

    <img
      src={cfcchallenges1}
      alt="Carbon Challenges"
      className="rounded-xl"
    />

    <img
      src={cfcchallenges2}
      alt="Challenge Progress"
      className="rounded-xl"
    />

  </div>

  <h4 className="text-xl font-semibold text-center mb-3">
    Sustainability Challenges & Rewards
  </h4>

  <p className="text-gray-400 text-sm text-center leading-relaxed max-w-4xl mx-auto">
    Users can participate in carbon reduction challenges, earn points,
    unlock achievements, monitor progress, and reach sustainability
    milestones. The reward system encourages long-term engagement and
    adoption of eco-friendly habits.
  </p>

</div>

</div>
  </div>
  </div>
)}

{/* Archaeological Site Mapping Modal */}
{showArchaeological && (
  <div
    className="fixed inset-0 bg-black z-50 overflow-y-auto backdrop-blur-sm"
    onClick={() => setShowArchaeological(false)}
  >

    {/* Sticky Close Button */}
    <div
      className="sticky top-4 z-[99999] flex justify-end px-4"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowArchaeological(false)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl hover:bg-white/20 transition"
      >
        ✕
      </button>
    </div>

    <div
      className="max-w-7xl mx-auto p-8 relative bg-black min-h-screen"
      onClick={(e) => e.stopPropagation()}
    >

      <h2 className="text-5xl font-bold mb-4">
        AI-Powered Archaeological Site Mapping
      </h2>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-red-400 mb-4">
            Problem
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Archaeological site discovery and monitoring often require
            extensive field surveys and manual analysis, making the
            process time-consuming, costly, and difficult across
            large geographical regions.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-green-400 mb-4">
            Solution
          </h3>

          <p className="text-gray-400 leading-relaxed">
            The platform utilizes satellite and drone imagery combined
            with AI-driven image segmentation, object detection, and
            terrain analysis to identify potential archaeological
            structures and support heritage preservation efforts.
          </p>
        </div>

      </div>

      {/* Image Upload & Data Input */}
      <div className="mb-20">

        <h3 className="text-3xl font-bold mb-4">
          Image Upload & Data Input
        </h3>

        <p className="text-gray-400 mb-8">
          Users can upload satellite or drone imagery through a
          streamlined interface. The uploaded image is validated
          and prepared for AI-powered archaeological analysis.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

          <img
            src={archealogical1}
            alt="Image Upload Interface"
            className="w-4/5 mx-auto rounded-xl mb-6"
          />

          <h4 className="text-xl font-semibold text-center mb-3">
            Image Upload Interface
          </h4>

          <p className="text-gray-400 text-sm text-center leading-relaxed max-w-3xl mx-auto">
            Supports satellite and drone imagery uploads, providing
            a simple entry point for archaeological site detection,
            terrain evaluation, and environmental assessment.
          </p>

        </div>

      </div>

      {/* AI Analysis Results */}
      <div className="mb-20">

        <h3 className="text-3xl font-bold mb-4">
          AI Analysis Results
        </h3>

        <p className="text-gray-400 mb-8">
          Multiple AI models work together to identify archaeological
          structures, segment terrain features, and assess
          environmental conditions.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

          <img
            src={archealogical2}
            alt="AI Analysis Results"
            className="w-4/5 mx-auto rounded-xl mb-6"
          />

          <h4 className="text-xl font-semibold text-center mb-3">
            Segmentation, Detection & Terrain Assessment
          </h4>

          <p className="text-gray-400 text-sm text-center leading-relaxed max-w-3xl mx-auto">
            U-Net segmentation highlights terrain and land features,
            YOLO object detection identifies potential archaeological
            structures, while terrain analysis evaluates vegetation
            coverage, slope characteristics, and erosion risk
            indicators to support heritage conservation.
          </p>

        </div>

      </div>

    </div>

  </div>
)}

{/* Pragmatic Behaviour Analysis Modal */}
{showPragmatic && (
  <div
    className="fixed inset-0 bg-black z-50 overflow-y-auto backdrop-blur-sm"
    onClick={() => setShowPragmatic(false)}
  >

    {/* Close Button */}
    <div
      className="sticky top-4 z-[99999] flex justify-end px-4"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setShowPragmatic(false)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xl hover:bg-white/20 transition"
      >
        ✕
      </button>
    </div>

    <div
      className="max-w-7xl mx-auto p-8 relative bg-black min-h-screen"
      onClick={(e) => e.stopPropagation()}
    >

      <h2 className="text-5xl font-bold mb-4">
        Pragmatic Behaviour Analysis
      </h2>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-red-400 mb-4">
            Problem
          </h3>

             <p className="text-gray-400 leading-relaxed">
  Identifying pragmatic behavioural difficulties in children under
  10 often relies on manual observations and subjective evaluations,
  making early detection of communication and social interaction
  challenges difficult.
</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-green-400 mb-4">
            Solution
          </h3>

          <p className="text-gray-400 leading-relaxed">
  EARLYMIND AI combines MCQ-based caregiver assessments with
  AI-powered video analysis to identify pragmatic behavioural
  patterns, generate developmental insights, and support early
  intervention in children under 10.
          </p>
        </div>

      </div>

      
      {/* Authentication & Dashboard */}
<div className="mb-20">

  <h3 className="text-3xl font-bold mb-4">
    Authentication & Dashboard
  </h3>

  <p className="text-gray-400 mb-8">
    Secure authentication and dashboard management allow parents and
    caregivers to access behavioural assessment tools, manage
    evaluations, and review analysis results through a centralized
    platform.
  </p>

  {/* Registration */}
<div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-8 max-w-3xl mx-auto">

  <img
    src={earlymindregister}
    alt="User Registration"
    className="w-2/5 mx-auto rounded-xl mb-4"
  />

  <h4 className="text-lg font-semibold text-center mb-2">
    User Registration
  </h4>

  <p className="text-gray-400 text-sm text-center leading-relaxed max-w-2xl mx-auto">
    Parents and caregivers can create accounts by providing child
    and guardian information required for behavioural assessments,
    report generation, and personalized analysis.
  </p>

</div>

{/* Login + Dashboard */}
<div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-5xl mx-auto">

  <div className="grid md:grid-cols-2 gap-4 mb-4">

    <img
      src={earlymindlogin}
      alt="Secure Login"
      className="rounded-xl"
    />

    <img
      src={earlyminddashboard}
      alt="Assessment Dashboard"
      className="rounded-xl"
    />

  </div>

  <h4 className="text-lg font-semibold text-center mb-2">
    Secure Login & Assessment Dashboard
  </h4>

  <p className="text-gray-400 text-sm text-center leading-relaxed max-w-3xl mx-auto">
    Registered users can securely access the platform and manage
    behavioural assessments through a centralized dashboard. The
    dashboard provides quick access to MCQ-based evaluations,
    AI-powered video analysis, assessment reports, and behavioural
    insights from a single interface.
  </p>

</div>
</div>

      {/* Questionnaire Assessment */}
<div className="mb-20">

  <h3 className="text-3xl font-bold mb-4">
    Questionnaire-Based Behaviour Assessment
  </h3>

  <p className="text-gray-400 mb-8">
    Structured MCQ-based questionnaires completed by parents and
    caregivers help assess communication, social interaction,
    and pragmatic behavioural characteristics in children.
  </p>

  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-5xl mx-auto">

    <div className="grid md:grid-cols-2 gap-4 mb-4">

      <img
        src={earlymindmcq}
        alt="MCQ Assessment"
        className="rounded-xl"
      />

      <img
        src={earlymindmcq1}
        alt="Assessment Result"
        className="rounded-xl"
      />

    </div>

    <h4 className="text-lg font-semibold text-center mb-2">
      Questionnaire Analysis & Results
    </h4>

    <p className="text-gray-400 text-sm text-center leading-relaxed max-w-3xl mx-auto">
      The system analyzes parent and caregiver responses, calculates
      assessment scores, evaluates behavioural indicators, and generates
      developmental insights along with personalized recommendations
      for early intervention.
    </p>

  </div>

</div>

{/* AI Video Behaviour Analysis */}
<div className="mb-20">

  <h3 className="text-3xl font-bold mb-4">
    AI Video Behaviour Analysis
  </h3>

  <p className="text-gray-400 mb-8">
    AI-powered video analysis evaluates behavioural patterns and
    social interactions to identify pragmatic behavioural traits
    and generate prediction-based assessment reports.
  </p>

  <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-5xl mx-auto">

    <div className="grid md:grid-cols-2 gap-4 mb-4">

      <img
        src={earlymindvideoanalysisreport1}
        alt="Normal Behaviour"
        className="rounded-xl"
      />

      <img
        src={earlymindvideoanalysisreport2}
        alt="Behaviour Prediction"
        className="rounded-xl"
      />

    </div>

    <h4 className="text-lg font-semibold text-center mb-2">
      Behaviour Prediction Reports
    </h4>

    <p className="text-gray-400 text-sm text-center leading-relaxed max-w-3xl mx-auto">
      The AI model evaluates eye contact, eye-hand coordination,
      joint attention, turn-taking, understanding social cues,
      topic maintenance, and topic initiation to generate detailed
      behavioural predictions and assessment reports.
    </p>

  </div>

</div>

    </div>

  </div>
)}
    </div>
  )
}

export default App
