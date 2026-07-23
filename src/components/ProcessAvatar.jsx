import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { decodeProcessAvatar } from '../data/processStages';

export default function ProcessAvatar({ stage }) {
  const shouldReduceMotion = useReducedMotion();
  const [displayedStage, setDisplayedStage] = useState(stage);

  useEffect(() => {
    let isCurrentStage = true;

    decodeProcessAvatar(stage.avatar)
      .then(() => {
        if (isCurrentStage) setDisplayedStage(stage);
      })
      .catch(() => {
        if (isCurrentStage) setDisplayedStage(stage);
      });

    return () => {
      isCurrentStage = false;
    };
  }, [stage]);

  return (
    <div className="process-avatar">
      <AnimatePresence initial={false} mode="sync">
        <motion.img
          key={displayedStage.id}
          src={displayedStage.avatar}
          alt={displayedStage.alt}
          width={displayedStage.width || 240}
          height={displayedStage.height || 240}
          className="process-avatar__image"
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.99, y: 4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.01, y: -4 }}
          transition={{
            duration: shouldReduceMotion ? 0.15 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </AnimatePresence>
    </div>
  );
}
