import { Card } from "../ui/Card"

export default function IncomeTrackerWall() {
  return (
    <section className="bg-[#FEF7F1] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Income Tracker Wall</h2>
          <p className="text-lg text-gray-600">Real-time earning from our learners. Watch the numbers grow as careers transform. </p>
        </div>

        {/* Main Stats Card */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-lg 
                 bg-[url('/assets/dollar_image.jpg')] bg-cover bg-center 
                 text-white p-8 mb-8"
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>

          <div className="relative text-center">
            <p className="text-xl text-gray-200">Total Earnings by SPP Learners</p>
            <h3 className="text-5xl lg:text-6xl font-bold text-[#ff7847] mb-2">₹87,423,419</h3>
          </div>
        </div>


        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-500">Average Monthly</h4>
              <p className="text-2xl font-bold text-gray-900">₹42,800</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#ff7847] h-2 rounded-full"
                style={{ width: "65%" }}
              />
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-500">Highest Earner</h4>
              <p className="text-2xl font-bold text-gray-900">₹3.2L/mo</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#ff7847] h-2 rounded-full"
                style={{ width: "90%" }}
              />
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-500">Placement Rate</h4>
              <p className="text-2xl font-bold text-gray-900">94%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-[#ff7847] h-2 rounded-full"
                style={{ width: "94%" }}
              />
            </div>
          </Card>
        </div>

        {/* Leaderboard and Badges */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Monthly Leaderboard */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Monthly Leaderboard</h3>
            <div className="space-y-4">
              {[
                { name: "Vikram Singh", amount: "₹1,87,500", rank: 1 },
                { name: "Ankit Verma", amount: "₹1,65,200", rank: 2 },
                { name: "Neha Sharma", amount: "₹1,42,800", rank: 3 },
                { name: "Rohit Kumar", amount: "₹1,35,750", rank: 4 },
                // { name: "Priya Gupta", amount: "₹5,900", rank: 5 },
              ].map((person) => (
                <div key={person.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${person.rank === 1 ? "bg-[#ff7847] text-white" : "bg-gray-100 text-gray-600"
                        }`}
                    >
                      {person.rank}
                    </div>
                    <span className="font-medium text-gray-900">{person.name}</span>
                  </div>
                  <span className="font-bold text-[#ff7847]">{person.amount}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Milestone Badges */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Milestone Badges</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-[#ff7847] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">₹</span>
                </div>
                <p className="text-sm font-medium text-gray-900">₹1L+ Club</p>
                <p className="text-xs text-gray-500">847 achievers</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-[#ff7847] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">10K</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Career Switch</p>
                <p className="text-xs text-gray-500">423 achievers</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-[#ff7847] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">💼</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Dream Job</p>
                <p className="text-xs text-gray-500">312 achievers</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-[#ff7847] rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">🌟</span>
                </div>
                <p className="text-sm font-medium text-gray-900">Consistent Growth</p>
                <p className="text-xs text-gray-500">156 achievers</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}