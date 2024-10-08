import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Allocation } from './allocation';
import { DetailAllocation } from './detail_allocation';

@Entity({ name: 'districts' })
export class District {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  createdAt?: Date;

  @Column({ nullable: true })
  updatedAt?: Date;

  @OneToMany(() => Allocation, (allocation) => allocation.district)
  allocation: Allocation;

  @OneToMany(() => DetailAllocation, (allocationdetail) => allocationdetail.category)
  allocationdetail: DetailAllocation;
}
