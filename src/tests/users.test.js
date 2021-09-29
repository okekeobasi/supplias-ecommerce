import { supabase } from '../server/supabase';
import faker from 'faker';

describe('Users', () => {
  const formData = {
    email: faker.internet.email(),
    name: faker.name.firstName,
    password: faker.internet.password(),
  };

  test('Users can signup', async () => {
    const { user, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) throw error;

    expect(user.email.toLowerCase()).toBe(formData.email.toLowerCase());
  });

  test('Users can login', async () => {
    const { user, error } = await supabase.auth.signIn({
      email: 'okekeobasi@gmail.com',
      password: 'chrisman',
    });

    if (error) throw error;

    expect(user).toBeDefined();
  });
});
