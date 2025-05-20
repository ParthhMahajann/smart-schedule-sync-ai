
import React from 'react';
import { 
  Code, Gauge, LineChart, MessageSquare, Search, Settings, UserRound, Users 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMember {
  role: string;
  count: number;
  icon: React.ReactNode;
  color: string;
}

const TeamCard = ({ className }: { className?: string }) => {
  const teamMembers: TeamMember[] = [
    { role: 'Developers', count: 5, icon: <Code size={16} />, color: 'bg-dashboard-blue' },
    { role: 'UX/UI Designers', count: 2, icon: <MessageSquare size={16} />, color: 'bg-dashboard-purple' },
    { role: 'QA Engineers', count: 2, icon: <Search size={16} />, color: 'bg-dashboard-amber' },
    { role: 'Product Manager', count: 1, icon: <Settings size={16} />, color: 'bg-dashboard-indigo' },
    { role: 'Data Scientist', count: 1, icon: <LineChart size={16} />, color: 'bg-dashboard-teal' },
    { role: 'Project Coordinator', count: 1, icon: <Gauge size={16} />, color: 'bg-dashboard-green' },
  ];

  const totalMembers = teamMembers.reduce((sum, member) => sum + member.count, 0);

  return (
    <div className={cn("bg-white rounded-lg border border-gray-200 shadow-sm p-6", className)}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-medium text-gray-900">Team Composition</h3>
        <div className="flex items-center gap-2">
          <Users size={18} className="text-gray-500" />
          <span className="text-gray-900 font-semibold">{totalMembers} members</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={cn("p-2 rounded-full", `bg-${member.color}/10`)}>
                <div className={cn("text-white p-1 rounded-full", member.color)}>
                  {member.icon}
                </div>
              </div>
              <span className="text-sm text-gray-700">{member.role}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{member.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
