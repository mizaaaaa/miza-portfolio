import { useState } from "react";
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
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSafeSpace, setShowSafeSpace] = useState(false);
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* Navbar */}
<nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

    <h1 className="text-2xl font-bold text-purple-400">
      Miza M
    </h1>

    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-8 text-gray-300">
      <li>
        <a href="#about" className="hover:text-white transition">
          About
        </a>
      </li>

      <li>
        <a href="#skills" className="hover:text-white transition">
          Skills
        </a>
      </li>

      <li>
        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>
      </li>

      <li>
        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
      </li>
    </ul>

    {/* Mobile Hamburger */}
    <button
      className="md:hidden text-white text-3xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
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
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </li>
    </ul>
  )}
</nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
      
      
        {/* Glow Effect */}
        <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10">

          <p className="text-purple-400 mb-4 text-lg">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Miza M
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
            AI & Full Stack Developer
          </h2>

          <p className="max-w-2xl text-gray-300 text-lg leading-relaxed">
  Passionate about Full Stack Development and building
  scalable, user-friendly software solutions. Experienced
  in developing frontend interfaces, backend systems,
  and database-driven applications using modern technologies.
</p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <button className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-semibold transition">
              View Projects
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-xl font-semibold transition">
              Download Resume
            </button>

          </div>

        </div>

      </section>
            {/* About Section */}
<section id="about" className="py-24 px-6">

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
    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

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
        <section id="projects" className="py-24 px-6">
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

            {/* Project 1 */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition">

  <h3 className="text-2xl font-bold mb-4">
    Pragmatic Behaviour Analysis
  </h3>

  <p className="text-gray-400 leading-relaxed mb-6">
    AI/ML-based system for early behavior analysis in children
    using real-time video analysis and caretaker responses.
  </p>

  <div className="flex flex-wrap gap-3">

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

</div>

            {/* Project 2 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition">

              <h3 className="text-2xl font-bold mb-4">
                Carbon Footprint Tracker
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                Full-stack web platform to track and reduce carbon footprint
                through analytics on energy, transportation, and waste.
              </p>

              <div className="flex flex-wrap gap-3">

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

            </div>

            {/* Project 3 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition">

              <h3 className="text-2xl font-bold mb-4">
                AI-Powered Archaeological Site Mapping
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                AI-based system using satellite and drone imagery for
                archaeological insights, segmentation, and erosion prediction.
              </p>

              <div className="flex flex-wrap gap-3">

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

            </div>
            {/* Project 4 - SafeSpace */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition duration-300">

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
      MongoDB
    </span>

  </div>

  <button
    onClick={() => setShowSafeSpace(true)}
    className="text-purple-400 font-semibold hover:text-purple-300 transition"
  >
    View project →
  </button>

</div>

</div>

          </div>


      </section>
            {/* Contact Section */}
      <section id="contact" className="py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-purple-400 text-lg mb-3">
            Contact
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Let's Connect
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed">
            I’m open to opportunities, collaborations, and innovative projects
            related to AI, Machine Learning, and Web Development.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Email */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500 transition">

              <h3 className="text-xl font-semibold mb-3">
                Email
              </h3>

              <a
                href="mailto:yourmail@gmail.com"
                className="text-gray-400 break-all hover:text-purple-400 transition"
              >
                mizam0605@gmail.com
              </a>

            </div>

            {/* LinkedIn */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500 transition">

              <h3 className="text-xl font-semibold mb-3">
                LinkedIn
              </h3>

              <a
                href="https://www.linkedin.com/in/miza-m-621b20338/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                Miza M
              </a>

            </div>

            {/* GitHub */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500 transition">

              <h3 className="text-xl font-semibold mb-3">
                GitHub
              </h3>

              <a
                href="https://github.com/mizaaaaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                github.com/mizaaaaa
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* SafeSpace Modal */}
{showSafeSpace && (
  <div
  className="fixed inset-0 bg-black z-50 overflow-y-auto backdrop-blur-sm"

  onClick={() => setShowSafeSpace(false)}
>

    <div
  className="max-w-7xl mx-auto p-8 relative bg-black min-h-screen"
  onClick={(e) => e.stopPropagation()}
>
  <button
  onClick={() => setShowSafeSpace(false)}
  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition text-xl"
>
  ✕
</button>

      

      <h2 className="text-5xl font-bold mb-4">
  SafeSpace
</h2>

<div className="grid md:grid-cols-2 gap-8 mb-20">

  <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
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

          <div className="className=bg-white/5 border border-white/10 rounded-2xl p-3">
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

    </div>
  )
}

export default App
