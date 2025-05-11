export interface IContacts {
  id: number;
  whatsApp: string;
  telegram: string;
  linkedIn: string;
  phone: string;
  email: string;
  cv: string;
  website: string;
  github: string;
  codewars: string;
}
export type IContact = Omit<IContacts, 'id'>;
