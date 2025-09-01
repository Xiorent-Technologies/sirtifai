import Image from "next/image"

export default function VisionMissionSection() {
  return (
    <section id="vision" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      {/* Heading Band */}
      <div className="mx-auto w-[100%] rounded-md bg-[#FE7743] py-3 shadow-2xl">
        <h2 className="text-center font-sans text-xl font-extrabold tracking-wide text-[#284050] sm:text-6xl">
          VISION AND MISSION
        </h2>
      </div>

      {/* Grid Content */}
<div className="sm:mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
  {/* Image - 1/3 (hidden on mobile) */}
  <div className="relative col-span-1 hidden md:block">
    <div className="relative rounded-2xl sm:w-[700px] flex-shrink-0 aspect-[207/194] left-[-200px] bottom-[40px]">
      <Image
        src={"/assets/drop_i_india/leaf_with_droplets.png"}
        alt="Close-up of a leaf with droplets representing sustainability"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* Text - 2/3 */}
<div className="relative z-10 col-span-2 space-y-4 text-gray-700 pt-10">
  <p className="text-sm leading-5 sm:text-lg sm:leading-6 text-center sm:text-left">
    To achieve equitable, sustainable, and smart water access for every household,
    farm, and industry in India, a holistic approach is essential. This involves
    the collaboration of governments, industries, scientists, farmers, and local
    communities. Policies should be inclusive, technology-driven, and focused on
    long-term sustainability. By prioritizing water conservation, technology, and
    community participation, India can ensure that its water resources are available
    for future generations while meeting the growing demands of its population and economy.
  </p>

  <p className="text-sm leading-5 sm:text-lg sm:leading-6 text-center sm:text-left">
    By integrating AI, IoT, and grassroots engagement, we can create water-secure
    communities that are resilient to climate change, capable of managing water resources
    efficiently, and adaptable to future challenges. These technologies offer powerful
    tools for monitoring, managing, and conserving water, but their real potential is
    realized when they are used in collaboration with local communities who are empowered
    to take charge of their water futures.
    <br />
    Building a future-ready ecosystem requires a deep commitment to both technological
    innovation and community involvement. Together, these forces can create a sustainable
    water future that not only meets current needs but also secures water resources for
    generations to come.
  </p>
</div>

</div>

    </section>
  )
}
