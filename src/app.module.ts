import { Module } from '@nestjs/common';
import { AccountWebModule } from './modules/account-web/account-web.module';
import { AccountPersistenceModule } from './modules/account-persistence/account-persistence.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: join(__dirname, '..', 'data', 'data.sqlite'),
      logging: true,
      autoLoadEntities: true,
    }),
    AccountWebModule,
    AccountPersistenceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
