import { Tlogin } from './login.type';

export type Tsignin = Pick<Tlogin, 'email' | 'password'> & { username: string };
