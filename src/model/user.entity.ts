import { Column, Entity } from 'typeorm';
import { baseEntity } from './base.entity';

@Entity({ name: 'user' });
export class item extends baseEntity {
  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'varchar', length: 150 })
  description: string;
}
