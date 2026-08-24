import { motion } from "framer-motion";
import React from "react";
import p from "../assets/m1.JPEG";

export default function About() {
  const stats = [
    { label: "Experience", value: "1+ years" },
    { label: "Speciality", value: "Full Stack" },
    { label: "Focus", value: "Performance & UX" },
  ];

  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-20 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6 lg:px-20 w-full bg-black text-white overflow-hidden">
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10"> 
        {glows.map((glow, index) => (
          <div
            key={index}
            className={`absolute bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse ${glow}`}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16 md:gap-20 lg:gap-24">
        {/* Profile + Bio */}
        <motion.div 
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8 w-full max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div 
            className="relative w-40 h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 mx-auto md:mx-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <img 
              src={p} 
              alt="Durgesh Gupta" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-2xl lg:text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 mb-4">
              Durgesh Gupta
            </h2>
            <p className="text-lg sm:text-2xl text-white/90 font-bold mb-6">
              Full Stack Developer
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              I build scalable, modern applications with a strong focus on clean architecture, delightful UX, and performance. My toolkit spans JavaScript, React, Next.js, TypeScript, TailwindCSS, and RESTful APIs.
            </p>

            {/* Stats - Fixed grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto md:mx-0">
              {stats.map((item, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-sm text-gray-400 uppercase tracking-wide">{item.label}</div>
                  <div className="text-lg font-bold text-white mt-1">{item.value}</div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center rounded-xl bg-white text-black font-semibold px-8 py-4 text-lg hover:bg-gray-100 active:scale-[0.97] transition-all duration-200"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 text-lg hover:bg-white/20 active:scale-[0.97] transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>

        {/* About Me */}
        <motion.div 
          className="text-center max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">About Me</h3>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            I'm a Software & Web Developer passionate about building fast, realistic applications and sharing coding insights on Instagram and YouTube.
          </p>
          <p className="text-lg text-gray-400">
            I love turning ideas into scalable, user-friendly products that make an impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
