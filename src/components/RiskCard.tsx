
import React from 'react';
import { AlertCircle, AlertTriangle, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Risk {
  name: string;
  probability: 'Low' | 'Medium' | 'High';
  impact: 'Low' | 'Medium' | 'High';
  mitigation: string;
}

interface RiskCardProps {
  risks: Risk[];
  className?: string;
}

const RiskCard = ({ risks, className }: RiskCardProps) => {
  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'High':
        return <AlertCircle size={16} className="text-red-500" />;
      case 'Medium':
        return <AlertTriangle size={16} className="text-amber-500" />;
      case 'Low':
        return <HelpCircle size={16} className="text-blue-500" />;
      default:
        return null;
    }
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'High':
        return 'bg-red-50 text-red-700';
      case 'Medium':
        return 'bg-amber-50 text-amber-700';
      case 'Low':
        return 'bg-blue-50 text-blue-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className={cn("bg-white rounded-lg border border-gray-200 shadow-sm", className)}>
      <div className="p-6 border-b border-gray-200">
        <h3 className="font-medium text-gray-900">Risk Assessment</h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {risks.map((risk, index) => (
            <div key={index} className="p-4 border border-gray-100 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{risk.name}</h4>
                <div className="flex items-center gap-2">
                  <span className={cn("px-2 py-1 text-xs rounded-full", getRiskColor(risk.probability))}>
                    {getRiskIcon(risk.probability)} P: {risk.probability}
                  </span>
                  <span className={cn("px-2 py-1 text-xs rounded-full", getRiskColor(risk.impact))}>
                    {getRiskIcon(risk.impact)} I: {risk.impact}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600">{risk.mitigation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskCard;
