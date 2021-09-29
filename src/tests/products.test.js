import { supabase } from '../server/supabase';
import faker from 'faker';

describe('Products', () => {
  const user_id = '0d071b3b-dc00-46e1-8c6b-ca44cbd3052b';

  const formData = {
    user_id: user_id,
    name: faker.commerce.productName(),
    case_count: faker.datatype.number(),
    mpu: faker.datatype.number(),
    sku_id: faker.random.alphaNumeric(),
    status: faker.datatype.boolean(),
    amount: faker.commerce.price(),
  };

  test('can fetch products', async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('user_id', user_id);
    if (error) throw error;

    expect(data[0].name).toBe('Chikki Chicken Noodles');
  });

  test('can create products', async () => {
    let { data: product, error } = await supabase
      .from('products')
      .insert(formData)
      .single();

    expect(product.name).toBe(formData.name);
  });
});
