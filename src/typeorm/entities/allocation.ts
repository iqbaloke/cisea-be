import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category_entity';
import { District } from './district_entity';
import { User } from './user_entity';
import { DetailAllocation } from './detail_allocation';

@Entity({ name: 'allocations' })
export class Allocation {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ nullable: true })
  nilai: number;

  @Column({ nullable: true })
  date?: Date;

  @Column({ nullable: true })
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;

  @Column()
  category_id?: number;
  @ManyToOne(() => Category, { nullable: true })
  @JoinColumn({ name: 'category_id' })
  category?: Category;

  @Column()
  district_id?: number;
  @ManyToOne(() => District, { nullable: true })
  @JoinColumn({ name: 'district_id' })
  district?: Category;

  @Column()
  user_id?: number;
  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @OneToOne(
    () => DetailAllocation,
    (allocationdetail) => allocationdetail.allocation,
  )
  allocationdetail: DetailAllocation;
}
