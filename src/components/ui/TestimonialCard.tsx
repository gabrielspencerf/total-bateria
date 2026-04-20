import { Quote } from "lucide-react";

interface TestimonialCardProps {
  role: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ role, text, rating }: TestimonialCardProps) {
  return (
    <div className="group relative rounded-2xl border border-zinc-700 bg-zinc-800 p-8 shadow-sm transition-colors duration-200 hover:border-red-600/35 hover:shadow-md">
      <div className="relative z-10">
        <Quote className="mb-6 size-10 text-red-500/25 transition-colors duration-200 group-hover:text-red-500/45" />
        
        <div className="flex text-yellow-500 mb-6">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-zinc-300 text-lg italic mb-8 leading-relaxed">"{text}"</p>
        
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-zinc-400 font-bold mr-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
            {role.charAt(0)}
          </div>
          <div className="font-bold text-white">{role}</div>
        </div>
      </div>
    </div>
  );
}
