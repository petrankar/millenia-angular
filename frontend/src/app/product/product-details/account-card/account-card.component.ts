import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import type { Account } from '../../product.types';
@Component({
  selector: 'app-account-card',
  imports: [MatIconModule],
  templateUrl: `./account-card.component.html`,
  styleUrl: `./account-card.component.scss`,
})
export class AccountCardComponent {
  @Input() account: Account = {} as Account;
}
