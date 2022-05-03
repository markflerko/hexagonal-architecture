import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SendMoneyUseCaseSymbol } from 'src/domains/ports/in/send-money.use-case';
import { SendMoneyService } from 'src/domains/service/send-money.service';
import { AccountPersistenceAdapter } from './account-persistence.adapter';
import { AccountOrmEntity } from './account.orm-entity';
import { ActivityOrmEntity } from './activity.orm-entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([AccountOrmEntity, ActivityOrmEntity])],
  providers: [
    AccountPersistenceAdapter,
    {
      provide: SendMoneyUseCaseSymbol,
      useFactory: (accountPersistenceAdapter) => {
        return new SendMoneyService(
          accountPersistenceAdapter,
          accountPersistenceAdapter,
        );
      },
      inject: [AccountPersistenceAdapter],
    },
  ],
  exports: [SendMoneyUseCaseSymbol],
})
export class AccountPersistenceModule {}
