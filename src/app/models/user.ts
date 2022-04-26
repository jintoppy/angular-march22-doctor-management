import { Role } from './role';

export type User = {
    role: Role;
    userId: number;
    username: string;
}

export type LoginResponse = {
    access_token: string,
    user: User
};

