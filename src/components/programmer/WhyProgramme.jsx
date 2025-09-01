export default function WhyProgramme() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative">
        {/* Left Image (Desktop Only) */}
        <div className="hidden md:flex justify-center">
          <img
            src="/assets/programmers/Socialmedia.png"
            alt="Why this Programme"
            className="rounded-2xl max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="relative">
          {/* Decorative Top-Right Design */}
          <img
            src="/assets/programmers/Sirtifai Design.png"
            alt="Decorative Design"
            className="absolute -top-16 -right-16 w-56 md:w-64 opacity-90"
          />

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#FF6200] mb-6 relative z-10 text-center md:text-left">
            Why this Programme <br className="hidden md:block" /> matters
          </h2>

          {/* Image (Mobile Only) */}
          <div className="flex justify-center mb-8 md:hidden">
            <img
              src="/assets/programmers/Socialmedia.png"
              alt="Why this Programme"
              className="rounded-2xl max-w-[250px]"
            />
          </div>

          {/* List */}
          <ul className="list-disc pl-6 space-y-5 text-[#000000] text-lg relative z-10">
  <li><span className="mr-2">🌍</span> Access to global IT ecosystems (USA, Singapore, Australia, UK, Germany).</li>
  <li><span className="mr-2">📜</span> Structured Pod-based training model that mirrors real IT companies.</li>
  <li><span className="mr-2">🎯</span> Direct alignment with in-demand IT roles (SaaS, Web, Mobile, Cloud, DevOps, QA).</li>
  <li><span className="mr-2">💼</span> Clear pathway from training → exams → placement.</li>
  <li><span className="mr-2">🔑</span> Career-first approach: Designed to remove uncertainty in training investments.</li>
</ul>
        </div>
      </div>
    </section>
  );
}
