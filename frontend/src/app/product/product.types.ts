export interface Product {
  id: string;
  iban: string | null;
  accountCode: string;
  clearingCode: string | null;
  productTypeId: number;
  cardStatusId: number | null;
  status: string;
  userRegistrationStatus: number;
  title: string;
  titleNickname: string | null;
  subtitle: string;
  balance: number;
  currencyCode: string;
  secondaryBalance: number | null;
  loanIssuedAmount: number | null;
  thumbnailUrl: string | null;
  supportsLinkedAccounts: boolean;
  primaryAccountId: string | null;
  numberOfConnectedAccounts: number;
  cardExpirationDate: string | null;
  cardPaymentProcessorType: number | null;
  allowsDebit: boolean;
  allowsCredit: boolean;
  prodType: number;
  productCharacteristicNo: number;
  customerId: number;
}

interface MenuOption {
  type: number;
  id: string;
  icon: string;
  text: string;
  code: string;
}

export interface Account {
  thumbnailUrl: string | null;
  colorIndicator: string;
  title: string;
  subtitle: string;
  iban: string | null;
  isCard: boolean;
  cardStatusId: string | null;
  isIssueNewCard: boolean;
  avalailableBalanceText: string;
  avalailableBalance: number;
  currencyCode: string;
  menuOptions: MenuOption[];
  productTypeId: number;
  cardExpirationDate: string | null;
  cardPaymentProcessorType: string | null;
}

export interface Transaction {
  id: string;
  referenceNumber: string;
  date: string;
  title: string;
  subtitle: string;
  balance: number | null;
  amount: number;
  currencyCode: string;
  isDebit: boolean;
  transactionType: string | null;
  status: string | null;
  currency: string | null;
}
