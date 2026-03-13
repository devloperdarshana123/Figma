// import React from "react";
// import Image from "next/image";
// import {
//   FaMountain,
//   FaHeart,
//   FaEye,
//   FaHandshake,
// } from "react-icons/fa";

// export default function About() {
//   return (
//     <section className="bg-black text-white px-6 md:px-20 py-24">

//       {/* HEADER */}
//       <div className="text-center max-w-3xl mx-auto mb-24">
//         <h1 className="text-4xl font-semibold mb-4">About Us</h1>
//         <p className="text-gray-400 text-sm">
//           A media production house born in the heart of the Himalayas,
//           dedicated to authentic mountain storytelling.
//         </p>
//       </div>

//       {/* OUR STORY */}
//       <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
//         <div className="relative w-full h-90 rounded-xl overflow-hidden">
//           <Image
//             src="https://res.cloudinary.com/davlyosj1/image/upload/v1772783392/story_pagpdd.jpg"
//             alt="Our Story"
//             fill
//             className="object-cover"
//           />
//           <span className="absolute bottom-4 left-4 bg-yellow-500 text-black text-xs px-4 py-2 rounded">
//             04+ <br /> Years Experience
//           </span>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
//           <p className="text-gray-400 text-sm mb-4">
//            Welcome to Pahadi Bhula Production, a media production house born in the heart of the Himalayas. The name "Pahadi Bhula" meaning "Mountain Brother" reflects our deep connection to the mountains and the communities that call them home.
//           </p>
//           <p className="text-gray-400 text-sm mb-4">
//        For over a decade, we have been assisting filmmakers, production houses, and agencies to create and tell meaningful stories. Our founders and team are born and brought up in Uttarakhand and Himachal Pradesh, giving us an unmatched understanding of this region.
//           </p>
//           <p className="text-gray-400 text-sm">
//            From location scouting and filming permissions to hiring crew and post-production, we take care of all your requirements. Our passion for storytelling and authentic representation of mountain communities drives us to create captivating visual content.
//            </p>
//         </div>
//       </div>

//       {/* OUR VALUES */}
//       <div className="py-24">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl font-semibold">
//             Our <span className="text-yellow-500">Values</span>
//           </h2>
//           <p className="text-gray-400 text-sm mt-2">
//             The principles that guide everything we do.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           <Value
//             icon={<FaMountain />}
//             title="Rooted in the Mountains"
//             text="Born and raised in the Himalayas, we understand the dynamics of this region deeply. Our connection to these mountains is personal."
//           />
//           <Value
//             icon={<FaHeart />}
//             title="Passion for Storytelling"
//             text="Every project is an opportunity to tell a meaningful story with creativity, dedication, and commitment to quality."
//           />
//           <Value
//             icon={<FaEye />}
//             title="Authentic Representation"
//             text="We believe in representing mountain communities authentically and celebrating their culture and traditions."
//           />
//           <Value
//             icon={<FaHandshake />}
//             title="Client-Focused"
//             text="Your vision is our priority. We work closely with clients to exceed expectations."
//           />
//         </div>
//       </div>

//       {/* MISSION & VISION */}
//       <div className="py-32 bg-black">
//         <div className="max-w-7xl mx-auto flex justify-center gap-14 flex-col md:flex-row">

//           <MissionCard
//             title="Our Mission"
//             text="To create authentic, compelling visual content that celebrates the beauty, culture, and people of the Himalayan region while providing world-class production services."
//           />

//           <MissionCard
//             title="Our Vision"
//             text="To be the leading production house in the Himalayan region, known for authentic storytelling, professional excellence, and deep community commitment."
//           />

//         </div>
//       </div>

//       {/* JOIN US CTA */}
//       <div className="mt-32 py-24 text-center relative overflow-hidden">
//         <div className="absolute inset-0 bg-linear-to-b from-[#0b0b0b] via-black to-[#0b0b0b]" />

//         <div className="relative z-10 max-w-3xl mx-auto px-6">
//           <h2 className="text-4xl md:text-5xl font-semibold mb-6">
//             Join Us on This <span className="text-yellow-500">Journey</span>
//           </h2>

//           <p className="text-gray-400 text-sm md:text-base mb-10">
//             Let&apos;s explore, create, and express together. We&apos;re excited
//             to bring your vision to life with our unique mountain perspective.
//           </p>

//           <button className="bg-yellow-500 text-black px-8 py-3 rounded-md text-sm font-medium hover:opacity-90 transition">
//             Work With Us
//           </button>
//         </div>
//       </div>

//     </section>
//   );
// }

// /* ---------- Reusable Components ---------- */

