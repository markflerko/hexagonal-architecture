import { BigNumber } from 'bignumber.js';

export class MoneyEntity {
  constructor(private readonly _amount: BigNumber) {}

  // возможность возвращать ноль
  static ZERO() {
    return new MoneyEntity(new BigNumber(0));
  }

  // возможность создавать новые экземпляры
  static of(value: number) {
    return new MoneyEntity(new BigNumber(value));
  }

  get amount(): BigNumber {
    return this._amount;
  }
}
