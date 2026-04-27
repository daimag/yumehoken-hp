import React from 'react';
import { cn } from '@/lib/utils';

interface MinimalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  className?: string;
}

export function MinimalCard({
  children,
  hover = true,
  padding = 'md',
  className,
  ...props
}: MinimalCardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'bg-white border border-neutral-200 transition-all duration-300',
        hover && 'hover:shadow-lg hover:-translate-y-1',
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function CardHeader({
  title,
  subtitle,
  icon,
  className,
}: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {icon && (
        <div className="mb-4 flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      {subtitle && (
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({
  children,
  className,
}: CardContentProps) {
  return (
    <div className={cn('text-muted-foreground', className)}>
      {children}
    </div>
  );
}