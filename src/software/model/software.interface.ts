export interface ISoftwares {
  id: number;
  title: string;
  logo: string;
}
export type ISoftware = Omit<ISoftwares, 'id'>;