// function Value({
//   icon,
//   title,
//   text,
// }: {
//  icon: React.ReactNode;
//   title: string;
//   text: string;
// }) {
//   return (
//     <div className="bg-linear-to-b from-[#141414] to-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-8">
//       <div className="text-yellow-500 text-xl mb-4">{icon}</div>
//       <h3 className="text-sm font-semibold mb-2">{title}</h3>
//       <p className="text-xs text-gray-400 leading-relaxed">{text}</p>
//     </div>
//   );
// }

// function MissionCard({
//   title,
//   text,
// }: {
//   title: string;
//   text: string;
// }) {
//   return (
//     <div className="w-110 bg-linear-to-b from-[#1b1b1b] to-[#0e0e0e]
//                     border border-[#2a2a2a] rounded-xl px-8 py-10">
//       <h3 className="text-yellow-500 text-lg font-semibold mb-4">
//         {title}
//       </h3>
//       <p className="text-sm text-gray-400 leading-relaxed">
//         {text}
//       </p>
//     </div>
//   );
// }



import React from "react";
import Image from "next/image";
import { FaMountain, FaHeart, FaEye, FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-black text-white px-5 md:px-12 lg:px-20 py-20 md:py-24">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">About Us</h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          A media production house born in the heart of the Himalayas,
          dedicated to authentic mountain storytelling.
        </p>
      </div>

      {/* OUR STORY */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32">

        {/* Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden">
          <Image
            src="https://res.cloudinary.com/davlyosj1/image/upload/v1772783392/story_pagpdd.jpg"
            alt="Our Story"
            fill
            className="object-cover"
          />
          <span className="absolute bottom-4 left-4 bg-yellow-500 text-black text-xs px-4 py-2 rounded leading-tight">
            04+ <br /> Years Experience
          </span>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Welcome to Pahadi Bhula Production, a media production house born in the heart of the Himalayas. The name "Pahadi Bhula" meaning "Mountain Brother" reflects our deep connection to the mountains and the communities that call them home.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            For over a decade, we have been assisting filmmakers, production houses, and agencies to create and tell meaningful stories. Our founders and team are born and brought up in Uttarakhand and Himachal Pradesh, giving us an unmatched understanding of this region.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            From location scouting and filming permissions to hiring crew and post-production, we take care of all your requirements.
          </p>
        </div>
      </div>

      {/* OUR VALUES */}
      <div className="py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Our <span className="text-yellow-500">Values</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            The principles that guide everything we do.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Value
            icon={<FaMountain />}
            title="Rooted in the Mountains"
            text="Born and raised in the Himalayas, we understand the dynamics of this region deeply. Our connection to these mountains is personal."
          />
          <Value
            icon={<FaHeart />}
            title="Passion for Storytelling"
            text="Every project is an opportunity to tell a meaningful story with creativity, dedication, and commitment to quality."
          />
          <Value
            icon={<FaEye />}
            title="Authentic Representation"
            text="We believe in representing mountain communities authentically and celebrating their culture and traditions."
          />
          <Value
            icon={<FaHandshake />}
            title="Client-Focused"
            text="Your vision is our priority. We work closely with clients to exceed expectations."
          />
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-8 md:gap-14">
          <MissionCard
            title="Our Mission"
            text="To create authentic, compelling visual content that celebrates the beauty, culture, and people of the Himalayan region while providing world-class production services."
          />
          <MissionCard
            title="Our Vision"
            text="To be the leading production house in the Himalayan region, known for authentic storytelling, professional excellence, and deep community commitment."
          />
        </div>
      </div>

      {/* JOIN US CTA */}
      <div className="mt-16 md:mt-32 py-16 md:py-24 text-center relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-linear-to-b from-[#0b0b0b] via-black to-[#0b0b0b]" />
        <div className="relative z-10 max-w-3xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Join Us on This <span className="text-yellow-500">Journey</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-8 md:mb-10 leading-relaxed">
            Let&apos;s explore, create, and express together. We&apos;re excited
            to bring your vision to life with our unique mountain perspective.
          </p>
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-md text-sm font-semibold hover:bg-yellow-400 transition">
            Work With Us
          </button>
        </div>
      </div>
    </section>
  );
}

function Value({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="bg-linear-to-b from-[#141414] to-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-6 md:p-8 hover:border-yellow-500/40 transition-colors duration-300">
      <div className="text-yellow-500 text-xl mb-4">{icon}</div>
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      <p className="text-xs text-gray-400 leading-relaxed">{text}</p>
    </div>
  );
}

function MissionCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex-1 bg-linear-to-b from-[#1b1b1b] to-[#0e0e0e] border border-[#2a2a2a] rounded-xl px-6 md:px-8 py-8 md:py-10 hover:border-yellow-500/40 transition-colors duration-300">
      <h3 className="text-yellow-500 text-lg font-semibold mb-4">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
    </div>
  );
}