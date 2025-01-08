import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AssumptionsTable } from './financial-projections/AssumptionsTable';
import { ProjectionsTable } from './financial-projections/ProjectionsTable';
import { FundingAllocation } from './financial-projections/FundingAllocation';
import { GrowthMetrics } from './financial-projections/GrowthMetrics';
import { motion } from "framer-motion";

const FinancialProjections = () => {
  const [assumptions] = React.useState({
    avgSchoolSize: 400,
    targetPenetration: 8,
    exchangeRate: 1.25,
    regions: {
      uk: {
        totalSchools: 24000,
        basicPrice: '£249',
        standardPrice: '£599',
        premiumPrice: 'Contact Sales',
        avgPrice: '£599'
      },
      northAmerica: {
        totalSchools: 140000,
        basicPrice: '$350',
        standardPrice: '$750',
        premiumPrice: 'Contact Sales',
        avgPrice: '$750'
      },
      caribbean: {
        totalSchools: 10000,
        basicPrice: '$175',
        standardPrice: '$375',
        premiumPrice: 'Contact Sales',
        avgPrice: '$375'
      }
    }
  });

  return (
    <Card className="w-full bg-gradient-to-br from-custom-mint/20 via-white to-custom-purple/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
          Financial Projections Dashboard - £500k-£1M Raise Scenario
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="assumptions" className="w-full">
          <TabsList className="w-full flex justify-center mb-6">
            <TabsTrigger 
              value="assumptions"
              className="data-[state=active]:bg-custom-purple data-[state=active]:text-white"
            >
              Key Assumptions
            </TabsTrigger>
            <TabsTrigger 
              value="projections"
              className="data-[state=active]:bg-custom-purple data-[state=active]:text-white"
            >
              Regional Projections
            </TabsTrigger>
            <TabsTrigger 
              value="metrics"
              className="data-[state=active]:bg-custom-purple data-[state=active]:text-white"
            >
              Growth Metrics
            </TabsTrigger>
            <TabsTrigger 
              value="funding"
              className="data-[state=active]:bg-custom-purple data-[state=active]:text-white"
            >
              Funding Allocation
            </TabsTrigger>
          </TabsList>
          <TabsContent value="assumptions">
            <AssumptionsTable assumptions={assumptions} />
          </TabsContent>
          <TabsContent value="projections">
            <ProjectionsTable assumptions={assumptions} />
          </TabsContent>
          <TabsContent value="metrics">
            <GrowthMetrics />
          </TabsContent>
          <TabsContent value="funding">
            <FundingAllocation />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FinancialProjections;