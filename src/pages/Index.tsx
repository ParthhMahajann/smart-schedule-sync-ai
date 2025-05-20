
import React from 'react';
import Header from '@/components/Header';
import ProgressCard from '@/components/ProgressCard';
import StatusTable from '@/components/StatusTable';
import TeamCard from '@/components/TeamCard';
import RiskCard from '@/components/RiskCard';
import Timeline from '@/components/Timeline';
import ChartComponent from '@/components/ChartComponent';
import { 
  BarChart3, Calendar, CheckCircle, CircleDollarSign, Clock, ListTodo, Target, Users
} from 'lucide-react';

const Index = () => {
  // KPI data for the chart
  const kpiData = [
    {
      name: 'User Retention',
      target: 80,
      current: 78,
    },
    {
      name: 'Task Completion',
      target: 95,
      current: 92,
    },
    {
      name: 'System Uptime',
      target: 99.9,
      current: 99.95,
    },
    {
      name: 'Avg Sync Time',
      target: 100,
      current: 90, // Normalized for the chart (lower is better)
    },
    {
      name: 'User Satisfaction',
      target: 90, // 4.5/5 as percentage
      current: 86, // 4.3/5 as percentage
    },
  ];

  // KPI data for the table
  const kpiTableData = [
    { key_performance_indicator: 'User Retention (7-day)', target: '80%', current_status: '78%', variance: '-2%' },
    { key_performance_indicator: 'Task Completion Rate', target: '95%', current_status: '92%', variance: '-3%' },
    { key_performance_indicator: 'System Uptime', target: '99.9%', current_status: '99.95%', variance: '+0.05%' },
    { key_performance_indicator: 'Average Sync Time', target: '<3 sec', current_status: '2.7 sec', variance: '+0.3 sec' },
    { key_performance_indicator: 'User Satisfaction', target: '4.5/5', current_status: '4.3/5', variance: '-0.2' },
  ];

  // Timeline data
  const timelineData = [
    { title: 'Analyze and implement beta user feedback', dateRange: 'May 25-June 15, 2025', status: 'upcoming' as const },
    { title: 'Complete final feature implementations', dateRange: 'June 16-July 10, 2025', status: 'upcoming' as const },
    { title: 'System-wide performance optimization', dateRange: 'July 11-31, 2025', status: 'upcoming' as const },
    { title: 'Final QA and bug fixing', dateRange: 'August 1-15, 2025', status: 'upcoming' as const },
    { title: 'Marketing preparation and deployment', dateRange: 'August 16-25, 2025', status: 'upcoming' as const },
    { title: 'Official launch', dateRange: 'August 30, 2025', status: 'upcoming' as const },
  ];

  // Risk data
  const riskData = [
    { 
      name: 'API rate limiting from integration partners', 
      probability: 'Medium' as const, 
      impact: 'High' as const, 
      mitigation: 'Negotiating enterprise API access, implementing caching system' 
    },
    { 
      name: 'Data privacy compliance updates', 
      probability: 'Low' as const, 
      impact: 'High' as const, 
      mitigation: 'Monthly compliance review meetings, external audit scheduled' 
    },
    { 
      name: 'Competitor feature release', 
      probability: 'Medium' as const, 
      impact: 'Medium' as const, 
      mitigation: 'Accelerated feature roadmap for key differentiators' 
    },
    { 
      name: 'Beta testing user engagement decline', 
      probability: 'Low' as const, 
      impact: 'Medium' as const, 
      mitigation: 'Implemented incentive program and feedback-driven updates' 
    },
  ];

  // Challenges data
  const challengesData = [
    { challenge: 'AI scheduling algorithm performance', impact: 'Medium', mitigation_strategy: 'Algorithm refinement and expanded training data', status: 'In Progress' },
    { challenge: 'Android synchronization delays', impact: 'Low', mitigation_strategy: 'Dedicated sprint for optimization in June', status: 'Planned' },
    { challenge: 'Third-party calendar migration issues', impact: 'Medium', mitigation_strategy: 'Created custom migration tools and documentation', status: 'Completed' },
    { challenge: 'User interface complexity feedback', impact: 'Low', mitigation_strategy: 'Simplified design for primary functions implemented', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-8">
        {/* Project Summary Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <Clock size={14} />
              Beta Testing Phase
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProgressCard 
              title="Completion" 
              value={68} 
              maxValue={100} 
              color="bg-dashboard-blue" 
              icon={<CheckCircle />}
            />
            <ProgressCard 
              title="Budget Utilization" 
              value={562400} 
              maxValue={825000} 
              format="currency"
              color="bg-dashboard-green" 
              icon={<CircleDollarSign />}
            />
            <ProgressCard 
              title="Timeline" 
              value={68} 
              maxValue={100} 
              color="bg-dashboard-indigo"
              icon={<Calendar />} 
            />
            <ProgressCard 
              title="Tasks Completed" 
              value={92} 
              maxValue={100} 
              color="bg-dashboard-purple"
              icon={<ListTodo />} 
            />
          </div>
        </section>

        {/* KPI Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Against KPIs</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ChartComponent 
              title="Key Metrics" 
              data={kpiData} 
              className="lg:col-span-2"
            />
            <div className="flex flex-col gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="text-dashboard-teal" size={20} />
                  <h3 className="font-medium text-gray-700">Project Details</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Start Date</span>
                    <span className="font-medium">Jan 15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Target Completion</span>
                    <span className="font-medium">Aug 30, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Team Size</span>
                    <span className="font-medium">12 members</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Budget Status</span>
                    <span className="font-medium text-green-600">2.4% Under</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Beta Users</span>
                    <span className="font-medium">2,500</span>
                  </div>
                </div>
              </div>
              <TeamCard />
            </div>
          </div>
        </section>

        {/* KPI Table Section */}
        <section className="mb-8">
          <StatusTable 
            title="Performance Metrics" 
            headers={['Key Performance Indicator', 'Target', 'Current Status', 'Variance']}
            rows={kpiTableData}
          />
        </section>

        {/* Timeline & Risks Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Timeline items={timelineData} />
          <RiskCard risks={riskData} />
        </div>

        {/* Challenges Section */}
        <section className="mb-8">
          <StatusTable 
            title="Challenges and Mitigations" 
            headers={['Challenge', 'Impact', 'Mitigation Strategy', 'Status']}
            rows={challengesData}
          />
        </section>

        {/* Recommendations Section */}
        <section>
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h3 className="font-medium text-gray-900 mb-4">Recommendations</h3>
            <ol className="list-decimal list-inside space-y-3 pl-2">
              <li className="text-gray-700"><span className="font-medium">Increase QA Resources:</span> Add one temporary QA engineer to support testing during the final development phase.</li>
              <li className="text-gray-700"><span className="font-medium">Prioritize Mobile Performance:</span> Focus optimization efforts on Android synchronization issues.</li>
              <li className="text-gray-700"><span className="font-medium">Enhance User Onboarding:</span> Develop interactive tutorials based on beta user feedback.</li>
              <li className="text-gray-700"><span className="font-medium">Expedite Enterprise Features:</span> Accelerate development of team scheduling capabilities to differentiate from competitors.</li>
            </ol>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="container">
          <p className="text-center text-sm text-gray-500">
            Smart Calendar Project Summary Report • May 20, 2025 • Project Management Team
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
