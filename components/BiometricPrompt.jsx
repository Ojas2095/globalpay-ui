import React from "react";
import { Fingerprint } from "lucide-react";

export default function BiometricPrompt({ animatePulse }) {
  return (
    <div className="flex items-center justify-center flex-col mt-6">
      <div
        className={`p-6 rounded-full border-4 border-purple-400 dark:border-purple-600 ${
          animatePulse ? "animate-pulse" : ""
        }`}
      >
        <Fingerprint className="w-12 h-12 text-purple-600 dark:text-purple-400" />
      </div>
      <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
        Authenticate using your fingerprint
      </p>
    </div>
  );
}
