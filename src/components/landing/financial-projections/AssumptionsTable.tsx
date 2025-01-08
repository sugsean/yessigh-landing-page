import React from 'react';
import { motion } from "framer-motion";
import { type Assumptions } from './types';

interface AssumptionsTableProps {
  assumptions: Assumptions;
}

export const AssumptionsTable = ({ assumptions }: AssumptionsTableProps) => (
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
          <td className="p-3 border text-gray-600">Conservative target percentage</td>
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