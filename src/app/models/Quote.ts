interface Opportunity {
  id: string;
  accountId: string;
  accountName: string;
  name: string;
  number: string;
  stage: string;
  amount: number;
  isTryAndBuy: boolean;
  closeDate: string;
  owner: string;
}
export interface Quote {
  numberList: number;
  id: string;
  name: string;
  type: string;
  invoice: string;
  status: string;
  epsId: string;
  eps: string;
  created: string;
  validity: string;
  term: string;
  isMain: boolean;
  isRFP: boolean;
  isBidding: boolean;
  isRegulatedSale: boolean;
  opportunity: Opportunity;
}
