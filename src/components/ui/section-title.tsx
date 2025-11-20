
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  center = false,
  className 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-12", 
      center && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-accent mt-4 rounded-full mx-auto" style={center ? {} : {marginLeft: 0}} />
    </div>
  );
}
