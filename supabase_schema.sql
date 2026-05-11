-- Clean up existing tables to avoid conflicts (Warning: This deletes existing data!)
DROP TABLE IF EXISTS medical_records;
DROP TABLE IF EXISTS health_metrics;
DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS doctors;
DROP TABLE IF EXISTS profiles CASCADE;

-- Create a table for public profiles
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  full_name TEXT,
  email TEXT UNIQUE,
  phone TEXT,
  role TEXT DEFAULT 'patient' CHECK (role IN ('patient', 'doctor', 'admin')),
  avatar_url TEXT,
  date_of_birth DATE,
  blood_type TEXT,
  allergies TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create a table for doctors
CREATE TABLE doctors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  specialty TEXT NOT NULL,
  experience TEXT,
  rating FLOAT DEFAULT 0,
  reviews INTEGER DEFAULT 0,
  location TEXT,
  availability TEXT,
  image TEXT,
  about TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create a table for appointments
CREATE TABLE appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  doctor_id UUID REFERENCES doctors(id) ON DELETE CASCADE,
  patient_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  appointment_date DATE NOT NULL,
  appointment_time TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  patient_name TEXT,
  patient_email TEXT,
  patient_phone TEXT,
  reason TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create a table for health metrics
CREATE TABLE health_metrics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  unit TEXT,
  status TEXT,
  icon TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create a table for medical records
CREATE TABLE medical_records (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL, -- e.g., 'Diagnosis', 'Lab Result', 'Prescription'
  title TEXT NOT NULL,
  date DATE DEFAULT CURRENT_DATE,
  doctor_id UUID REFERENCES doctors(id),
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Set up Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE medical_records ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone." ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can insert their own profile." ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile." ON profiles FOR UPDATE USING (auth.uid() = id);

-- Doctors policies
CREATE POLICY "Doctors are viewable by everyone." ON doctors FOR SELECT USING (true);

-- Appointments policies
CREATE POLICY "Users can view their own appointments." ON appointments FOR SELECT USING (auth.uid() = patient_id);
CREATE POLICY "Users can insert their own appointments." ON appointments FOR INSERT WITH CHECK (auth.uid() = patient_id);
CREATE POLICY "Users can update their own appointments." ON appointments FOR UPDATE USING (auth.uid() = patient_id);

-- Health metrics policies
CREATE POLICY "Users can view their own metrics." ON health_metrics FOR SELECT USING (auth.uid() = patient_id);
CREATE POLICY "Users can insert their own metrics." ON health_metrics FOR INSERT WITH CHECK (auth.uid() = patient_id);

-- Medical records policies
CREATE POLICY "Users can view their own records." ON medical_records FOR SELECT USING (auth.uid() = patient_id);

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (new.id, new.raw_user_meta_data->>'full_name', new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
