function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">

      {/* Navbar */}
            {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="text-2xl font-bold text-purple-400">
            Miza M
          </h1>

          <ul className="hidden md:flex gap-8 text-gray-300">

            <li>
              <a
                href="#about"
                className="hover:text-white transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="hover:text-white transition"
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="hover:text-white transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-white transition"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>

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
            AI & Web Developer
          </h2>

          <p className="max-w-2xl text-gray-300 text-lg leading-relaxed">
            Passionate about Artificial Intelligence, Machine Learning,
            and modern web development. Focused on building scalable,
            impactful, and user-friendly digital solutions.
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
              Passionate About Building AI & Web Solutions
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              I am a B.Tech graduate in Information Technology with
              strong interest in Artificial Intelligence, Machine Learning,
              and full-stack web development.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy building impactful digital solutions and working on
              innovative projects involving AI, analytics, and modern
              web technologies.
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
                  AI/ML
                </h3>
                <p className="text-gray-400 mt-2">
                  Specialization
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
            {/* Project 4 */}
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition">

  <h3 className="text-2xl font-bold mb-4">
    SafeSpace - Anonymous Reporting System
  </h3>

  <p className="text-gray-400 leading-relaxed mb-6">
    Anonymous reporting platform with NLP-based complaint
    classification, anonymous chat, and visualization features.
  </p>

  <div className="flex flex-wrap gap-3">

    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
      Flutter
    </span>

    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
      NLP
    </span>

    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
      Node.js
    </span>

  </div>

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
                href="hhttps://github.com/mizaaaaa"
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

    </div>
  )
}

export default App