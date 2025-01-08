import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AssumptionsTable } from './financial-projections/AssumptionsTable';
import { ProjectionsTable } from './financial-projections/ProjectionsTable';
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const FinancialProjections = () => {
  const [assumptions] = useState({
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

  const metricsData = [
    {
      year: 1,
      customers: "60-110",
      revenue: "£430,000 - £660,000",
      expenses: "£380,000 - £550,000",
      netProfit: "£50,000 - £110,000",
      cac: "£1,500-£2,000",
      cltv: "£6,000-£8,000",
      mrr: "£35,833-£55,000"
    },
    {
      year: 2,
      customers: "300-550",
      revenue: "£1,650,000 - £3,050,000",
      expenses: "£1,100,000 - £1,650,000",
      netProfit: "£550,000 - £1,400,000",
      cac: "£1,200-£1,500",
      cltv: "£8,000-£10,000",
      mrr: "£137,500-£254,166"
    },
    {
      year: 3,
      customers: "850-1350",
      revenue: "£4,700,000 - £7,500,000",
      expenses: "£2,500,000 - £3,600,000",
      netProfit: "£2,200,000 - £3,900,000",
      cac: "£1,000 - £1,200",
      cltv: "£10,000 - £12,000",
      mrr: "£391,666 - £625,000"
    }
  ];

  const fundingAllocation = [
    {
      category: "Team Expansion",
      percentage: 30,
      amount: "£150,000-£300,000",
      description: "Hiring key personnel"
    },
    {
      category: "Marketing & Sales",
      percentage: 30,
      amount: "£150,000-£300,000",
      description: "Campaigns & sales pipeline"
    },
    {
      category: "Product Development",
      percentage: 30,
      amount: "£150,000-£300,000",
      description: "Platform enhancement"
    },
    {
      category: "Operational Costs",
      percentage: 10,
      amount: "£50,000-£100,000",
      description: "Legal & administrative"
    }
  ];

  const COLORS = ['#ff99c8', '#fcf6bd', '#d0f4de', '#a9def9', '#e4c1f9'];

  const renderMetricsChart = () => (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Growth Metrics Over Time</h3>
      <div className="w-full overflow-x-auto">
        <BarChart
          width={800}
          height={400}
          data={metricsData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -5 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="customers" fill="#ff99c8" name="Total Customers" />
          <Bar dataKey="netProfit" fill="#d0f4de" name="Net Profit (£)" />
          <Bar dataKey="mrr" fill="#e4c1f9" name="Monthly Recurring Revenue (£)" />
        </BarChart>
      </div>
    </div>
  );

  const renderFundingAllocation = () => (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Funding Allocation</h3>
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={fundingAllocation}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="percentage"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {fundingAllocation.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );

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
            {renderMetricsChart()}
          </TabsContent>
          <TabsContent value="funding">
            {renderFundingAllocation()}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FinancialProjections;