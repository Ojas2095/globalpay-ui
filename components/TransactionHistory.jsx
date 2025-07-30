import React from "react";
import { motion } from "framer-motion";

export default function TransactionHistory({ transactions, itemVariant, animateItems }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400 text-center">
        Transaction History
      </h2>
      <ul className="space-y-4">
        {transactions.map((txn, i) => (
          <motion.li
            key={i}
            className="p-4 rounded-xl bg-white dark:bg-[#1b1b1b] shadow border border-gray-200 dark:border-gray-700"
            variants={itemVariant}
            initial="hidden"
            animate={animateItems ? "show" : "hidden"}
          >
            <div className="flex justify-between">
              <span className="text-gray-800 dark:text-white">{txn.title}</span>
              <span className="text-purple-600 dark:text-purple-400 font-semibold">
                ₹ {txn.amount}
              </span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{txn.date}</div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
