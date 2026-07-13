import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GenerativeMountainScene from './components/GenerativeMountainScene';
import WordLoader from './components/WordLoader';
import LoadingScreen from './components/LoadingScreen';
import AvatarImage from './assets/Avatar.webp';

export default function App() {
  // LOADING SCREEN — shown for a fixed window on first mount, then the
  // hero mounts fresh underneath and runs its own entrance animations.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  // CUSTOM CURSOR — a circle that follows the mouse and inverts whatever
  // is behind it via mix-blend-mode (see .custom-cursor in globals.css).
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // Decouple mouse tracking from DOM writes: mousemove can fire far more
    // often than the screen repaints, so it only updates plain variables.
    // A single requestAnimationFrame loop writes the cursor's position once
    // per frame, which keeps it smooth even under fast/high-poll-rate input.
    let mouseX = -100;
    let mouseY = -100;
    let rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = '1';
    };
    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    const animateCursor = () => {
      // transform (not left/top) so this never triggers layout, just a
      // compositor-level move — the smoothest path for per-frame updates.
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animateCursor);
    };
    rafId = requestAnimationFrame(animateCursor);

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      cursor.remove();
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          className="relative w-screen h-screen overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        >

          {/* 3D ANIMATED BACKGROUND - NO OVERLAY ON IT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <GenerativeMountainScene />
          </motion.div>

          {/* SMART OVERLAY - Only darken edges, keep center bright for 3D effect */}
          <div className="absolute inset-0 z-5 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)'
            }}
          ></div>

          {/* ALL CONTENT ON TOP */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">

            {/* NAVBAR */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              className="fixed top-0 left-0 right-0 z-50 w-full px-8 py-6 flex justify-between items-center"
            >
              <button
                className="border-2 border-[#e4ded7] text-[#e4ded7] px-6 py-2 rounded-lg hover:bg-[#e4ded7] hover:text-black transition-all duration-300"
                style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700 }}
              >
                BOOK A CALL
              </button>
              <div
                className="flex gap-8 text-[#e4ded7]"
                style={{ fontFamily: '"Montserrat", sans-serif', fontWeight: 700 }}
              >
                <a href="#" className="hover:opacity-70 transition">STUDIO</a>
                <a href="#" className="hover:opacity-70 transition">LINKEDIN</a>
              </div>
            </motion.nav>

            {/* HERO CONTENT - CENTERED */}
            <div className="relative w-full max-w-7xl px-8 flex flex-col justify-center items-center">

              {/* NAME TEXT CONTAINER */}
              <div className="relative w-full flex justify-center items-center" style={{ perspective: '1000px' }}>

                {/* LARGE NAME TEXT */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                  className="text-[56px] sm:text-[72px] md:text-[140px] lg:text-[160px] xl:text-[180px] text-[#e4ded7] text-center leading-none relative z-5"
                  style={{
                    fontFamily: '"Montserrat", "HelveticaNow Display", sans-serif',
                    fontWeight: 700,
                    letterSpacing: '-0.04em',
                    lineHeight: '0.95'
                  }}
                >
                  <span className="block">Hafiz</span>

                  {/* GRID STACK: text and avatar share the same cell, so the avatar is
                      centered on the "Moinuddin" line itself, not the two-line block */}
                  <span className="relative inline-grid place-items-center">
                    <span className="col-start-1 row-start-1">Muhammad</span>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
                      className="col-start-1 row-start-1 z-10"
                      style={{ width: '240px', height: '240px', marginTop: '28px' }}
                    >
                      <img
                        src={AvatarImage}
                        alt="Avatar"
                        className="w-full h-full rounded-2xl shadow-2xl object-cover grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                        style={{
                          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(201, 168, 118, 0.3)'
                        }}
                      />
                    </motion.div>
                  </span>
                </motion.h1>

              </div>

              {/* ANIMATED ROLE SUBTITLE - cycles through words via GSAP */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
                className="w-full relative z-10"
              >
                <WordLoader words={["Frontend Engineer", "UI Designer", "Web Developer", "Creative Technologist"]} />
              </motion.div>

              {/* DESCRIPTION TEXT - LEFT & RIGHT */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
                className="flex justify-between gap-20 w-full mt-32 px-4 relative z-10"
              >
                <p className="text-lg md:text-xl leading-relaxed text-[#e4ded7] opacity-80 max-w-md">
                  I currently work as a Frontend Engineer at Freelancer, currently available for work.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-[#e4ded7] opacity-80 max-w-md text-right">
                  Focused on interfaces and experiences, working remotely from Karaci, Pakistan.
                </p>
              </motion.div>

            </div>

          </div>

        </motion.div>
      )}
    </>
  );
}
