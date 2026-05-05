-- Create the products table
CREATE TABLE public.products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id text NOT NULL,
  name text NOT NULL,
  image text,
  description text,
  options jsonb NOT NULL DEFAULT '[]'::jsonb,
  is_special_deal boolean DEFAULT false,
  customizable boolean DEFAULT false,
  customization_type text,
  customization_limit integer,
  customization_options jsonb
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Allow public read access (for visitors to see the menu)
CREATE POLICY "Public profiles are viewable by everyone" 
  ON public.products FOR SELECT 
  USING (true);

-- Allow public insert/update/delete (since admin uses simple JS password instead of Supabase Auth)
-- WARNING: This allows anyone with the API key to modify the table if they bypass the JS password.
-- For higher security later, implement Supabase Auth.
CREATE POLICY "Enable insert for all users" ON public.products FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON public.products FOR UPDATE USING (true);
CREATE POLICY "Enable delete for all users" ON public.products FOR DELETE USING (true);

-- Create open_dates table
CREATE TABLE public.open_dates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date_string text NOT NULL UNIQUE
);

ALTER TABLE public.open_dates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public profiles are viewable by everyone" ON public.open_dates FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON public.open_dates FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update for all users" ON public.open_dates FOR UPDATE USING (true);
CREATE POLICY "Enable delete for all users" ON public.open_dates FOR DELETE USING (true);
