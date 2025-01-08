import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

export const GrowthMetrics = () => {
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

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-custom-mint/20 via-white to-custom-purple/20">
        <h3 className="text-xl font-semibold mb-4 text-center">Growth Metrics Over Time</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={metricsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -5 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="customers" fill="#ff99c8" name="Total Customers" />
              <Bar dataKey="netProfit" fill="#d0f4de" name="Net Profit (£)" />
              <Bar dataKey="mrr" fill="#e4c1f9" name="Monthly Recurring Revenue (£)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {metricsData.map((year, index) => (
          <Card 
            key={year.year}
            className="p-6 bg-gradient-to-br from-custom-blue/20 via-white to-custom-pink/20"
          >
            <h4 className="text-lg font-semibold mb-4 text-center">Year {year.year} Metrics</h4>
            <div className="space-y-4">
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">Customers</div>
                <div className="text-lg font-semibold">{year.customers}</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">Revenue</div>
                <div className="text-lg font-semibold">{year.revenue}</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">Net Profit</div>
                <div className="text-lg font-semibold">{year.netProfit}</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">CAC</div>
                <div className="text-lg font-semibold">{year.cac}</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">CLTV</div>
                <div className="text-lg font-semibold">{year.cltv}</div>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm">
                <div className="text-sm text-gray-600">MRR</div>
                <div className="text-lg font-semibold">{year.mrr}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};