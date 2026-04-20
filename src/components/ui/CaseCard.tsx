import { CheckCircle2, ArrowRight } from "lucide-react";

interface CaseCardProps {
  client: string;
  segment: string;
  situation: string;
  challenge: string;
  solution: string[];
  results: string[];
  testimonial?: {
    text: string;
    rating: number;
  };
}

export function CaseCard({ client, segment, situation, challenge, solution, results, testimonial }: CaseCardProps) {
  return (
    <div className="tb-card-surface group flex h-full flex-col overflow-hidden">
      <div className="relative border-b border-zinc-200 bg-zinc-50 p-6">
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full mb-3">
            {segment}
          </span>
          <h3 className="text-xl font-bold text-zinc-900 group-hover:text-red-600 transition-colors">{client}</h3>
        </div>
      </div>
      
      <div className="p-6 flex-grow space-y-6">
        <div>
          <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-2 flex items-center">
            <ArrowRight className="w-4 h-4 text-red-600 mr-2" />
            Situação
          </h4>
          <p className="text-zinc-600 text-sm pl-6">{situation}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-2 flex items-center">
            <ArrowRight className="w-4 h-4 text-red-600 mr-2" />
            Desafio
          </h4>
          <p className="text-zinc-600 text-sm pl-6">{challenge}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-2 flex items-center">
            <ArrowRight className="w-4 h-4 text-red-600 mr-2" />
            Solução Total Bateria
          </h4>
          <ul className="space-y-1 pl-6">
            {solution.map((item, idx) => (
              <li key={idx} className="text-zinc-600 text-sm flex items-start">
                <span className="text-red-600 mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
          <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-3">Resultados Alcançados</h4>
          <ul className="space-y-3">
            {results.map((item, idx) => (
              <li key={idx} className="text-zinc-800 font-medium text-sm flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {testimonial && (
        <div className="relative mt-auto bg-zinc-900 p-6 text-white">
          <div className="relative z-10">
            <div className="flex text-yellow-400 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="italic text-sm text-zinc-300 leading-relaxed">"{testimonial.text}"</p>
          </div>
        </div>
      )}
    </div>
  );
}
