export type IPersonal = {
  id: number;
  username: string;
  surname: string;
  age: number;
  city: string;
  country: string;
  yearExperince: number;
  description: string;
};
export type IPerson = Omit<IPersonal, 'id'>;
