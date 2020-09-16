import { UserDTO } from '@smarthome/data';

export const fetchUserDetails = async (): Promise<UserDTO> =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 5
          ? resolve({
              email: 'test@test.com',
              firstName: 'Jan',
              lastName: 'Kowalski',
              phone: '123 456 789',
              userId: '42423123123',
              userStatus: 0,
            })
          : reject(new Error('Server error')),
      2000
    )
  );
