interface Transaction {
    autoIncrementId: number;
    date: Date;
    paymentMethod: string;
    category: string;
    description: string;
    currency: string;
    amount?: number;
    isIncome: boolean;
  }