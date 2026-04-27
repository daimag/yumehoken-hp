import React from 'react';
import { cn } from '@/lib/utils';
import { sectionStyles, containerStyles } from '@/lib/styles';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  padding?: keyof typeof sectionStyles.padding;
  background?: keyof typeof sectionStyles.background;
  containerSize?: keyof typeof containerStyles.maxWidth;
  container?: boolean;
  className?: string;
}

export function Section({
  children,
  padding = 'md',
  background = 'white',
  containerSize = 'lg',
  container = true,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        sectionStyles.base,
        sectionStyles.padding[padding],
        sectionStyles.background[background],
        className
      )}
      {...props}
    >
      {container ? (
        <div className={cn(containerStyles.base, containerStyles.maxWidth[containerSize])}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center mx-auto max-w-3xl',
        className
      )}
    >
      {subtitle && (
        <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}