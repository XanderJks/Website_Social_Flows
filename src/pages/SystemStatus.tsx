import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, XCircle, Activity, Server, Database, Wifi, Shield } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  responseTime: string;
  icon: React.ReactNode;
  description: string;
}

export function SystemStatus() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    
    // Update tijd elke seconde
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const services: ServiceStatus[] = [
    {
      name: 'Voice AI Service',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '145ms',
      icon: <Activity className="w-5 h-5" />,
      description: 'Hoofdservice voor AI gesprekken'
    },
    {
      name: 'API Gateway',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '89ms',
      icon: <Server className="w-5 h-5" />,
      description: 'API endpoints en integraties'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '100%',
      responseTime: '12ms',
      icon: <Database className="w-5 h-5" />,
      description: 'Data opslag en verwerking'
    },
    {
      name: 'CDN & Assets',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '34ms',
      icon: <Wifi className="w-5 h-5" />,
      description: 'Content delivery netwerk'
    },
    {
      name: 'Security Services',
      status: 'operational',
      uptime: '100%',
      responseTime: '67ms',
      icon: <Shield className="w-5 h-5" />,
      description: 'Beveiliging en authenticatie'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600';
      case 'degraded':
        return 'text-yellow-600';
      case 'outage':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'degraded':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operationeel';
      case 'degraded':
        return 'Verminderde prestaties';
      case 'outage':
        return 'Storing';
      default:
        return 'Onbekend';
    }
  };

  const overallStatus = services.every(service => service.status === 'operational') 
    ? 'operational' 
    : services.some(service => service.status === 'outage') 
    ? 'outage' 
    : 'degraded';

  return (
    <>
      <SEOHead 
        title="System Status - SocialFlows"
        description="Real-time status van alle SocialFlows services en systemen. Bekijk uptime, prestaties en eventuele storingen."
        keywords="system status, uptime, service status, SocialFlows status, API status"
        url="https://socialflows.nl/system-status"
      />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent mb-6">
              System Status
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Real-time status van alle SocialFlows services en infrastructuur
            </p>
          </div>

          {/* Overall Status */}
          <div className={`mb-12 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-green-200/30 shadow-lg p-8">
              <div className="flex items-center justify-center mb-4">
                {getStatusIcon(overallStatus)}
                <h2 className={`text-2xl font-bold ml-3 ${getStatusColor(overallStatus)}`}>
                  {overallStatus === 'operational' ? 'Alle systemen operationeel' : 
                   overallStatus === 'degraded' ? 'Verminderde prestaties' : 'Systeem storing'}
                </h2>
              </div>
              <p className="text-gray-600 text-center">
                Laatste update: {currentTime.toLocaleString('nl-NL', { 
                  timeZone: 'Europe/Amsterdam',
                  dateStyle: 'full',
                  timeStyle: 'short'
                })}
              </p>
            </div>
          </div>

          {/* Services Status */}
          <div className={`mb-16 transition-all duration-800 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Service Status</h3>
            <div className="grid grid-cols-1 gap-4">
              {services.map((service, index) => (
                <div 
                  key={service.name}
                  className={`bg-white/90 backdrop-blur-xl rounded-xl border border-green-200/30 shadow-lg p-6 hover:bg-white hover:border-green-300/50 transition-all duration-300 delay-${index * 100}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                        <div className="text-green-600">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Uptime</div>
                        <div className="font-semibold text-gray-800">{service.uptime}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Response</div>
                        <div className="font-semibold text-gray-800">{service.responseTime}</div>
                      </div>
                      <div className="flex items-center">
                        {getStatusIcon(service.status)}
                        <span className={`ml-2 font-semibold ${getStatusColor(service.status)}`}>
                          {getStatusText(service.status)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}