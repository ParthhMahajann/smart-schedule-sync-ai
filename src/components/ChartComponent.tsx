
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, Cell 
} from 'recharts';
import { cn } from '@/lib/utils';

interface ChartProps {
  title: string;
  data: any[];
  className?: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 shadow-md rounded-md">
        <p className="font-medium">{label}</p>
        <div className="flex gap-2 items-center mt-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: payload[0].color }}
          ></div>
          <p className="text-sm">{`Target: ${payload[0].value}%`}</p>
        </div>
        <div className="flex gap-2 items-center mt-1">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: payload[1].color }}
          ></div>
          <p className="text-sm">{`Current: ${payload[1].value}%`}</p>
        </div>
      </div>
    );
  }

  return null;
};

const ChartComponent = ({ title, data, className }: ChartProps) => {
  return (
    <div className={cn("bg-white rounded-lg border border-gray-200 shadow-sm", className)}>
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
      <div className="p-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              domain={[0, 100]}
              tickCount={6}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar name="Target" dataKey="target" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar name="Current" dataKey="current" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartComponent;
