"use client";
import React from "react";
import { motion } from "framer-motion";
import BiometricPrompt from "@/components/BiometricPrompt";
import TransactionHistory from "@/components/TransactionHistory";
import apiClient from "@/utils/apiClient";

export default function MerchantDashboard() {
  const [transactions, setTransactions] = React.useState([]);

  React.useEffect(() => {
    async function fetch() {
      const res = await apiClient("/api/fetch-balance");
      setTransactions(res?.transactions || []);
    }
    fetch();
  }, []);

  return (
    <motion.main
      className="min-h-screen px-6 py-10 text-gray-800 dark:text-gray-200 bg-gradient-to-b from-[#f5f0fa] to-[#e9dcf5] dark:from-[#0a0a0a] dark:to-[#1f1f1f]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6 text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Merchant Dashboard
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex justify-center"
      >
        <BiometricPrompt animatePulse />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="mt-8"
      >
        <TransactionHistory
          transactions={transactions}
          itemVariant={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          animateItems
        />
      </motion.div>
    </motion.main>
  );
}
