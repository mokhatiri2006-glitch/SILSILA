import { impactStats } from "../data/mockData";
import { Users, Award, Calendar, Sparkles, TrendingUp, DollarSign } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";

const craftDistribution = [
  { name: "Leather Working", value: 12, artisans: 8 },
  { name: "Zellige", value: 18, artisans: 9 },
  { name: "Wood Carving", value: 24, artisans: 12 },
  { name: "Pottery", value: 15, artisans: 7 },
  { name: "Metal Working", value: 20, artisans: 10 },
  { name: "Textile Weaving", value: 11, artisans: 6 },
];

const monthlyGrowth = [
  { month: "Oct", apprentices: 15, workshops: 42 },
  { month: "Nov", apprentices: 28, workshops: 58 },
  { month: "Dec", apprentices: 45, workshops: 71 },
  { month: "Jan", apprentices: 67, workshops: 89 },
  { month: "Feb", apprentices: 94, workshops: 124 },
  { month: "Mar", apprentices: 127, workshops: 156 },
];

const COLORS = ["#F59E0B", "#10B981", "#3B82F6", "#8B5CF6", "#EF4444", "#EC4899"];

export function ImpactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-12 h-12" />
            <h1 className="text-4xl lg:text-5xl font-bold">Our Impact</h1>
          </div>
          <p className="text-xl opacity-90 max-w-2xl">
            Measuring the real change we're making in preserving Moroccan heritage and creating sustainable livelihoods.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-90">Artisans Supported</p>
                <p className="text-4xl font-bold">+{impactStats.artisansSupported}</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Master craftspeople connected to new income opportunities
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-90">Youth Trained</p>
                <p className="text-4xl font-bold">+{impactStats.youthTrained}</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Young people learning valuable craftsmanship skills
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-90">Workshops Completed</p>
                <p className="text-4xl font-bold">+{impactStats.workshopsCompleted}</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Cultural experiences delivered to tourists
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-90">Crafts Preserved</p>
                <p className="text-4xl font-bold">{impactStats.craftsPreserved}</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Traditional craft forms actively being transmitted
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-90">Revenue Generated</p>
                <p className="text-4xl font-bold">{(impactStats.revenueGenerated / 1000000).toFixed(1)}M</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              MAD in income for artisans and apprentices
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-500 to-red-600 text-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm opacity-90">Certifications Awarded</p>
                <p className="text-4xl font-bold">{impactStats.certificationsAwarded}</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Professional credentials earned by apprentices
            </p>
          </div>
        </div>

        {/* Growth Over Time */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Growth Over Time</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="apprentices"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  name="Apprentices"
                />
                <Line
                  type="monotone"
                  dataKey="workshops"
                  stroke="#10B981"
                  strokeWidth={3}
                  name="Workshops"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Craft Distribution */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Craft Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={craftDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {craftDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Artisans per Craft */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Artisans by Craft</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={craftDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="name" stroke="#6B7280" angle={-45} textAnchor="end" height={100} />
                  <YAxis stroke="#6B7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #E5E7EB",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="artisans" fill="#F59E0B" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Impact Stories */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-amber-600 pl-4">
              <p className="text-3xl font-bold text-amber-600 mb-2">85%</p>
              <p className="text-sm text-gray-700">
                of apprentices report increased income within 6 months of certification
              </p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="text-3xl font-bold text-blue-600 mb-2">92%</p>
              <p className="text-sm text-gray-700">
                of tourists rate their workshop experience as "excellent" or "outstanding"
              </p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <p className="text-3xl font-bold text-green-600 mb-2">100%</p>
              <p className="text-sm text-gray-700">
                of artisans say Silsila has expanded their market reach and visibility
              </p>
            </div>
          </div>
        </div>

        {/* Silsila Corners */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 lg:p-12 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Silsila Corners</h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Our physical workshop spaces in Morocco's historic medinas serve as community hubs where digital meets tradition. 
            These spaces host workshops, connect apprentices with artisans, and showcase Moroccan craftsmanship to the world.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
              <h3 className="font-bold text-lg mb-2">📍 Fez Medina</h3>
              <p className="text-sm text-gray-600 mb-3">Tala'a Kebira, near Bab Boujloud</p>
              <p className="text-sm text-gray-700">
                12 active artisans • 45 apprentices • Daily workshops
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
              <h3 className="font-bold text-lg mb-2">📍 Marrakech</h3>
              <p className="text-sm text-gray-600 mb-3">Souk des Teinturiers</p>
              <p className="text-sm text-gray-700">
                8 active artisans • 32 apprentices • Weekend workshops
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-amber-200">
              <h3 className="font-bold text-lg mb-2">📍 Rabat</h3>
              <p className="text-sm text-gray-600 mb-3">Oudayas Kasbah</p>
              <p className="text-sm text-gray-700">
                6 active artisans • 28 apprentices • Bi-weekly workshops
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
