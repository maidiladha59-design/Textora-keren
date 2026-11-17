"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  CheckCircle2,
  Info,
  TriangleAlert,
  X,
  type LucideIcon,
} from "lucide-react";
import { dictionary } from "@/lib/i18n/id";
import { cn } from "@/lib/utils";

export type ToastTone = "success" | "info" | "error";

interface ToastItem {
  id: number;
  message: string;
  tone: ToastTone;
}

interface ToastContextValue {
  showToast: (message: string, tone?: ToastTone) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const toneStyles: Record<ToastTone, string> = {
  success: "border-emerald-500/30",
  info: "border-border-strong",
  error: "border-red-500/35",
};

const toneIconStyles: Record<ToastTone, string> = {
  success: "text-emerald-600 dark:text-emerald-400",
  info: "text-primary-soft-foreground",
  error: "text-red-600 dark:text-red-400",
};

const toneIcons: Record<ToastTone, LucideIcon> = {
  success: CheckCircle2,
  info: Info,
  error: TriangleAlert,
};

let nextToastId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timers = useRef(new Map<number, number>());

  const dismiss = useCallback((id: number) => {
    const timer = timers.current.get(id);
    if (timer !== undefined) {
      window.clearTimeout(timer);
      timers.current.delete(id);
    }
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, tone: ToastTone = "success") => {
      const id = ++nextToastId;
      setToasts((current) => [
        ...current.slice(-2),
        { id, message, tone },
      ]);

      const timer = window.setTimeout(
        () => dismiss(id),
        tone === "error" ? 5000 : 3200,
      );
      timers.current.set(id, timer);
    },
    [dismiss],
  );

  useEffect(() => {
    const activeTimers = timers.current;
    return () => {
      activeTimers.forEach((timer) => window.clearTimeout(timer));
      activeTimers.clear();
    };
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-[80] flex flex-col items-center gap-2 px-4 sm:items-end sm:px-6">
        {toasts.map((toast) => {
          const Icon = toneIcons[toast.tone];

          return (
            <div
              key={toast.id}
              role={toast.tone === "error" ? "alert" : "status"}
              aria-atomic="true"
              className={cn(
                "pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl border bg-surface p-3 shadow-card",
                toneStyles[toast.tone],
              )}
            >
              <Icon
                className={cn(
                  "mt-0.5 size-5 shrink-0",
                  toneIconStyles[toast.tone],
                )}
                aria-hidden="true"
              />
              <p className="min-w-0 flex-1 break-words text-sm leading-6 text-foreground">
                {toast.message}
              </p>
              <button
                type="button"
                onClick={() => dismiss(toast.id)}
                aria-label={dictionary.toast.close}
                className="grid size-11 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return context;
}
