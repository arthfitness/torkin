"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X, XCircle } from "lucide-react";

export interface ToastState {
  message: string;
  type: "success" | "error";
}

export default function Toast({
  toast,
  onClose,
}: {
  toast: ToastState | null;
  onClose: () => void;
}) {
  return (
    <div className="fixed bottom-6 left-1/2 z-[80] w-[90%] max-w-sm -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className={`flex items-start gap-3 rounded bg-white p-4 shadow-2xl ring-1 ring-black/5 dark:bg-surface-dark dark:ring-white/10 ${
              toast.type === "success" ? "border-l-4 border-brand" : "border-l-4 border-red-500"
            }`}
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="mt-0.5 shrink-0 text-brand" size={20} />
            ) : (
              <XCircle className="mt-0.5 shrink-0 text-red-500" size={20} />
            )}
            <p className="flex-1 text-sm text-ink-900 dark:text-white">{toast.message}</p>
            <button onClick={onClose} aria-label="Dismiss" className="text-muted hover:text-ink-900 dark:text-muted-light dark:hover:text-white">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
