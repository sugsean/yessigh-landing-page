import React from 'react';
import { motion } from "framer-motion";
import { type Assumptions } from './types';

interface ProjectionsTableProps {
  assumptions: Assumptions;
}

export const ProjectionsTable = ({ assumptions }: ProjectionsTableProps) => {
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