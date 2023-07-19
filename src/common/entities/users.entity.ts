import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  userId: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'last_login' })
  lastLogin: Date;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @Column({ name: 'user_role' })
  userRole: string;

  @Column({ name: 'create_at' })
  createAt: Date;
}
