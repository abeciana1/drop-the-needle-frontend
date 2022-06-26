export const AUTHORIZATION = `Bearer ${process.env.AUTH_TOKEN}`

export interface SignUpAPITypes {
    name: string;
    email: string;
    password: string;
}