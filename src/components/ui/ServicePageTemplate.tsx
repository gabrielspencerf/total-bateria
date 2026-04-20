import type { LucideIcon } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "../../hooks/useSEO";
import { PageTransition } from "../layout/PageTransition";
import { Breadcrumb } from "./Breadcrumb";
import { Button } from "./Button";
import { CTASection } from "./CTASection";

type ServiceBlockType = "list-card" | "list-plain" | "chips" | "highlight";

export interface ServiceBlockConfig {
  type: ServiceBlockType;
  title: string;
  icon?: LucideIcon;
  items?: string[];
  text?: string;
}

export interface ServiceIntroConfig {
  title: string;
  text: string;
  icon: LucideIcon;
}

export interface ServicePageConfig {
  title: string;
  subtitle: string;
  breadcrumbLabel: string;
  heroButtonText: string;
  intro?: ServiceIntroConfig;
  rows: ServiceBlockConfig[][];
  finalCta: {
    title: string;
    button: string;
  };
}

function renderBlockContent(block: ServiceBlockConfig) {
  const Icon = block.icon;

  if (block.type === "chips") {
    return (
      <>
        <h3 className="mb-6 flex items-center text-2xl font-bold text-zinc-900">
          {Icon ? <Icon className="w-8 h-8 text-red-600 mr-4" /> : null}
          {block.title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {(block.items ?? []).map((item) => (
            <span
              key={item}
              className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-full font-medium text-sm border border-zinc-200"
            >
              {item}
            </span>
          ))}
        </div>
      </>
    );
  }

  if (block.type === "highlight") {
    return (
      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
        <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
          {Icon ? <Icon className="w-6 h-6 text-red-600 mr-3" /> : null}
          {block.title}
        </h3>
        <p className="text-red-900 font-medium">{block.text}</p>
      </div>
    );
  }

  return (
    <>
      <h3 className="mb-6 flex items-center text-2xl font-bold text-zinc-900">
        {Icon ? <Icon className="mr-4 h-8 w-8 text-red-600" /> : null}
        {block.title}
      </h3>
      <ul className={block.type === "list-plain" ? "space-y-4" : "space-y-4"}>
        {(block.items ?? []).map((item) => (
          <li key={item} className="flex items-start text-zinc-700">
            <CheckCircle2 className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

function getRowClassName(columns: number) {
  if (columns === 3) {
    return "grid grid-cols-1 md:grid-cols-3 gap-6 mb-10";
  }

  return "grid grid-cols-1 md:grid-cols-2 gap-8 mb-10";
}

export function ServicePageTemplate({ config }: { config: ServicePageConfig }) {
  useSEO({
    title: config.title,
    description: config.subtitle,
  });

  return (
    <PageTransition>
      <div className="bg-zinc-900 py-16 text-white md:py-20">
        <div className="lp-container">
          <Breadcrumb
            items={[
              { label: "Serviços", path: "/servicos" },
              { label: config.breadcrumbLabel },
            ]}
          />
          <div className="max-w-4xl">
            <h1 className="mb-6 text-4xl font-black md:text-5xl">{config.title}</h1>
            <p className="mb-8 text-xl text-zinc-300">{config.subtitle}</p>
            <Link to="/contato">
              <Button size="lg">{config.heroButtonText}</Button>
            </Link>
          </div>
        </div>
      </div>

      <section className="bg-white py-16 md:py-20">
        <div className="lp-container">
          {config.intro ? (
            <div className="mx-auto mb-12 max-w-4xl">
              <h2 className="mb-6 flex items-center text-3xl font-black text-zinc-900">
                <config.intro.icon className="w-8 h-8 text-red-600 mr-4" />
                {config.intro.title}
              </h2>
              <p className="text-xl text-zinc-700 leading-relaxed">{config.intro.text}</p>
            </div>
          ) : null}

          {config.rows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className={getRowClassName(row.length)}>
              {row.map((block) => {
                const baseClass =
                  block.type === "highlight"
                    ? ""
                    : block.type === "chips" || block.type === "list-plain"
                      ? "space-y-8"
                      : "tb-card-static space-y-6 p-8";

                return (
                  <div key={`${block.title}-${rowIndex}`} className={baseClass}>
                    {renderBlockContent(block)}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title={config.finalCta.title}
        text=""
        buttonText={config.finalCta.button}
        variant="dark"
      />
    </PageTransition>
  );
}
