import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.https://vbyrgaacnrtdnfehwdfg.supabase.co
const supabaseKey = import.meta.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZieXJnYWFjbnJ0ZG5mZWh3ZGZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4MzUwODUsImV4cCI6MTk5NDQxMTA4NX0.HznEdV8oqENjGUGA6kwJqInq8tZlInezQzbnk-ng1YE

export const supabase = createClient(supabaseUrl, supabaseKey)
