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
      className="group block p-8 bg-white border border-zinc-200 rounded-2xl hover:border-red-600 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150 opacity-50" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
          {icon || <Zap className="w-6 h-6" />}
        </div>
        
        <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-600 mb-6 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center text-red-600 font-medium">
          Saiba mais
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
