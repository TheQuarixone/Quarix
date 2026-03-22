"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EncryptedText } from "@/components/ui/encrypted-text";

export function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("quarix_visited");
    if (hasVisited) return;

    sessionStorage.setItem("quarix_visited", "1");
    setVisible(true);

    const exitTimer = setTimeout(() => setStartExit(true), 2600);
    const removeTimer = setTimeout(() => setVisible(false), 3400);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center gap-6 select-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Top fade bar */}
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-white/10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: startExit ? 0 : 1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          {/* Content */}
          <motion.div
            className="flex flex-col items-center gap-3"
            animate={{ y: startExit ? -16 : 0, opacity: startExit ? 0 : 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
          >
            {/* Main text */}
            <h1 className="text-white font-bold text-xl sm:text-2xl tracking-tight">
              <EncryptedText
                text="Welcome to Quarix"
                revealDelayMs={55}
                flipDelayMs={35}
                encryptedClassName="text-white/20"
                revealedClassName="text-white"
              />
            </h1>

            {/* Tagline */}
            <motion.p
              className="text-neutral-500 text-xs tracking-wide mt-0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: startExit ? 0 : 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              Plan. Build. Ship.
            </motion.p>
          </motion.div>

          {/* Bottom progress bar */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-px bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-white/40 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: startExit ? "100%" : "85%" }}
              transition={{ duration: startExit ? 0.4 : 2.4, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
