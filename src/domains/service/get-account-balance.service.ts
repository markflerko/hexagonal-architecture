import { AccountId } from '../entities/account.entity';
import { GetAccountBalanceQuery } from '../ports/in/get-account-balance.query';
import { LoadAccountPort } from '../ports/out/load-account.port';

export class GetAccountBalanceService implements GetAccountBalanceQuery {
  constructor(private readonly _loadAccountPort: LoadAccountPort) {}

  async getAccountBalance(accoundId: AccountId) {
    const account = await this._loadAccountPort.loadAccount(accoundId);
    return account.calculateBalance();
  }
}
