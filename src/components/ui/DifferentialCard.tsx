import { CheckCircle2, Star } from "lucide-react";

interface DifferentialCardProps {
  title: string;
  description: string;
  benefits?: string[];
  icon?: React.ReactNode;
}

export function DifferentialCard({ title, description, benefits, icon }: DifferentialCardProps) {
  return (
    <div className="tb-card-surface group relative p-8">
      <div className="relative z-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition-colors duration-200 group-hover:bg-red-600 group-hover:text-white">
          {icon || <Star className="w-6 h-6" />}
        </div>
        
        <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-red-600 transition-colors">{title}</h3>
        <p className="text-zinc-600 mb-6">{description}</p>
        
        {benefits && benefits.length > 0 && (
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start text-sm text-zinc-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
