export interface RegionData {
  totalSchools: number;
  basicPrice: string;
  standardPrice: string;
  premiumPrice: string;
  avgPrice: string;
}

export interface Assumptions {
  avgSchoolSize: number;
  targetPenetration: number;
  exchangeRate: number;
  regions: {
    uk: RegionData;
    northAmerica: RegionData;
    caribbean: RegionData;
  };
}

export interface MetricsData {
  year: number;
  customers: string;
  revenue: string;
  expenses: string;
  netProfit: string;
  cac: string;
  cltv: string;
  mrr: string;
}

export interface FundingAllocation {
  category: string;
  percentage: number;
  amount: string;
  description: string;
}
