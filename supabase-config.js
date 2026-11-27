// Configuración pública del calendario. La publishable key puede estar en el navegador.
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.1/+esm';
export const SUPABASE_URL = 'https://kjhldidfswxpteezssyi.supabase.co';
export const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_3uW3K6Tk7lQReWqjv6AqTw_kAiGQQ4S';
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
