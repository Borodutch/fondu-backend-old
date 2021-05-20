import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { TerminusModule } from '@nestjs/terminus'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HealthController } from './modules/health/health.controller'
import { Erc20Module } from './modules/erc20/erc20.module'
import { Erc721Module } from './modules/erc721/erc721.module'
import { CompilerModule } from './modules/compiler/compiler.module'
import { StatsModule } from './modules/stats/stats.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    TerminusModule,
    Erc20Module,
    Erc721Module,
    CompilerModule,
    StatsModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
