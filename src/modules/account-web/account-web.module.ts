import { Module } from '@nestjs/common';
import { SendMoneyController } from './send-money.controller';

@Module({
  controllers: [SendMoneyController],
  providers: [],
})
export class AccountWebModule {}
