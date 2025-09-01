import Image from "next/image";

export default function PriceBlock() {
  return (
    <section className="py-12 md:py-16 bg-[#fdf6f1] flex justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 w-full max-w-4xl flex flex-col md:flex-row items-start justify-between">
        
        {/* Left Section */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <div className="flex items-center space-x-4">
            {/* Orange Image Icon */}
            <Image
              src="/assets/programmers/X.png"
              alt="Price Icon"
              width={64}
              height={64}
              className="object-contain"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Price Block</h2>
          </div>
          {/* Underline */}
          <div className="w-32 md:w-40 border-b border-gray-400 mt-3"></div>
        </div>

        {/* Right Section */}
        <div className="text-left space-y-3 md:space-y-4 w-full md:w-auto">
          <p className="text-lg md:text-xl font-medium flex justify-between md:justify-start">
            Programme Fee 
            <span className="ml-4 md:ml-8 font-semibold">: 6,00,000</span>
          </p>
          <p className="text-lg md:text-xl font-medium flex justify-between md:justify-start">
            GST (18%) 
            <span className="ml-4 md:ml-[75px] font-semibold">: 1,08,000</span>
          </p>
          <p className="text-xl md:text-2xl font-bold flex justify-between md:justify-start">
            Total Payable 
            <span className="ml-4 md:ml-10 text-orange-600">: 7,08,000</span>
          </p>
        </div>
      </div>
    </section>
  );
}
