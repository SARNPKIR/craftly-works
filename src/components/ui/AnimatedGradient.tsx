
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedGradient = ({ className, children }: AnimatedGradientProps) => {
  return (
    <div className={cn(
      'relative overflow-hidden',
      className
    )}>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 animate-gradient-shift"
        style={{ 
          backgroundSize: '200% 200%',
          filter: 'blur(100px)',
          transform: 'translateZ(0)'
        }}
      />
      {children}
    </div>
  );
};

export default AnimatedGradient;
