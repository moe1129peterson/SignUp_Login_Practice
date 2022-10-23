import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lxzzcjvkcruocphnmvse.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4enpjanZrY3J1b2NwaG5tdnNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY0OTAzMDgsImV4cCI6MTk4MjA2NjMwOH0.f4bp2LbR7MxHwdZ_tn7i5I3HuqDK1DmjN4HDA3rMFP0';

const supabase = createClient(supabaseUrl, supabaseKey);
