import { useState, useEffect } from '@/shared/libs';
import { AlertTriangle, RefreshCw, Home, WifiOff, Clock, Shield, Bug } from '@/shared/components';

const ErrorPage = () => {
 
  const [particles, setParticles] = useState([]);

  // Generate floating particles for animation
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);



  const errorTypes = {
    network: {
      icon: WifiOff,
      title: "Connection Lost",
      subtitle: "Unable to reach our servers",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    timeout: {
      icon: Clock,
      title: "Request Timeout",
      subtitle: "The request took too long to complete",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    auth: {
      icon: Shield,
      title: "Authentication Failed",
      subtitle: "Please login to continue",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    server: {
      icon: Bug,
      title: "Server Error",
      subtitle: "Something went wrong on our end",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    default: {
      icon: AlertTriangle,
      title: "Oops! Something went wrong",
      subtitle: "We're working to fix this issue",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    }
  };

  const currentError = errorTypes.default;
  const IconComponent = currentError.icon;

  return (
    <div className={`min-h-screen transition-colors duration-300 `}>
    

      <div className="gradient-bg relative overflow-hidden">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="floating-particle absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
          />
        ))}

        {/* Main Content */}
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="glass-card rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl">
            {/* Error Icon */}
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${currentError.bgColor} mb-6 pulse-error`}>
              <IconComponent className={`w-10 h-10 ${currentError.color}`} />
            </div>

            {/* Error Title */}
            <h1 className="text-3xl font-bold text-foreground mb-3">
              {currentError.title}
            </h1>

            {/* Error Subtitle */}
            <p className="text-muted-foreground text-lg mb-8">
              {currentError.subtitle}
            </p>

            {/* Error Code */}
            <div className="bg-muted/50 rounded-lg p-3 mb-8">
              <code className="text-sm text-muted-foreground font-mono">
                Error: FETCH_ERROR - Could not connect to server
              </code>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
               
                
                className={`w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <RefreshCw className={`w-5 h-5`} />
                Try Again
              </button>

              <button
                onClick={() => window.location.href = '/'}
                className="w-full flex items-center justify-center gap-3 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-semibold transition-all hover:bg-secondary/90 hover:scale-105 active:scale-95"
              >
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </div>

            {/* Help Text */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Need help? Contact{' '}
                <a
                  href="mailto:support@example.com"
                  className="text-primary hover:text-primary/80 underline transition-colors"
                >
                  support@example.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;