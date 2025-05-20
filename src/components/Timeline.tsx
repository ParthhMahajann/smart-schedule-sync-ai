
import React from 'react';
import { CalendarDays, CheckCircle2, Clock, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TimelineItem {
  title: string;
  dateRange: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline = ({ items, className }: TimelineProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 size={18} className="text-green-500" />;
      case 'in-progress':
        return <Loader2 size={18} className="text-blue-500 animate-spin" />;
      case 'upcoming':
        return <Clock size={18} className="text-gray-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50';
      case 'in-progress':
        return 'border-blue-500 bg-blue-50';
      case 'upcoming':
        return 'border-gray-300 bg-gray-50';
      default:
        return 'border-gray-200';
    }
  };

  return (
    <div className={cn("bg-white rounded-lg border border-gray-200 shadow-sm", className)}>
      <div className="p-6 border-b border-gray-200 flex items-center justify-between">
        <h3 className="font-medium text-gray-900">Project Timeline</h3>
        <CalendarDays className="text-gray-500" size={18} />
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="relative pl-6">
              {index < items.length - 1 && (
                <div 
                  className={cn(
                    "absolute left-2.5 top-6 w-0.5 h-full", 
                    item.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                  )}
                ></div>
              )}
              
              <div className="flex items-start">
                <div 
                  className={cn(
                    "absolute left-0 p-1 rounded-full border-2", 
                    getStatusColor(item.status)
                  )}
                >
                  {getStatusIcon(item.status)}
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.dateRange}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
