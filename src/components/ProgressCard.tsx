
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface ProgressCardProps {
  title: string;
  value: number;
  maxValue: number;
  format?: string;
  color?: string;
  icon?: React.ReactNode;
  className?: string;
}

const ProgressCard = ({
  title,
  value,
  maxValue,
  format = 'percent',
  color = 'bg-dashboard-teal',
  icon,
  className,
}: ProgressCardProps) => {
  const percentage = (value / maxValue) * 100;
  
  const formattedValue = format === 'percent' 
    ? `${Math.round(percentage)}%` 
    : format === 'currency' 
    ? `$${value.toLocaleString()}` 
    : value.toString();
  
  return (
    <div className={cn("bg-white p-6 rounded-lg border border-gray-200 shadow-sm", className)}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-gray-700">{title}</h3>
        {icon && <div className="text-dashboard-teal">{icon}</div>}
      </div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-2xl font-bold text-gray-900">{formattedValue}</span>
        {format === 'percent' && (
          <span className="text-sm text-gray-500">of {maxValue}</span>
        )}
      </div>
      <Progress value={percentage} className={cn("h-2", color)} />
    </div>
  );
};

export default ProgressCard;
