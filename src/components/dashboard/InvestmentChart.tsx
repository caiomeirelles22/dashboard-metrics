"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import { Campaign } from "../../types/dashboard";

const formatCurrencyBRL = (value: number): string => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

interface InvestmentChartProps {
  campaigns: Campaign[];
}

interface BarShapeProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
  fill?: string;
  payload?: {
    name: string;
    value: number;
  };
}

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

const channelLabels: Record<string, string> = {
  googleAds: "Google Ads",
  facebookAds: "Facebook Ads",
  instagram: "Instagram",
  email: "E-mail",
};

export function InvestmentChart({ campaigns }: InvestmentChartProps) {
  const data = React.useMemo(() => {
    if (!campaigns || campaigns.length === 0) return [];

    const groups = campaigns.reduce(
      (acc, campaign) => {
        const channel = channelLabels[campaign.channel] || campaign.channel;
        acc[channel] = (acc[channel] || 0) + campaign.investment;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(groups).map(([name, value]) => ({
      name,
      value,
    }));
  }, [campaigns]);

  if (data.length === 0) {
    return (
      <div className="flex h-72 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm text-slate-500 font-medium">
          Sem dados de investimento para os filtros selecionados.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
          Investimento por Canal
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Distribuição financeira total baseada nos critérios aplicados.
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e2e8f0"
              className="dark:stroke-slate-800"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              tickFormatter={(value: number) => `R$ ${value / 1000}k`}
            />
            <Tooltip
              cursor={{ fill: "rgba(148, 163, 184, 0.1)" }}
              contentStyle={{
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              }}
              itemStyle={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#1e293b",
              }}
              formatter={(
                value: number | string | (number | string)[] | undefined,
              ) => {
                if (value === undefined)
                  return [formatCurrencyBRL(0), "Investimento"];
                const numericValue =
                  typeof value === "number" ? value : Number(value) || 0;
                return [formatCurrencyBRL(numericValue), "Investimento"];
              }}
            />
            <Bar
              dataKey="value"
              barSize={40}
              animationDuration={1200}
              shape={(props: BarShapeProps) => {
                const { index = 0, ...rest } = props;
                return (
                  <Rectangle
                    {...rest}
                    fill={COLORS[index % COLORS.length]}
                    radius={[4, 4, 0, 0]}
                  />
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
