import { UserDTO } from '@smarthome/data';

export const fetchUserDetails = (): UserDTO => ({
  email: 'test@test.com',
  firstName: 'Jan',
  lastName: 'Kowalski',
  phone: '123 456 789',
  userId: '42423123123',
  userStatus: 0,
});
