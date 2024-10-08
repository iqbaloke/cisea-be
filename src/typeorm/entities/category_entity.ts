import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SubCategory } from './subcategory_entity';
import { Allocation } from './allocation';
import { DetailAllocation } from './detail_allocation';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column()
  jenis: string;

  @Column({ type: 'decimal' })
  kota: number;

  @Column({ type: 'decimal' })
  provinsi: number;

  @Column({ type: 'decimal' })
  pusat: number;


  @Column({ nullable: true })
  createdAt?: Date;

  @Column({ nullable: true })
  updatedAt?: Date;

  @OneToMany(() => SubCategory, (subcategory) => subcategory.category)
  subcategory: SubCategory;

  @OneToMany(() => Allocation, (allocation) => allocation.category)
  allocation: Allocation;

  @OneToMany(() => DetailAllocation, (allocationdetail) => allocationdetail.category)
  allocationdetail: DetailAllocation;

}
