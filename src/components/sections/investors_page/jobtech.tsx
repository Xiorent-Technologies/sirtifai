import { CtaButton } from "../../common/cta-button"

export default function JobTech() {
  return (
    <section className="w-full bg-[#FFF9F6] py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 ">
          <p className="text-sm font-semibold tracking-wide text-red-500 uppercase mb-2">
            About Sirtifai
          </p>
          <h2 className="text-3xl font-light md:text-5xl mb-4">
            Sirtifai Is World’s First
          </h2>
          <h3 className="text-2xl font-bold text-[#2E2E2E] md:text-4xl">
            <span className="">EdTech</span> • <span className="">JobTech</span> • <span className="">Project Stack Ecosystem</span> • <span className="font-normal">Integrating</span>
          </h3>
        </div>

        {/* Divider */}
        <div className="h-4 w-full bg-orange-600 mb-10"></div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 text-sm text-gray-800">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">Skilling With Certified Training.</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Skilling with certified training.</li>
                <li>Practice through verified, mentor-backed paid projects.</li>
                <li>Progress with lifetime placement and re-entry support.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">Market Opportunity</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>TAM (Global EdTech + Employment): $160B+</li>
                <li>SAM (India Skilling + Placement): ₹65,000 Cr</li>
                <li>SOM (Youth 18–28, initial target in India): ₹2,000 Cr</li>
              </ul>
            </div>

            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">Traction</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>50,000+ Active Learners (SPP & Freelancer)</li>
                <li>10,000+ Target Monthly Closures in AP, Telangana, and UP</li>
                <li>78% Retention Rate (SPP)</li>
                <li>34% Learner Referral Rate</li>
              </ul>
            </div>

            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">Revenue Streams</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Subscriptions (SPP)</li>
                <li>One-time Programs (International)</li>
                <li>Add-ons (Payroll, Legal, Insurance)</li>
                <li>Partnerships (Colleges, influencers, immigration agents)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">Financial Snapshot</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>CAC: ₹1,500–3,000</li>
                <li>LTV per Learner: ₹15,000–62,000</li>
                <li>Gross Margins: 60–72%</li>
                <li>Revenue Projection (2026): ₹200 Cr+</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">Programs & Business Models</h4>
              <h5 className="font-bold mb-1">SPP (Skill • Practice • Progress)</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Skill (6 months): AI-powered LMS, NSF/NSQF certification.</li>
                <li>Practice (3 months): Earn ₹12K–₹35K/month on verified projects.</li>
                <li>Progress (Lifetime): Placement, re-entry, job-switch, global track.</li>
              </ul>
              <p className="mt-1">💰 Pricing: ₹5,999 – ₹59999/month</p>

              <h5 className="font-bold mt-4 mb-1">Sirtifai International</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>Global placements in US, Canada, Germany.</li>
                <li>One-time fee programs with visa-ready tracks.</li>
                <li>ROI: ₹59,000–₹3L investment → ₹20–35L/year jobs abroad.</li>
              </ul>
              <p className="mt-1">💰 Pricing: Basic – ₹59,000 | Pro – ₹1,77,000 | Elite – ₹3,00,000</p>

              <h5 className="font-bold mt-4 mb-1">Sirtifai Freelancer (Domestic Projects Edition)</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>One-time payment → immediate verified income.</li>
                <li>Payroll + ESI/EPF benefits.</li>
                <li>Income range: ₹12K–₹35K/month.</li>
              </ul>
              <p className="mt-1">💰 Pricing: Basic – ₹11,798 | Pro – ₹23,598 | Elite – ₹42,478</p>
            </div>

            <div>
              <h4 className="text-orange-600 font-bold uppercase mb-2">Impact</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Economic Mobility: Verified monthly income for learners.</li>
                <li>Global Careers: Visa-ready international placements.</li>
                <li>Social Security: ESI/EPF, payroll, legal coverage.</li>
                <li>Inclusivity: Women, rural youth, Tier-3 learners uplifted.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Optional CTA Button */}
        <div className="mt-12 text-center">
          {/* <CtaButton>Learn More</CtaButton> */}
        </div>
      </div>
    </section>
  )
}
