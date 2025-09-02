export default function CtaBand() {
  return (
    <section>
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-12 md:py-16 lg:py-20">
        <div className="w-[80%] flex flex-wrap justify-between gap-5 mx-auto items-center">
          {/* left */}
          <div>
            <h2 className="text-3xl text-white font-extrabold">
              Grenov: Reimagine the Futrue
            </h2>
            <p className="text-white text-lg w-[80%]">
              “Grenov, part of Sirtifai, advances AI, augmented reality, and
              robotics to redefine the future.”
            </p>
          </div>
          {/* Right */}
          <div className="flex gap-6">
            <button className="bg-gray-900 text-white px-5 py-3 rounded-full shadow hover:bg-gray-800 transition">
              Partner With Grenov
            </button>
            <button className="bg-white text-gray-900 px-5 py-3 rounded-full shadow hover:bg-gray-100 transition">
              Explore the Sirtital Ecosystem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
