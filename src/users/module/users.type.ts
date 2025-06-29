export type Tusers = {
  id: number;
  username: string;
  password: string;
  email: string;
};
export type Tuser = Omit<Tusers, 'id' | 'password'>;
