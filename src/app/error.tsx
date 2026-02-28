"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { AlertCircle, RefreshCcw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Dashboard Error:", error);

    toast.error("Falha ao carregar os dados", {
      description:
        "Ocorreu um problema de comunicação com o servidor. Por favor, tente novamente.",
      duration: 5000,
    });
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-4 text-center">
      <div className="mb-6 rounded-full bg-rose-100 p-4 dark:bg-rose-500/10">
        <AlertCircle className="h-10 w-10 text-rose-600 dark:text-rose-500" />
      </div>

      <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
        Oops! Algo correu errado.
      </h2>

      <p className="mb-8 max-w-md text-slate-500 dark:text-slate-400">
        Não foi possível carregar as métricas do dashboard neste momento.(Erro:{" "}
        {error.message || "Desconhecido"}
        ).
      </p>

      <button
        onClick={() => reset()}
        className="group flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200"
      >
        <RefreshCcw className="h-4 w-4 transition-transform group-hover:rotate-180" />
        Tentar Novamente
      </button>
    </div>
  );
}
