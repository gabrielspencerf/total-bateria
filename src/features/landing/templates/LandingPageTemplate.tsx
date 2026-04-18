import { PageTransition } from "../../../components/layout/PageTransition";
import type { LandingPageConfig } from "../types";
import {
  AuthorityBlock,
  AudienceBlock,
  BenefitsBlock,
  ComparisonBlock,
  CoverageBlock,
  DifferentialsBlock,
  FaqBlock,
  FinalCtaBlock,
  HeroBlock,
  PostServiceWidgetsBlock,
  ProblemBlock,
  ProcessBlock,
  ServicesBlock,
  SocialProofBlock,
  SolutionBlock,
} from "../blocks";

interface LandingPageTemplateProps {
  config: LandingPageConfig;
}

export function LandingPageTemplate({ config }: LandingPageTemplateProps) {
  return (
    <PageTransition>
      <HeroBlock
        data={config.hero}
        primaryCta={config.heroActions.primary}
        secondaryCta={config.heroActions.secondary}
      />
      <ProblemBlock data={config.problem} />
      <SolutionBlock data={config.solution} />
      {config.benefits && <BenefitsBlock data={config.benefits} />}
      <ServicesBlock data={config.services} defaultCta={config.finalCta.primary} />
      {config.postServiceWidgets && config.postServiceWidgets.length > 0 ? (
        <PostServiceWidgetsBlock widgets={config.postServiceWidgets} />
      ) : null}
      <DifferentialsBlock data={config.differentials} />
      {config.comparison && <ComparisonBlock data={config.comparison} />}
      {config.process && <ProcessBlock data={config.process} />}
      {config.coverage && <CoverageBlock data={config.coverage} />}
      {config.socialProof && <SocialProofBlock data={config.socialProof} />}
      <AudienceBlock data={config.audience} />
      <AuthorityBlock data={config.authority} />
      <FaqBlock data={config.faq} />
      <FinalCtaBlock data={config.finalCta} />
    </PageTransition>
  );
}
