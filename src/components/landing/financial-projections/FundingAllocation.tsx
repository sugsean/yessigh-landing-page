import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

const COLORS = ['#ff99c8', '#fcf6bd', '#d0f4de', '#a9def9', '#e4c1f9'];

export const FundingAllocation = () => {
  const fundingData = [
    {
      category: "Team Expansion",
      percentage: 30,
      amount: "£150,000-£300,000",
      description: "Key hires in engineering, sales, and customer success teams",
      details: [
        "Senior developers and UI/UX specialists",
        "Sales representatives for each region",
        "Customer success managers",
        "Product managers"
      ]
    },
    {
      category: "Marketing & Sales",
      percentage: 30,
      amount: "£150,000-£300,000",
      description: "Comprehensive marketing and sales initiatives",
      details: [
        "Digital marketing campaigns",
        "Educational content creation",
        "Industry events and conferences",
        "Sales enablement tools"
      ]
    },
    {
      category: "Product Development",
      percentage: 30,
      amount: "£150,000-£300,000",
      description: "Platform enhancement and feature development",
      details: [
        "New feature development",
        "Platform scalability improvements",
        "Integration capabilities",
        "Security and compliance updates"
      ]
    },
    {
      category: "Operational Costs",
      percentage: 10,
      amount: "£50,000-£100,000",
      description: "Essential business operations",
      details: [
        "Legal and compliance",
        "Administrative costs",
        "Infrastructure and tools",
        "Professional services"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-to-br from-custom-mint/20 via-white to-custom-purple/20">
          <h3 className="text-xl font-semibold mb-4 text-center">Funding Allocation Chart</h3>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={fundingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="percentage"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {fundingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-custom-blue/20 via-white to-custom-pink/20">
          <h3 className="text-xl font-semibold mb-4 text-center">Detailed Breakdown</h3>
          <div className="space-y-6">
            {fundingData.map((item, index) => (
              <div 
                key={item.category}
                className="p-4 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: `${COLORS[index % COLORS.length]}20` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-lg">{item.category}</h4>
                  <span className="text-sm font-medium bg-white px-2 py-1 rounded-full">
                    {item.amount}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {item.details.map((detail, i) => (
                    <li key={i} className="ml-4">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-to-br from-custom-yellow/20 via-white to-custom-blue/20">
        <h3 className="text-xl font-semibold mb-4 text-center">Strategic Investment Impact</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {fundingData.map((item, index) => (
            <div 
              key={item.category}
              className="p-4 rounded-lg text-center space-y-2"
              style={{ backgroundColor: `${COLORS[index % COLORS.length]}20` }}
            >
              <div className="text-3xl font-bold">{item.percentage}%</div>
              <div className="text-sm font-medium">{item.category}</div>
              <div className="text-xs text-gray-600">{item.amount}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};