import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  constructor(private configService: ConfigService) {}

  getSupabaseServiceClient() {
    return createClient(
      this.configService.get('SUPABASE_URL')!,
      this.configService.get('SUPABASE_SR_KEY')!,
    );
  }

  getServerClient() {
    return createClient(
      this.configService.get('SUPABASE_URL')!,
      this.configService.get('SUPABASE_ANON_KEY')!,
    );
  }
}
