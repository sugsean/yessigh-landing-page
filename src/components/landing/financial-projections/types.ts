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