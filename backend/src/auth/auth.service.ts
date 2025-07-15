import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PlayerService } from 'src/player/player.service';
import { SupabaseService } from 'src/supabase/supabase.service';

@Injectable()
export class AuthService {
  constructor(private supabaseService: SupabaseService) {}

  async signIn(email: string, password: string) {
    const supabase = this.supabaseService.getSupabaseServiceClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw new UnauthorizedException(error.message);
    }
    return data;
  }

  async signUp(email: string, password: string) {
    const supabase = this.supabaseService.getSupabaseServiceClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      throw new UnauthorizedException(error.message);
    }
    return data.user;
  }
}
