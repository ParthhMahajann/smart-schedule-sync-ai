
import React from 'react';
import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatusTableProps {
  title: string;
  headers: string[];
  rows: {
    [key: string]: string | number | React.ReactNode;
  }[];
  className?: string;
}

const StatusTable = ({ title, headers, rows, className }: StatusTableProps) => {
  return (
    <div className={cn("bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden", className)}>
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              {headers.map((header, index) => (
                <th 
                  key={index} 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {headers.map((header, headerIndex) => {
                  const key = header.toLowerCase().replace(/ /g, '_');
                  const value = row[key];
                  
                  // Special formatting for variance
                  if (key === 'variance') {
                    const numValue = typeof value === 'string' ? parseFloat(value) : Number(value);
                    const isPositive = numValue > 0;
                    const isNegative = numValue < 0;
                    
                    return (
                      <td key={headerIndex} className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center">
                          {isPositive ? (
                            <ArrowUpIcon className="w-4 h-4 mr-1 text-green-500" />
                          ) : isNegative ? (
                            <ArrowDownIcon className="w-4 h-4 mr-1 text-red-500" />
                          ) : (
                            <MinusIcon className="w-4 h-4 mr-1 text-gray-400" />
                          )}
                          <span 
                            className={cn(
                              "font-medium",
                              isPositive && "text-green-600",
                              isNegative && "text-red-600",
                              !isPositive && !isNegative && "text-gray-500"
                            )}
                          >
                            {value}
                          </span>
                        </div>
                      </td>
                    );
                  }
                  
                  return (
                    <td key={headerIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatusTable;
