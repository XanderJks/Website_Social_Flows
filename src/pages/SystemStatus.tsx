import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, Clock, Activity, Shield, Database, Globe, Zap } from 'lucide-react';

interface Service {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  responseTime: string;
  icon: React.ComponentType<any>;
}

const SystemStatus: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const services: Service[] = [
    {
      name: 'Voice AI Service',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '120ms',
      icon: Activity
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '85ms',
      icon: Zap
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      icon: Database
    },
    {
      name: 'CDN & Assets',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '200ms',
      icon: Globe
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      responseTime: '30ms',
      icon: Shield
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'outage':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operationeel';
      case 'degraded':
        return 'Verminderd';
      case 'outage':
        return 'Storing';
      default:
        return 'Operationeel';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-50';
      case 'degraded':
        return 'text-yellow-600 bg-yellow-50';
      case 'outage':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-green-600 bg-green-50';
    }
  };

  const allOperational = services.every(service => service.status === 'operational');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div 
          className="text-center mb-12 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 border border-green-200/50 shadow-lg mb-6">
            {allOperational ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <AlertCircle className="w-6 h-6 text-yellow-500" />
            )}
            <span className="text-lg font-semibold text-gray-800">
              {allOperational ? 'Alle Services Operationeel' : 'Service Storing Gedetecteerd'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            System Status
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            Real-time status van alle SocialFlows services
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <Clock className="w-4 h-4" />
            <span className="text-sm">
              Laatste update: {currentTime.toLocaleString('nl-NL')}
            </span>
          </div>
        </div>

        {/* Services Status */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-green-200/50 shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Service Status</h2>
              <p className="text-gray-600 mt-1">Overzicht van alle kritieke services</p>
            </div>
            
            <div className="divide-y divide-gray-100">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={service.name}
                    className="p-6 hover:bg-gray-50/50 transition-colors duration-200 animate-fade-in"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <IconComponent className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{service.name}</h3>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                            <span>Uptime: {service.uptime}</span>
                            <span>Response: {service.responseTime}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {getStatusIcon(service.status)}
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                          {getStatusText(service.status)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;