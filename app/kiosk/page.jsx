"use client";
import React from "react";
import { motion } from "framer-motion";
import BiometricPrompt from "@/components/BiometricPrompt";

export default function KioskPage() {
  return (
    <motion.main
      className="min-h-screen px-6 py-12 text-gray-800 dark:text-gray-200 bg-gradient-to-b from-[#f5f0fa] to-[#e9dcf5] dark:from-[#0a0a0a] dark:to-[#1f1f1f] flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Kiosk Biometric Access
      </motion.h1>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <BiometricPrompt animatePulse />
      </motion.div>
    </motion.main>
  );
}
