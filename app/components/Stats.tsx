import { BsGrid } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import { AiOutlineClockCircle } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { FaCamera, FaVideo, FaFilm, FaPlay } from "react-icons/fa";
export default function Stats() {
  return (
    <>
    <section className="w-full bg-gradient-to-b from-[#0b0b0b] to-black py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-3 text-center text-white">

        {/* Projects */}
        <div className="flex flex-col items-center gap-3">
          <BsGrid className="text-yellow-500 text-3xl" />
          <h2 className="text-yellow-500 text-3xl font-semibold tracking-wide">
            200+
          </h2>
          <p className="text-sm text-gray-400">
            Projects Completed
          </p>
        </div>

        {/* Clients */}
        <div className="flex flex-col items-center gap-3">
          <HiUsers className="text-yellow-500 text-3xl" />
          <h2 className="text-yellow-500 text-3xl font-semibold tracking-wide">
            500+
          </h2>
          <p className="text-sm text-gray-400">
            Happy Clients
          </p>
        </div>

        {/* Experience */}
        <div className="flex flex-col items-center gap-3">
          <AiOutlineClockCircle className="text-yellow-500 text-3xl" />
          <h2 className="text-yellow-500 text-3xl font-semibold tracking-wide">
            04+
          </h2>
          <p className="text-sm text-gray-400">
            Years Experience
          </p>
        </div>

      </div>
    </section>
    <section className="bg-black text-white py-24">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-semibold">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
            From documentaries, we bring your vision to life with professional
            cinematography and authentic storytelling.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">

          {/* CARD 1 — IMAGE */}
          <div className="relative rounded-xl overflow-hidden group h-[320px]">
            <Image
              src="/prof.jpg"     // image in public folder
              alt="Professional Photoshoots"
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-5 left-5 z-10">
              <FaCamera className="text-yellow-500 text-xl mb-2" />
              <h3 className="text-yellow-500 font-semibold">
                Professional Photoshoots
              </h3>
              <p className="text-xs text-gray-300 max-w-[200px]">
                Capture your special day with cinematic excellence.
              </p>
            </div>
          </div>

          {/* CARD 2 — VIDEO */}
          <VideoCard
            src="/Event.mp4"
            title="Event Shoot"
            desc="Bring your music to life with stunning visuals."
            icon={<FaVideo />}
          />

          {/* CARD 3 — VIDEO */}
          <VideoCard
            src="/MBA.mp4"
            title="Corporate Films"
            desc="Professional storytelling for your brand."
            icon={<FaFilm />}
          />

          {/* CARD 4 — VIDEO */}
          <VideoCard
            src="/doc.mp4"
            title="Documentary"
            desc="Authentic stories from the heart of mountains."
            icon={<FaPlay />}
          />

        </div>

        {/* Button */}
        <div className="text-center mt-16">
         <Link href="/services">
  <button className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-md text-sm hover:bg-yellow-500 hover:text-black transition">
    View All Services
  </button>
</Link>
        </div>

      </section>
      {/* ================= TEAM SECTION ================= */}
<section className="bg-gradient-to-b from-black to-[#0b0b0b] py-28 text-white">

  {/* Heading */}
  <div className="text-center mb-20">
    <h2 className="text-4xl font-semibold">
      Meet Our <span className="text-yellow-500">Team</span>
    </h2>
    <p className="text-gray-400 text-sm mt-3">
      The creative minds behind every frame and story we craft
    </p>
  </div>

  {/* Team Cards */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

    {/* Member 1 */}
    <div className="bg-gradient-to-b from-[#141414] to-[#0b0b0b] 
                    border border-[#1f1f1f] rounded-xl p-10 text-center">

      <div className="flex justify-center mb-6">
        <Image
          src="/image.png"     // put image in /public
          alt="Ishant Rana"
          width={110}
          height={110}
          className="rounded-full border border-yellow-500 object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold">Ishant Rana</h3>

      <p className="text-yellow-500 text-xs mt-1">
        Founder & Creative Director
      </p>

      <p className="text-gray-400 text-sm mt-4 max-w-sm mx-auto">
        Visionary filmmaker with a passion for storytelling from the Himalayas.
      </p>
    </div>

    {/* Member 2 */}
    <div className="bg-gradient-to-b from-[#141414] to-[#0b0b0b] 
                    border border-[#1f1f1f] rounded-xl p-10 text-center">

      <div className="flex justify-center mb-6">
        <Image
          src="/Afreen.png"     // put image in /public
          alt="Afreen Ilyas Patel"
          width={110}
          height={110}
          className="rounded-full border border-yellow-500 object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold">Afreen Ilyas Patel</h3>

      <p className="text-yellow-500 text-xs mt-1">
        Co-Founder & Production Head
      </p>

      <p className="text-gray-400 text-sm mt-4 max-w-sm mx-auto">
        Expert in production management and creative strategy.
      </p>
    </div>

  </div>

  {/* Button */}
  <div className="text-center mt-16">
    <a
      href="/about"
      className="inline-block border border-yellow-500 text-yellow-500 
                 px-8 py-3 rounded-md text-sm hover:bg-yellow-500 
                 hover:text-black transition"
    >
      Learn More About Us
    </a>
  </div>

</section>
{/* ================= FINAL CTA SECTION ================= */}
<section className="relative py-28 bg-black overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-r 
                  from-[#2a1a00] via-black to-[#2a1a00] opacity-90" />

 <div className="relative z-10 max-w-5xl mx-auto px-6 text-center overflow-visible">

  <h2
    className="
      w-full
      text-center
      text-2xl sm:text-3xl md:text-5xl
      font-semibold
      leading-tight
      whitespace-normal
      break-words
      text-white
    "
  >
    Ready to Tell Your{" "}
    <span className="text-yellow-500">Story?</span>
  </h2>

  <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
    Let&apos;s collaborate to create something extraordinary. From concept to final cut,
    we&apos;re with you every step of the way.
  </p>

  <Link href="/contact">
  <button className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-md text-sm font-medium hover:opacity-90 transition">
    Start Your Project
  </button>
</Link>


</div>

</section>

</>
  );
}

function VideoCard({
  src,
  title,
  desc,
  icon,
}: {
  src: string;
  title: string;
  desc: string;
  icon: JSX.Element;
}) {
  return (
    <div className="relative rounded-xl overflow-hidden group h-[320px]">

      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute bottom-5 left-5 z-10">
        <div className="text-yellow-500 text-xl mb-2">{icon}</div>
        <h3 className="text-yellow-500 font-semibold">{title}</h3>
        <p className="text-xs text-gray-300 max-w-[200px]">{desc}</p>
      </div>
    </div>
  );
}
