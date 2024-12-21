export interface UserInfo {
    id: number;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    contracts: any[];
    bids: any[];
    resolutions: any[];
    wallet: {
      id: number;
      userId: number;
      balance: number;
    };
  }