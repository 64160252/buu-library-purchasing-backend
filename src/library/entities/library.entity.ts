import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
} from 'typeorm';
import { Faculty } from 'src/faculties/entities/faculty.entity';
import { Department } from 'src/departments/entities/department.entity';

@Entity('library')
export class Library {
  @PrimaryGeneratedColumn()
  library_id: number;

  @Column({ unique: true })
  budget_year: number;

  @Column()
  budget_amount: number;

  @OneToMany(() => Faculty, (faculties) => faculties.library)
  faculties: Faculty[];

  @OneToMany(() => Department, (departments) => departments.library)
  departments: Department[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
