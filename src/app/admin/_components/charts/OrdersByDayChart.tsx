"use client";

import { formatCurrency } from "@/lib/formatters";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type OrderByDayChartProps = {
  data: {
    date: string;
    totalSales: number;
  }[];
};
export function OrdersByDayChart({ data }: OrderByDayChartProps) {
  return (
    <ResponsiveContainer width={"100%"} minHeight={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="hsl(var(--muted))" />
        <XAxis dataKey={"date"} stroke="hsl(var(--primary))" />
        <YAxis
          tickFormatter={(tick) => formatCurrency(tick)}
          stroke="hsl(var(--primary))"
        />
        <Tooltip formatter={(value) => formatCurrency(value as number)} />
        <Line
          dataKey={"totalSales"}
          type="monotone"
          name="Total Sales"
          dot={false}
          stroke="hsl(var(--primary))"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
