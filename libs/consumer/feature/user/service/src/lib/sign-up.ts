import { UserDTO } from '@smarthome/data';

export interface SessionProps {
  idToken: string;
  expiresAt: number;
}

export type SignUpProps = Omit<UserDTO, 'userId' | 'userStatus'> & SessionProps;

export const signUp: (data: SignUpProps) => Promise<void> = async () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 5 ? resolve() : reject(new Error('Server error')),
      500
    )
  );
