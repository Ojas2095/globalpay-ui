"use client";
import React from "react";
import { motion } from "framer-motion";
import WalletCard from "@/components/WalletCard";
import TransactionHistory from "@/components/TransactionHistory";
import apiClient from "@/utils/apiClient";

export default function WalletPage() {
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
      className="min-h-screen px-6 py-10 text-gray-900 dark:text-gray-100 bg-gradient-to-b from-[#f5f0fa] to-[#e9dcf5] dark:from-[#0a0a0a] dark:to-[#1f1f1f]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl font-bold text-center text-purple-600 dark:text-purple-400 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Wallet Dashboard
      </motion.h1>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <WalletCard />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
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
