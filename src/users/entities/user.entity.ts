import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'first_name', nullable: true, default: null })
  public firstName: string;

  @Column({ type: 'decimal', nullable: true, default: null })
  public weight: number;

  @Column({ name: 'last_name', nullable: true, default: null })
  public lastName: string;

  @Column({ unique: true, nullable: false })
  public email: string;

  @Column()
  public password: string;
}