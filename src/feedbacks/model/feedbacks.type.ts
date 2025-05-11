export interface IFeedbacks {
  id: number;
  name: string;
  date: Date;
  description: string;
  position: string;
  companyTitle: string;
  logo: string;
}
export type IFeedback = Omit<IFeedbacks, 'id'>;
