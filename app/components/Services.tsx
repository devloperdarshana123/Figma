import Image from "next/image";
import Link from "next/link";
import {
  FaVideo,
  FaBullhorn,
  FaBullseye,
  FaLayerGroup,
  FaMusic,
  FaImage as FaImg,
  FaPlay,
  FaLightbulb,
} from "react-icons/fa";

export default function ServicesPage() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-20">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
   <h1 className="text-4xl font-semibold font-playfair">
  Our <span className="text-yellow-500">Services</span>
</h1>


        <p className="text-gray-400 mt-4 text-sm leading-relaxed font-inter">
          End-to-end production solutions from ideation, scripting,
          filming, post production, to distribution — ensuring your
          brand message is effectively conveyed across all platforms.
        </p>
      </div>

      {/* SERVICE 1 */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Ad Film Production</h2>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed font-inter">
            Create compelling video advertisements that captivate your audience.
    From creative scripting to professional direction, we develop high-impact
    ad films that effectively convey your brand message across all platforms.
          </p>

          <div className="grid grid-cols-2 gap-y-3 mb-10 font-inter">

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">Creative scripting</span>
    </div>

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">Professional direction</span>
    </div>

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">High-quality cinematography</span>
    </div>

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">Multi-platform delivery</span>
    </div>

  </div>

          <button className="bg-yellow-500 text-black px-5 py-2 text-sm rounded font-inter">
            Get Quote
          </button>
        </div>

       <div className="relative w-full h-80 rounded-md overflow-hidden">

  <video
    src="https://res.cloudinary.com/davlyosj1/video/upload/v1772779534/Ad_qc2mux.mp4"     // put your video inside /public
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    className="absolute inset-0 w-full h-full object-cover"
  />

</div>
</div>


      {/* SERVICE 2 */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative w-full h-80 rounded-md overflow-hidden">
          <Image src="/pic.jpg" alt="Photography" fill className="object-cover" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Professional Photography
          </h2>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed font-inter">
             Capture your brand&apos;s essence through stunning visual imagery. We offer
    comprehensive photoshoot services including product, lifestyle, fashion,
    and event photography to meet all your advertising and marketing needs.
          </p>

           <div className="grid grid-cols-2 gap-y-3 mb-10 font-inter">

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">Product photography</span>
    </div>

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">Lifestyle shoots</span>
    </div>

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">Fashion photography</span>
    </div>

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">Event coverage</span>
    </div>

  </div>


          <button className="bg-yellow-500 text-black px-5 py-2 text-sm rounded">
            Get Quote
          </button>
        </div>
      </div>

      {/* SERVICE 3 */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            UI/UX & Graphic Design
          </h2>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
             Create engaging digital experiences and powerful brand visuals.
    Our design team crafts intuitive user interfaces, compelling graphics,
    marketing collateral, and digital advertisements that strengthen
    your brand presence.
          </p>

          <div className="grid grid-cols-2 gap-y-3 mb-10">

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">UI/UX design</span>
    </div>

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">Brand identity</span>
    </div>

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">Marketing collateral</span>
    </div>

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">Digital advertisements</span>
    </div>

  </div>

          <button className="bg-yellow-500 text-black px-5 py-2 text-sm rounded">
            Get Quote
          </button>
        </div>

        <div className="relative w-full h-80 rounded-md overflow-hidden">
          <Image src="/UI.png" alt="UI UX" fill className="object-cover" />
        </div>
      </div>

      {/* SERVICE 4 */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-40">
        <div className="relative w-full h-80 rounded-md overflow-hidden">
          <Image src="/per.png" alt="Post Production" fill className="object-cover" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Post-Production Excellence
          </h2>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
               Polish your content to perfection with our comprehensive post-production
    services. From video editing and color grading to VFX and sound design,
    we ensure your final media meets the highest professional standards.

          </p>

         <div className="grid grid-cols-2 gap-y-3 mb-10">

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">Video editing</span>
    </div>

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">Color grading</span>
    </div>

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">VFX &amp; motion graphics</span>
    </div>

    <div className="flex items-center gap-3">
      <span className="w-2 h-2 bg-yellow-500 rounded-full" />
      <span className="text-sm">Sound design</span>
    </div>

  </div>

          <button className="bg-yellow-500 text-black px-5 py-2 text-sm rounded">
            Get Quote
          </button>
        </div>
      </div>
   


      {/* COMPLETE PRODUCTION SUPPORT */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl font-semibold">
          Complete <span className="text-yellow-500">Production Support</span>
        </h2>
        <p className="text-gray-400 mt-4 text-sm">
          Your one-stop-shop for everything from creative concept to execution and post-launch marketing , creating consistent and impactful brand experiences.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {[
    {
      icon: <FaVideo />,
      title: "Cinematography",
      desc: "Professional video direction and high-quality content creation.",
    },
    {
      icon: <FaBullhorn />,
      title: "Campaign Management",
      desc: "End-to-end advertising campaign strategy and execution.",
    },
    {
      icon: <FaBullseye />,
      title: "Marketing Strategy",
      desc: "Distribution strategies to reach your target audience effectively.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Brand Alignment",
      desc: "Strategic visual storytelling across online and offline channels.",
    },
    {
      icon: <FaMusic />,
      title: "Audio Production",
      desc: "Professional sound design, voiceovers, and music production.",
    },
    {
      icon: <FaImg />,
      title: "Visual Storytelling",
      desc: "Seamless narratives that strengthen brand engagement.",
    },
    {
      icon: <FaPlay />,
      title: "Documentary Films",
      desc: "Authentic storytelling for cultural and social impact content.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Concepts",
      desc: "Innovative ideation from concept to execution.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-[#111] border border-[#1f1f1f] rounded-xl p-6
                 hover:border-yellow-500 transition duration-300"
    >
      {/* Icon */}
      <div className="text-yellow-500 text-2xl mb-4">
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold mb-2">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-400 leading-relaxed">
        {item.desc}
      </p>
    </div>
  ))}
</div>
<div className="mt-32 py-24 text-center bg-linear-to-b from-black to-[#0b0b0b]">
  <h2 className="text-4xl md:text-5xl font-semibold mb-6">
    Let&apos;s Create Something{" "}
    <span className="text-yellow-500">Amazing</span>
  </h2>

  <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-10">
    Ready to bring your vision to life? Contact us today to discuss your project.
  </p>
  <Link
  href="/contact"
  className="bg-yellow-500 text-black px-8 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
>
  Start Your Project
</Link>

</div>


    </section>
  );
}
