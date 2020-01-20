import { User } from './user.model';

export interface TokenUser {
  token: string;
  user: User;
}
