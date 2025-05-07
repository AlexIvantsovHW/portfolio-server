import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IUniversity } from '../model/university.interface';

@Entity('universities')
export class UniversityEntity implements IUniversity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ nullable: false })
  companyTitle: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  link: string;

  @Column({ nullable: false })
  companyLogo: string;

  @Column({ nullable: false })
  certificate: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  startAt: string;

  @Column({ nullable: false })
  endAt: string;
}
