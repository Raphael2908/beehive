import { Module } from '@nestjs/common';
import { BeehivesService } from './beehives.service';
import { BeehivesController } from './beehives.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  imports: [SupabaseModule],
  controllers: [BeehivesController],
  providers: [BeehivesService],
  exports: [BeehivesService],
})
export class BeehivesModule {}
