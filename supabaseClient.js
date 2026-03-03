// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://xdcyyeouozghqrywkfor.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkY3l5ZW91b3pnaHFyeXdrZm9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3MTkyNTksImV4cCI6MjA4NjI5NTI1OX0.6nuJqudXkNpqGir_x0lSTP3voVW-57Sl2QZ8xgBIjtQ'
)