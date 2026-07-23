import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import ProcessAvatar from './ProcessAvatar';
import {
  handoffAvatar,
  processImagesReady,
  processStages,
} from '../data/processStages';

const HANDOFF_START = 0.92;
const HANDOFF_END = 0.96;
const STRATEGY_ACTIVATION = 0.995;

export default function ProcessStorySection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasHandoffCompleted, setHasHandoffCompleted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const { scrollYProgress: entryProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  const orbitRotation = useTransform(scrollYProgress, [0, 1], [0, 420]);
  const entryAvatarY = useTransform(entryProgress, [0, 1], ['-100vh', '0vh']);
  const processAvatarOpacity = useTransform(
    entryProgress,
    [0, HANDOFF_START, HANDOFF_END, 1],
    [0, 0, 1, 1]
  );
  const streamY = useTransform(scrollYProgress, [0, 1], ['35vh', '-235vh']);
  const visualOpacity = useTransform(entryProgress, [0.68, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const nextIndex = Math.min(
      processStages.length - 1,
      Math.floor(latest * processStages.length)
    );
    setActiveIndex((currentIndex) =>
      currentIndex === nextIndex ? currentIndex : nextIndex
    );
  });

  useMotionValueEvent(entryProgress, 'change', (latest) => {
    const nextHandoffState = latest >= STRATEGY_ACTIVATION;
    setHasHandoffCompleted((currentState) =>
      currentState === nextHandoffState ? currentState : nextHandoffState
    );
  });

  useEffect(() => {
    processImagesReady.catch(() => {
      // Individual images retain their current frame if decoding fails.
    });
  }, []);

  const activeStage = processStages[activeIndex];
  const displayedAvatarStage = hasHandoffCompleted
    ? activeStage
    : {
        id: 'hero-handoff',
        title: 'Portfolio introduction',
        avatar: handoffAvatar,
        alt: 'Hafiz Muhammad',
        width: 240,
        height: 240,
      };

  return (
    <section
      ref={sectionRef}
      className="process-story"
      aria-labelledby="process-story-title"
    >
      <div className="process-story__sticky">
        <header className="process-story__heading">
          <p>Selected process</p>
          <h2 id="process-story-title">From direction to evolution.</h2>
        </header>

        <motion.div
          className="process-story__visual"
          style={shouldReduceMotion ? undefined : { opacity: visualOpacity }}
        >
          <motion.div
            className="process-story__orbit"
            aria-hidden="true"
            style={shouldReduceMotion ? undefined : { rotate: orbitRotation }}
          >
            <span className="process-story__letter">O</span>
            <span className="process-story__ring process-story__ring--outer" />
            <span className="process-story__ring process-story__ring--inner" />
            <span className="process-story__orbital-point" />
          </motion.div>

          <motion.div
            className="process-story__avatar-entry"
            style={
              shouldReduceMotion
                ? undefined
                : { y: entryAvatarY, opacity: processAvatarOpacity }
            }
          >
            <motion.div className="process-story__avatar-shell">
              <ProcessAvatar stage={displayedAvatarStage} />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.ol
          className="process-story__stream"
          style={shouldReduceMotion ? undefined : { y: streamY }}
        >
          {processStages.map((stage, index) => {
            const isActive = hasHandoffCompleted && index === activeIndex;

            return (
              <li
                key={stage.id}
                className={`process-story__stage ${
                  index % 2 === 0
                    ? 'process-story__stage--left'
                    : 'process-story__stage--right'
                } ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'step' : undefined}
              >
                <span className="process-story__number">{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </li>
            );
          })}
        </motion.ol>

        <div className="process-story__progress" aria-hidden="true">
          <motion.span style={{ scaleX: scrollYProgress }} />
        </div>
      </div>
    </section>
  );
}
