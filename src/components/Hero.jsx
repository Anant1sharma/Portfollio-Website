// components/HeroSection.jsx
// components/HeroSection.jsx
import { Typewriter } from 'react-simple-typewriter';


export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-black text-white min-h-screen flex items-center justify-center px-6"
    >
      <div className="text-center max-w-3xl">
        {/* Big Profile Image */}
        <img
          src="/profile.jpg" // Replace with actual image path
          alt="Anant Sharma"
          className="w-52 h-52 rounded-full mx-auto mb-6 border-4 border-teal-500 shadow-xl object-cover"
        />

        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Hi, I'm <span className="text-blue-500">Anant Sharma</span>
        </h1>

        {/* Rotating Title */}
        <h2 className="text-2xl text-pink-400 font-semibold mb-1 h-8">
          <Typewriter
            words={[
              'Software Developer',
              'MERN Stack Developer',
              'React Developer',
              'Full Stack Developer',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h2>

        {/* TPO Line */}
        <p className="text-sm text-zinc-400 mb-6">TPO Verified Candidate</p>

        {/* Description */}
        <p className="text-zinc-300 leading-relaxed text-lg mb-8">
          I am a passionate fresher with a strong foundation in web development,
          eager to apply my skills and contribute to real-world projects. I'm quick
          to learn, enthusiastic about new technologies, and ready to collaborate
          with teams.
        </p>

        {/* Download Button */}
        <a
          href="/assets/Anant_Resume.pdf"
          download
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition duration-300 hover:scale-105 shadow-md hover:shadow-red-500/40"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

