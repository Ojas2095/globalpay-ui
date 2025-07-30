import React from "react";
import { Wallet } from "lucide-react";

export default function WalletCard({ balance }) {
  return (
    <div className="bg-white dark:bg-[#1b1b1b] p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700 w-full max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-2">
        <Wallet className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Wallet Balance
        </h3>
      </div>
      <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
        ₹ {balance?.toFixed(2) || "0.00"}
      </p>
    </div>
  );
}
