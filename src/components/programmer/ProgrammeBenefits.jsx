export default function ProgrammeBenefits() {
  return (
    <section className="relative py-16 bg-[#FEF7F1]">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="inline-block text-3xl font-bold text-[#FC4C03] bg-white px-6 py-3  shadow-lg">
          Programme Benefits For Candidate
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center">
        {/* Center Image */}
        <div className="relative w-[350px] h-[450px] rounded-2xl shadow-lg">
          <img
            src="/assets/programmers/Hands.png" 
            alt="Programme Benefits"
            className="w-full h-full object-cover rounded-2xl overflow-hidden"
          />

          {/* Left Side Benefits (attached to image edge) */}
          <div className="absolute inset-y-0 -left-40 flex flex-col justify-between py-10">
            <div className="relative left-[10px]">

            <BenefitItem img="/assets/programmers/Ellipse 33.png" text="World-Class Training" />
            </div>
            <BenefitItem img="/assets/programmers/Ellipse 33-3.png" text="Future-Proof Skills" />
            <BenefitItem img="/assets/programmers/Ellipse 33-4.png" text="Pod-Based Ecosystem" />
          </div>

          {/* Right Side Benefits (attached to image edge) */}
          <div className="absolute inset-y-0 -right-40 flex flex-col justify-around py-16">
            <BenefitItem img="/assets/programmers/Ellipse 33-1.png" text="Placement Support" />
            <BenefitItem img="/assets/programmers/Ellipse 33-2.png"text="Global Exposure" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* 🔥 Reusable Benefit Item */
function BenefitItem({ img, text }) {
  return (
    <div className="flex items-center gap-3 bg-[#FEF7F1]  rounded-[16px] px-4 py-2">
      <img
        src={img}
        alt={text}
        className="w-10 h-10 rounded-full object-cover"
      />
      <span className="text-base font-medium text-gray-700">{text}</span>
      <div className="w-6 h-6 flex items-center justify-center bg-[#FC4C03] text-white rounded-full text-sm">
        💬
      </div>
    </div>
  );
}
