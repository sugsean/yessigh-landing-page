import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from "framer-motion";

const FinancialProjections = () => {
  const [assumptions] = useState({
    avgSchoolSize: 400,
    targetPenetration: 15,
    exchangeRate: 1.25,
    regions: {
      uk: {
        totalSchools: 24000,
        basicPrice: '£299',
        standardPrice: '£749',
        premiumPrice: 'Contact Sales',
        avgPrice: '£749'
      },
      northAmerica: {
        totalSchools: 140000,
        basicPrice: '$450',
        standardPrice: '$900',
        premiumPrice: 'Contact Sales',
        avgPrice: '$900'
      },
      caribbean: {
        totalSchools: 10000,
        basicPrice: '$225',
        standardPrice: '$450',
        premiumPrice: 'Contact Sales',
        avgPrice: '$450'
      }
    }
  });

  const renderAssumptionsTable = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto bg-white rounded-lg shadow-sm"
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-3 border text-left font-semibold text-gray-700">Category</th>
            <th className="p-3 border text-left font-semibold text-gray-700">Input Parameter</th>
            <th className="p-3 border text-left font-semibold text-gray-700">Value</th>
            <th className="p-3 border text-left font-semibold text-gray-700">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="p-3 border font-medium" rowSpan={3}>General Assumptions</td>
            <td className="p-3 border">Students per School</td>
            <td className="p-3 border">{assumptions.avgSchoolSize}</td>
            <td className="p-3 border text-gray-600">Estimated average number of students per school</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="p-3 border">Target Market Penetration</td>
            <td className="p-3 border">{assumptions.targetPenetration}%</td>
            <td className="p-3 border text-gray-600">Target percentage of schools in each region</td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="p-3 border">GBP to USD Rate</td>
            <td className="p-3 border">{assumptions.exchangeRate}</td>
            <td className="p-3 border text-gray-600">Used for currency conversion</td>
          </tr>
          {Object.entries(assumptions.regions).map(([region, data]) => (
            <React.Fragment key={region}>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 border font-medium" rowSpan={5}>
                  {region === 'uk' ? 'United Kingdom' : 
                   region === 'northAmerica' ? 'North America' : 
                   'Caribbean'}
                </td>
                <td className="p-3 border">Total Schools</td>
                <td className="p-3 border">{data.totalSchools.toLocaleString()}</td>
                <td className="p-3 border text-gray-600">Total number of schools in region</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 border">Basic Plan Price</td>
                <td className="p-3 border">{data.basicPrice}</td>
                <td className="p-3 border text-gray-600">Monthly</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 border">Standard Plan Price</td>
                <td className="p-3 border">{data.standardPrice}</td>
                <td className="p-3 border text-gray-600">Monthly</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 border">Premium Plan Price</td>
                <td className="p-3 border">{data.premiumPrice}</td>
                <td className="p-3 border text-gray-600">Monthly</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-3 border">Average Monthly Price</td>
                <td className="p-3 border">{data.avgPrice}</td>
                <td className="p-3 border text-gray-600">Based on Standard Plan</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </motion.div>
  );

  const renderProjectionsTable = () => {
    const calculateProjections = (region: string) => {
      const data = assumptions.regions[region as keyof typeof assumptions.regions];
      const schoolsTargeted = data.totalSchools;
      const penetrationRate = assumptions.targetPenetration / 100;
      const schoolsAcquired = schoolsTargeted * penetrationRate;
      const avgPrice = parseFloat(data.avgPrice.replace(/[£$,]/g, ''));
      const monthlyRevenue = schoolsAcquired * avgPrice;
      const annualRevenue = monthlyRevenue * 12;
      return { schoolsTargeted, penetrationRate, schoolsAcquired, avgPrice, monthlyRevenue, annualRevenue };
    };

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto bg-white rounded-lg shadow-sm"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-3 border text-left font-semibold text-gray-700">Region</th>
              <th className="p-3 border text-right font-semibold text-gray-700">Schools Targeted</th>
              <th className="p-3 border text-right font-semibold text-gray-700">Penetration Rate</th>
              <th className="p-3 border text-right font-semibold text-gray-700">Schools Acquired</th>
              <th className="p-3 border text-right font-semibold text-gray-700">Avg Monthly Price</th>
              <th className="p-3 border text-right font-semibold text-gray-700">Monthly Revenue</th>
              <th className="p-3 border text-right font-semibold text-gray-700">Annual Revenue</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(assumptions.regions).map(([region, _]) => {
              const proj = calculateProjections(region);
              return (
                <tr key={region} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 border">
                    {region === 'uk' ? 'United Kingdom' : 
                     region === 'northAmerica' ? 'North America' : 
                     'Caribbean'}
                  </td>
                  <td className="p-3 border text-right">{proj.schoolsTargeted.toLocaleString()}</td>
                  <td className="p-3 border text-right">{(proj.penetrationRate * 100).toFixed(1)}%</td>
                  <td className="p-3 border text-right">{Math.round(proj.schoolsAcquired).toLocaleString()}</td>
                  <td className="p-3 border text-right">
                    {region === 'uk' ? '£' : '$'}{proj.avgPrice.toLocaleString()}
                  </td>
                  <td className="p-3 border text-right">
                    {region === 'uk' ? '£' : '$'}{Math.round(proj.monthlyRevenue).toLocaleString()}
                  </td>
                  <td className="p-3 border text-right">
                    {region === 'uk' ? '£' : '$'}{Math.round(proj.annualRevenue).toLocaleString()}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </motion.div>
    );
  };

  return (
    <Card className="w-full bg-gradient-to-br from-custom-mint/20 via-white to-custom-purple/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
          Financial Projections Dashboard
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
          </TabsList>
          <TabsContent value="assumptions">
            {renderAssumptionsTable()}
          </TabsContent>
          <TabsContent value="projections">
            {renderProjectionsTable()}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FinancialProjections;