export interface OpportunityRelated {
  numberList: number;
  id: string;
  accountId: string;
  accountName: string;
  clientId: string;
  name: string;
  number: string;
  description: string;
  origin: string;
  whoIntegrated: string;
  stage: string;
  probability: number;
  createdDate: string;
  closeDate: string;
  amount?: number;
  badge: string;
  executive: string;
  ownerId: string;
  owner: string;
  isTryAndBuy: boolean;
  isMixedSale: boolean;
  isPartner: boolean;
  tryAndBuyReason: string;
}
