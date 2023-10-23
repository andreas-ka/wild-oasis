import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oitmcjoqudswoflqqwwr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pdG1jam9xdWRzd29mbHFxd3dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MTY1OTEsImV4cCI6MjAxMzI5MjU5MX0.mPbJBtnZHNwEU2eczmEIOBFDjjFQhuprULhMdd-O-bE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
