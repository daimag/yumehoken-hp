import React from 'react';
import { cn } from '@/lib/utils';
import { gridStyles } from '@/lib/styles';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: keyof typeof gridStyles.cols;
  gap?: keyof typeof gridStyles.gap;
  className?: string;
}

export function Grid({
  children,
  cols = 3,
  gap = 'md',
  className,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        gridStyles.base,
        gridStyles.cols[cols],
        gridStyles.gap[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  span?: 1 | 2 | 3 | 4;
  className?: string;
}

export function GridItem({
  children,
  span,
  className,
  ...props
}: GridItemProps) {
  const spanClasses = span ? {
    1: '',
    2: 'md:col-span-2',
    3: 'md:col-span-3',
    4: 'md:col-span-4',
  }[span] : '';

  return (
    <div
      className={cn(spanClasses, className)}
      {...props}
    >
      {children}
    </div>
  );
}