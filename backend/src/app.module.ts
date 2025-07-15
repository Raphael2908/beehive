import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeehivesModule } from './beehives/beehives.module';
import { InventoryModule } from './inventory/inventory.module';
import { PlayerModule } from './player/player.module';
import { GardenModule } from './garden/garden.module';
import { AuthModule } from './auth/auth.module';
import { SupabaseModule } from './supabase/supabase.module';
import { ConfigModule } from '@nestjs/config';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    BeehivesModule,
    InventoryModule,
    PlayerModule,
    GardenModule,
    AuthModule,
    SupabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KafkaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
