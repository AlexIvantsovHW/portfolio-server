export type TFeedbacks = {
  id: number;
  name: string;
  date: Date;
  description: string;
  position: string;
  companyTitle: string;
  logo: string;
  country: string;
  city: string;
};
export type TFeedback = Omit<TFeedbacks, 'id'>;
