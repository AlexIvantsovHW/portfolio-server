export type IPersonal = {
  id: number;
  username: string;
  surname: string;
  age: number;
  city: string;
  country: string;
  yearExperince: number;
  description: string;
  avatar: string;
  software_id: number[];
};
export type IPerson = Omit<IPersonal, 'id'>;
