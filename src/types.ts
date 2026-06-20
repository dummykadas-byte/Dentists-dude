export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  rating: number;
  review: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};
