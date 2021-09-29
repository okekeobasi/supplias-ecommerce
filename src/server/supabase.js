import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.REACT_APP_SUPABASE_URL ||
  'https://yjuqnweslzxeggdjuzlx.supabase.co';
const supabaseAnonKey =
  process.env.REACT_APP_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjg3MjU1MywiZXhwIjoxOTQ4NDQ4NTUzfQ.ydB4OileCYNjSceYkgjqRqhjtLFnAed8LTVv_9cL_1Q';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
