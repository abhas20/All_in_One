"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Data } from "@/Data/dummy_data"

const chartConfig = {
  userGain: {
    label: "userGain",
    color: "green",
  },
  userLost: {
    label: "userLost",
    color: "red",
  },
} satisfies ChartConfig

export function Barchat() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Data</CardTitle>
        <CardDescription>2020-2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={Data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="userGain" fill="var(--color-userGain)" radius={4} />
            <Bar dataKey="userLost" fill="var(--color-userLost)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total users
        </div>
      </CardFooter>
    </Card>
  )
}
