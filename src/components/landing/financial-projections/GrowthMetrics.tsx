import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { motion } from "framer-motion";

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
      mrr: "£35,833-£55,000",
      customerGrowth: 110,
      revenueGrowth: 660000,
      profitGrowth: 110000
    },
    {
      year: 2,
      customers: "300-550",
      revenue: "£1,650,000 - £3,050,000",
      expenses: "£1,100,000 - £1,650,000",
      netProfit: "£550,000 - £1,400,000",
      cac: "£1,200-£1,500",
      cltv: "£8,000-£10,000",
      mrr: "£137,500-£254,166",
      customerGrowth: 550,
      revenueGrowth: 3050000,
      profitGrowth: 1400000
    },
    {
      year: 3,
      customers: "850-1350",
      revenue: "£4,700,000 - £7,500,000",
      expenses: "£2,500,000 - £3,600,000",
      netProfit: "£2,200,000 - £3,900,000",
      cac: "£1,000 - £1,200",
      cltv: "£10,000 - £12,000",
      mrr: "£391,666 - £625,000",
      customerGrowth: 1350,
      revenueGrowth: 7500000,
      profitGrowth: 3900000
    }
  ];

  return (
    <div className="space-y-8">
      <Card className="p-6 bg-gradient-to-br from-custom-mint/20 via-white to-custom-purple/20">
        <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-custom-pink via-custom-purple to-custom-blue bg-clip-text text-transparent">
          Growth Trajectory Over Time
        </h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={metricsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff99c8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ff99c8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#e4c1f9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#e4c1f9" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d0f4de" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#d0f4de" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -5 }} />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="customerGrowth" 
                name="Total Customers"
                stroke="#ff99c8" 
                fillOpacity={1} 
                fill="url(#colorCustomers)" 
              />
              <Area 
                type="monotone" 
                dataKey="revenueGrowth" 
                name="Revenue (£)"
                stroke="#e4c1f9" 
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
              />
              <Area 
                type="monotone" 
                dataKey="profitGrowth" 
                name="Net Profit (£)"
                stroke="#d0f4de" 
                fillOpacity={1} 
                fill="url(#colorProfit)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        {metricsData.map((year, index) => (
          <motion.div
            key={year.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-gradient-to-br from-custom-blue/20 via-white to-custom-pink/20">
              <h4 className="text-lg font-semibold mb-4 text-center bg-gradient-to-r from-custom-pink to-custom-purple bg-clip-text text-transparent">
                Year {year.year} Metrics
              </h4>
              <div className="space-y-4">
                <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-600">Customers</div>
                  <div className="text-lg font-semibold">{year.customers}</div>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-600">Revenue</div>
                  <div className="text-lg font-semibold">{year.revenue}</div>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-600">Net Profit</div>
                  <div className="text-lg font-semibold">{year.netProfit}</div>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-600">CAC</div>
                  <div className="text-lg font-semibold">{year.cac}</div>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-600">CLTV</div>
                  <div className="text-lg font-semibold">{year.cltv}</div>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-sm text-gray-600">MRR</div>
                  <div className="text-lg font-semibold">{year.mrr}</div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};