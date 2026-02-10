import { Leaf } from 'lucide-react';
import { useAppName } from '../hooks/useQueries';
import { Skeleton } from './ui/skeleton';

export function BrandHeader() {
  const { data: appName, isLoading } = useAppName();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/generated/sabji-wala-logo.dim_512x512.png" 
            alt="Sabji wala logo" 
            className="h-10 w-10 rounded-lg"
          />
          {isLoading ? (
            <Skeleton className="h-7 w-32" />
          ) : (
            <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              {appName}
              <Leaf className="h-5 w-5 text-primary" />
            </h1>
          )}
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#freshness" className="text-muted-foreground hover:text-foreground transition-colors">
            Our Promise
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#why-choose" className="text-muted-foreground hover:text-foreground transition-colors">
            Why Choose Us
          </a>
        </nav>
      </div>
    </header>
  );
}
