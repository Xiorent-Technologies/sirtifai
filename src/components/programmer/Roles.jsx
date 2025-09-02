export default function Roles() {
  const roles = [
    {
      title: "Product and Design",
      desc: "Product Manager, UI/UX Designer, Business Analyst",
    },
    {
      title: "Engineering",
      desc: "Frontend Developer, Backend Developer, Full-Stack Developer, Mobile Engineer",
    },
    {
      title: "Infrastructure and DevOps",
      desc: "Cloud Engineer, DevOps Engineer, Database admin, Security",
    },
    {
      title: "QA And Testing",
      desc: "Manual Tester, Automation Engineer, Performance Tester",
    },
    {
      title: "Support And Ops",
      desc: "Tech Support, Customer Success Manager, Project Manager",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Roles You Can Build With Ascend
        </h2>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12 text-left">
          {roles.map((role, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Circle */}
              <div className="w-8 h-8 rounded-full bg-[#FDEEE7] flex-shrink-0 mt-1" />

              {/* Text */}
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {role.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {role.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 pt-24 pb-0">
          Pod Structure (How You Learn And Grow)
        </h1>
      </div>
    </section>
  );
}
