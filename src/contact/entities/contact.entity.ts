import { Column, Entity, PrimaryColumn } from 'typeorm';
import { IContacts } from '../module/contact.type';
@Entity('contact')
export class ContactEntity implements IContacts {
  @PrimaryColumn({ type: 'int' })
  id: number;
  @Column({ nullable: false })
  whatsApp: string;
  @Column({ nullable: false })
  telegram: string;
  @Column({ nullable: false })
  linkedIn: string;
  @Column({ nullable: false })
  phone: string;
  @Column({ nullable: false })
  email: string;
  @Column({ nullable: false })
  cv: string;
  @Column({ nullable: false })
  website: string;
  @Column({ nullable: false })
  codewars: string;
  @Column({ nullable: false })
  github: string;
}
