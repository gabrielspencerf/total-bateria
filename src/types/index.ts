export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  slug: string;
  icon?: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Segment {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}

export interface CaseStudy {
  id: string;
  client: string;
  situation: string;
  challenge: string;
  solution: string[];
  results: string[];
  testimonial?: Testimonial;
}
