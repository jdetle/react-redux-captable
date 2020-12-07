type CreateCapTableRequest = {
  totalShares: number;
  sharePrice: number;
  companyName: string;
  shareholders: CreateShareholderRequest[];
};

export type CapTable = CreateCapTableRequest & {
  id: number;
  updatedAt: string;
  createdAt: string;
};

type CreateShareholderRequest = {
  email: string;
  firstName: string;
  lastName: string;
  ownershipChunks: CreateOwnershipChunkRequest[];
};

type Shareholder = CreateShareholderRequest & {
  id: number;
  updatedAt: string;
  createdAt: string;
};

type CreateOwnershipChunkRequest = {
  sharesOwned: number;
  sharePrice: number;
};

type OwnershipChunk = CreateOwnershipChunkRequest & {
  id: number;
  updatedAt: string;
  createdAt: string;
};
