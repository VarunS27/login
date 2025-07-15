import React, { useEffect, useState } from 'react';
import { 
  User, 
  Bell, 
  Search, 
  Settings, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  Calendar,
  Mail,
  FileText,
  BarChart3,
  PieChart,
  MessageSquare,
  Shield,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Heart,
  Star,
  Zap,
  Target,
  Award,
  Clock,
  Filter,
  Download,
  Share2,
  MoreHorizontal
} from 'lucide-react';

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setMounted(true);
    
    // Simulate API call
    setTimeout(() => {
      setMessage('Welcome back! Your dashboard is ready.');
    }, 1000);

    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { title: 'Total Revenue', value: '$124,592', change: '+12.5%', icon: DollarSign, color: 'text-green-400' },
    { title: 'Active Users', value: '2,847', change: '+8.2%', icon: Users, color: 'text-blue-400' },
    { title: 'Growth Rate', value: '23.8%', change: '+4.1%', icon: TrendingUp, color: 'text-purple-400' },
    { title: 'Performance', value: '98.2%', change: '+2.3%', icon: Activity, color: 'text-yellow-400' }
  ];

  const recentActivity = [
    { action: 'New user registration', time: '2 minutes ago', icon: Users },
    { action: 'Payment received', time: '5 minutes ago', icon: DollarSign },
    { action: 'Report generated', time: '12 minutes ago', icon: FileText },
    { action: 'System backup completed', time: '1 hour ago', icon: Shield }
  ];

  const quickActions = [
    { title: 'Create Report', icon: FileText, description: 'Generate analytics report' },
    { title: 'Add User', icon: Users, description: 'Invite new team member' },
    { title: 'Send Message', icon: MessageSquare, description: 'Broadcast to users' },
    { title: 'View Analytics', icon: BarChart3, description: 'Detailed insights' }
  ];

  const ParticleBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white opacity-5 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 4 + 3}s`
          }}
        />
      ))}
    </div>
  );

  const StatCard = ({ stat, index }) => (
    <div 
      className={`bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-white hover:border-opacity-30 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gray-800 ${stat.color}`}>
          <stat.icon className="w-6 h-6" />
        </div>
        <span className="text-green-400 text-sm font-medium">{stat.change}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
      <p className="text-gray-400 text-sm">{stat.title}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background Elements */}
      

      {/* Header */}
      <header className="relative z-10 bg-black bg-opacity-50 backdrop-blur-xl border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white focus:ring-2 focus:ring-white focus:ring-opacity-20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            <div className="text-right hidden md:block">
              <p className="text-sm text-gray-400">Welcome back!</p>
              <p className="text-white font-medium">Admin User</p>
            </div>
            
            <button className="relative p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110">
              <Bell className="w-6 h-6" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {notifications}
                </span>
              )}
            </button>
            
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-all duration-300 hover:scale-110">
              <Settings className="w-6 h-6" />
            </button>
            
            <div className="w-10 h-10 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex relative z-10">
        
        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-20 w-64 bg-black bg-opacity-60 backdrop-blur-xl border-r border-gray-800 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
          <div className="p-6 space-y-6">
            
            {/* Time Display */}
            <div className="bg-gray-900 bg-opacity-80 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="text-gray-400 text-sm">
                {currentTime.toLocaleDateString()}
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {[
                { icon: BarChart3, label: 'Analytics', active: true },
                { icon: Users, label: 'Users' },
                { icon: FileText, label: 'Reports' },
                { icon: MessageSquare, label: 'Messages' },
                { icon: Calendar, label: 'Calendar' },
                { icon: Settings, label: 'Settings' }
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gray-800 hover:scale-105 ${
                    item.active ? 'bg-white text-black' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </nav>

            {/* Quick Actions */}
            <div className="bg-gray-900 bg-opacity-80 rounded-xl p-4">
              <h3 className="text-white font-semibold mb-3">Quick Actions</h3>
              <div className="space-y-2">
                {quickActions.slice(0, 2).map((action, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    <action.icon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">{action.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="flex-1 p-6 space-y-8">
          
          {/* Welcome Message */}
          <div className={`bg-gradient-to-r from-white to-gray-200 text-black rounded-2xl p-6 shadow-2xl transform transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Good Morning! 🌟</h2>
                <p className="text-gray-700">{message || 'Loading your personalized dashboard...'}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-red-500 animate-pulse" />
                <Star className="w-6 h-6 text-yellow-500 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>

          {/* Charts and Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Chart Card */}
            <div className={`bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Analytics Overview</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-800 rounded-lg transition-all duration-300">
                    <Filter className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-800 rounded-lg transition-all duration-300">
                    <Download className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
              
              {/* Mock Chart */}
              <div className="h-64 bg-gray-800 bg-opacity-50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <PieChart className="w-16 h-16 text-white mx-auto mb-4 animate-pulse" />
                  <p className="text-gray-400">Interactive Chart Area</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className={`bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Recent Activity</h3>
                <button className="text-gray-400 hover:text-white transition-colors duration-300">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-300">
                    <div className="p-2 bg-gray-800 rounded-lg">
                      <activity.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{activity.action}</p>
                      <p className="text-gray-400 text-sm">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 text-left transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:border-white hover:border-opacity-30 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gray-800 rounded-xl">
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{action.title}</h4>
                <p className="text-gray-400 text-sm">{action.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 bg-white text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-3xl">
        <Zap className="w-6 h-6" />
      </button>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(255, 255, 255, 0.15);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;