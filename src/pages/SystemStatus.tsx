import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, XCircle, Clock, Activity, Server, Database, Wifi, Shield } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  responseTime: string;
  icon: React.ReactNode;
  description: string;
}

interface Incident {
  id: string;
  title: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'minor' | 'major' | 'critical';
  timestamp: string;
  description: string;
  updates: {
    time: string;
    message: string;
  }[];
}

export function SystemStatus() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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

  const incidents: Incident[] = [
    {
      id: '1',
      title: 'Geplande onderhoudswerkzaamheden',
      status: 'resolved',
      severity: 'minor',
      timestamp: '2025-01-19 02:00 CET',
      description: 'Routine database optimalisatie uitgevoerd',
      updates: [
        {
          time: '02:45 CET',
          message: 'Onderhoud succesvol afgerond. Alle services zijn weer volledig operationeel.'
        },
        {
          time: '02:00 CET',
          message: 'Onderhoudswerkzaamheden gestart. Minimale impact verwacht.'
        }
      ]
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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'minor':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'major':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
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
                Laatste update: {new Date().toLocaleString('nl-NL', { 
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

          {/* Incidents */}
          <div className={`mb-16 transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Recente Incidenten</h3>
            {incidents.length > 0 ? (
              <div className="space-y-6">
                {incidents.map((incident) => (
                  <div 
                    key={incident.id}
                    className="bg-white/90 backdrop-blur-xl rounded-xl border border-green-200/30 shadow-lg p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h4 className="text-lg font-semibold text-gray-800 mr-3">{incident.title}</h4>
                          <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getSeverityColor(incident.severity)}`}>
                            {incident.severity === 'minor' ? 'Klein' : 
                             incident.severity === 'major' ? 'Groot' : 'Kritiek'}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{incident.description}</p>
                        <p className="text-sm text-gray-500">{incident.timestamp}</p>
                      </div>
                      <div className="flex items-center">
                        {incident.status === 'resolved' ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <Clock className="w-5 h-5 text-yellow-600" />
                        )}
                        <span className={`ml-2 font-semibold ${
                          incident.status === 'resolved' ? 'text-green-600' : 'text-yellow-600'
                        }`}>
                          {incident.status === 'resolved' ? 'Opgelost' : 'In behandeling'}
                        </span>
                      </div>
                    </div>
                    
                    {incident.updates.length > 0 && (
                      <div className="border-t border-gray-200/50 pt-4">
                        <h5 className="text-sm font-semibold text-gray-800 mb-3">Updates:</h5>
                        <div className="space-y-2">
                          {incident.updates.map((update, index) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <div>
                                <p className="text-sm text-gray-700">{update.message}</p>
                                <p className="text-xs text-gray-500 mt-1">{update.time}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/90 backdrop-blur-xl rounded-xl border border-green-200/30 shadow-lg p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Geen recente incidenten</h4>
                <p className="text-gray-600">Alle systemen functioneren normaal</p>
              </div>
            )}
          </div>

          {/* Performance Metrics */}
          <div className={`transition-all duration-800 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Performance Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-xl rounded-xl border border-green-200/30 shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Uptime (30 dagen)</h4>
                <p className="text-3xl font-bold text-green-600">99.98%</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-xl rounded-xl border border-green-200/30 shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Gem. Response Tijd</h4>
                <p className="text-3xl font-bold text-green-600">127ms</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-xl rounded-xl border border-green-200/30 shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Succesvolle Calls</h4>
                <p className="text-3xl font-bold text-green-600">99.94%</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}