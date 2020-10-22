import { UserDTO } from '@smarthome/data';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const updateUser = async (data: UserDTO): Promise<void> =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 5 ? resolve() : reject(new Error('Server error')),
      500
    )
  );
