import { supabase } from '../server/supabase';

describe('Products', () => {
  const user_id = '0d071b3b-dc00-46e1-8c6b-ca44cbd3052b';

  test('can fetch products', async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('user_id', user_id);
    if (error) throw error;

    expect(data[0].name).toBe('Chikki Chicken Noodles');
  });
});
