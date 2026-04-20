import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
}

export function ServiceCard({ title, description, link, icon }: ServiceCardProps) {
  return (
    <Link
      to={link}
      className="tb-card-surface group relative block p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
    >
      <div className="relative z-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition-colors duration-200 group-hover:bg-red-600 group-hover:text-white">
          {icon || <Zap className="w-6 h-6" />}
        </div>
        
        <h3 className="mb-3 text-xl font-bold text-zinc-900 transition-colors group-hover:text-red-600">
          {title}
        </h3>
        <p className="text-zinc-600 mb-6 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center font-medium text-red-600">
          Saiba mais
          <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
