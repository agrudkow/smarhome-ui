import { UserDTO } from '@smarthome/data';

export type SignUpProps = Omit<UserDTO, 'userId' | 'userStatus'> & {
  idToken: string;
};

export const signUp: (data: SignUpProps) => Promise<void> = async () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 5 ? resolve() : reject(new Error('Server error')),
      500
    )
  );
