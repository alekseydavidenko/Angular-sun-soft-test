import { AccountAssets } from './account-assets';
import { Friend } from './friend';
import { MoneyBox } from './money-box';
import { Partner } from './partner';
import { Safe } from './safe';
import { Total } from './total';

export class Assets {
  constructor(
    public account: AccountAssets,
    public friend: Friend,
    public moneyBox: MoneyBox,
    public partner: Partner,
    public safe: Safe,
    public total: Total,
  ) {}
}
