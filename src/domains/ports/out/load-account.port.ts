import { AccountEntity, AccountId } from 'src/domains/entities/account.entity';

export interface LoadAccountPort {
  loanAccount(accountId: AccountId): AccountEntity;
}
