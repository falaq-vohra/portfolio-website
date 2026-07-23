import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import GenerativeMountainScene from './components/GenerativeMountainScene';
import LoadingScreen from './components/LoadingScreen';
import ProcessStorySection from './components/ProcessStorySection';
import AvatarImage from './assets/Avatar.webp';
import heroBgUrl from './assets/hero_bg.jpg';

function HeroAvatarHandoff({ children, shouldReduceMotion, travel }) {
  const { scrollY } = useScroll();
  const scrollProgress = useTransform(
    scrollY,
    [0, travel.height],
    [0, 1],
    { clamp: true }
  );
  const y = useTransform(
    scrollProgress,
    [0, 0.18, 0.92, 0.96, 1],
    [0, 0, travel.atStart, travel.atEnd, travel.atEnd]
  );
  const opacity = useTransform(
    scrollProgress,
    [0, 0.92, 0.96, 1],
    [1, 1, 0, 0]
  );
  const scale = useTransform(
    scrollProgress,
    [0, 0.92, 0.96, 1],
    [1, 1, travel.scale, travel.scale]
  );

  return (
    <motion.div
      className="hero-avatar-handoff"
      style={{
        y: shouldReduceMotion ? 0 : y,
        scale: shouldReduceMotion ? 1 : scale,
        opacity: shouldReduceMotion ? 1 : opacity,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const pointerRef = useRef({ x: -100, y: -100, hasMoved: false });
  const heroRef = useRef(null);
  const heroAvatarRef = useRef(null);
  const [heroHandoffTravel, setHeroHandoffTravel] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  // LOADING SCREEN — shown for a fixed window on first mount, then the
  // hero mounts fresh underneath and runs its own entrance animations.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800);

    const heroImage = new Image();
    const heroBackground = new Image();
    heroImage.src = AvatarImage;
    heroBackground.src = heroBgUrl;

    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    if (isLoading) return undefined;

    const measureHandoff = () => {
      if (!heroRef.current || !heroAvatarRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const avatarRect = heroAvatarRef.current.getBoundingClientRect();
      const avatarCenterY = avatarRect.top + avatarRect.height / 2;
      const destinationDeltaY = window.innerHeight / 2 - avatarCenterY;
      const processAvatarScale =
        window.innerWidth <= 640 ? 1 : window.innerWidth <= 900 ? 1.1 : 1.2;

      setHeroHandoffTravel({
        height: heroRect.height,
        atStart: heroRect.height * 0.92 + destinationDeltaY,
        atEnd: heroRect.height * 0.96 + destinationDeltaY,
        scale: processAvatarScale,
      });
    };

    measureHandoff();
    const settledMeasureTimer = window.setTimeout(measureHandoff, 1100);
    window.addEventListener('resize', measureHandoff);

    return () => {
      window.clearTimeout(settledMeasureTimer);
      window.removeEventListener('resize', measureHandoff);
    };
  }, [isLoading]);

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
    let cursorNeedsUpdate = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      pointerRef.current.x = mouseX;
      pointerRef.current.y = mouseY;
      pointerRef.current.hasMoved = true;
      cursor.style.opacity = '1';
      cursorNeedsUpdate = true;
      startCursorAnimation();
    };
    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    const animateCursor = () => {
      if (cursorNeedsUpdate) {
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        cursorNeedsUpdate = false;
      }
      rafId = undefined;

      if (cursorNeedsUpdate) {
        startCursorAnimation();
      }
    };

    const startCursorAnimation = () => {
      if (cursorNeedsUpdate && rafId === undefined && !document.hidden) {
        rafId = requestAnimationFrame(animateCursor);
      }
    };
    const stopCursorAnimation = () => {
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
        rafId = undefined;
      }
    };
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopCursorAnimation();
      } else {
        startCursorAnimation();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopCursorAnimation();
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cursor.remove();
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <motion.div
            ref={heroRef}
            className="relative w-screen h-screen"
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
            <GenerativeMountainScene pointerRef={pointerRef} />
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
              className="absolute top-0 left-0 right-0 z-50 w-full px-8 py-6 flex justify-between items-center"
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
                  <span className="hero-name-line relative inline-grid place-items-center">
                    <span className="col-start-1 row-start-1">Muhammad</span>

                    <span ref={heroAvatarRef} className="hero-avatar-anchor">
                      {heroHandoffTravel && (
                        <HeroAvatarHandoff
                          key={`${heroHandoffTravel.height}-${heroHandoffTravel.atStart}-${heroHandoffTravel.atEnd}`}
                          shouldReduceMotion={shouldReduceMotion}
                          travel={heroHandoffTravel}
                        >
                        <motion.div
                          className="w-full h-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
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
                        </HeroAvatarHandoff>
                      )}
                    </span>
                  </span>
                </motion.h1>

              </div>

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
                  Focused on interfaces and experiences, working remotely from Karachi, Pakistan.
                </p>
              </motion.div>

            </div>

          </div>

          </motion.div>

          <ProcessStorySection />
        </>
      )}
    </>
  );
}
