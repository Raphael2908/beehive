import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PlayerModule } from 'src/player/player.module';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  imports: [PlayerModule, SupabaseModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
