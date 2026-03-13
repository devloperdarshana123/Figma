// // import Image from "next/image";

// // const categories = [
// //   "All",
// //   "Wedding",
// //   "Music Video",
// //   "Corporate",
// //   "Documentary",
// //   "Photography",
// //   "Advertising",
// // ];

// // const items = [
// //   { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777971/weeding_fecvk5.mp4", tag: "Wedding" },
// //   { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777955/Music_eibsm8.mp4", tag: "Music Video" },
// //   { src: "/Container3.png", tag: "Corporate" },
// //   { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777989/doc_glq8jn.mp4", tag: "Documentary" },
// //   { src: "/Container4.png", tag: "Photography" },
// //   { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777880/Adver_worzni.mp4", tag: "Advertising" },
// //   { src: "https://res.cloudinary.com/davlyosj1/image/upload/v1772777900/prof_jdkvfj.jpg", tag: "Photography" },
// //   { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772781869/Event_qcm0o3.mp4", tag: "Event Shoot" },
// //   { src: "/pic.jpg", tag: "Photography" },
// //   { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777928/BTS_nm2zzd.mp4", tag: "BTS" },
// //   { src: "/Container.png", tag: "Photoshoot" },
// //   { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772779150/MBA_ori9m0.mp4", tag: "Advertising" },
// // ];


// // export default function PortfolioPage() {
// //   return (
// //     <section className="bg-black text-white px-6 md:px-20 py-24">

// //       {/* HEADER */}
// //       <div className="text-center max-w-3xl mx-auto mb-16">
// //         <h1 className="text-4xl font-semibold mb-4">
// //           Our <span className="text-yellow-500">Portfolio</span>
// //         </h1>
// //         <p className="text-gray-400 text-sm">
// //           Explore our collection of cinematic masterpieces, from breathtaking
// //           weddings to compelling documentaries and creative advertising campaigns.
// //         </p>
// //       </div>

// //       {/* FILTERS */}
// //       <div className="flex flex-wrap justify-center gap-3 mb-16">
// //         {categories.map((cat, i) => (
// //           <button
// //             key={i}
// //             className={`px-4 py-1.5 text-xs rounded-full border
// //               ${cat === "All"
// //                 ? "bg-yellow-500 text-black border-yellow-500"
// //                 : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"}
// //             `}
// //           >
// //             {cat}
// //           </button>
// //         ))}
// //       </div>

// //       {/* GRID */}
// //     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //   {items.map((item, i) => {
// //    const isVideo = item.src.endsWith(".mp4") || item.src.endsWith(".mov");

// //     return (
// //       <div
// //         key={i}
// //         className="relative h-65 rounded-xl overflow-hidden group"
// //       >
// //         {/* MEDIA */}
// //       {isVideo ? (
// //   <video
// //     autoPlay
// //     loop
// //     muted
// //     playsInline
// //     preload="metadata"
// //     className="absolute inset-0 w-full h-full object-cover
// //                group-hover:scale-105 transition duration-500"
// //   >
// //     <source
// //       src={item.src}
// //       type={item.src.endsWith(".mov") ? "video/quicktime" : "video/mp4"}
// //     />
// //   </video>
// // ) : (
// //           <Image
// //             src={item.src}
// //             alt={item.tag}
// //             fill
// //             className="object-cover group-hover:scale-105 transition duration-500"
// //           />
// //         )}

// //         {/* Tag */}
// //         <span className="absolute top-3 left-3 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full z-10">
// //           {item.tag}
// //         </span>
// //       </div>
// //     );
// //   })}
// // </div>


// //       {/* FINAL CTA SECTION */}
// // <div className="mt-32 py-24 text-center relative overflow-hidden">

// //   {/* Background Glow */}
// //   <div className="absolute inset-0 bg-linear-to-r from-[#3a2600] via-black to-[#3a2600] opacity-90"></div>

// //   <div className="relative z-10 max-w-3xl mx-auto px-6">
// //     <h2 className="text-4xl md:text-5xl font-semibold mb-6">
// //       Ready to Create Your Story?
// //     </h2>

// //     <p className="text-gray-300 text-sm md:text-base mb-10">
// //       Let&apos;s bring your vision to life with our expert cinematography and production services.
// //     </p>

// //     <button className="bg-yellow-500 text-black px-8 py-3 rounded-md text-sm font-medium hover:opacity-90 transition">
// //       Start Your Project
// //     </button>
// //   </div>

// // </div>


// //     </section>
// //   );
// // }



import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Wedding", "Music Video", "Corporate", "Documentary", "Photography", "Advertising"];

const items = [
  { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777971/weeding_fecvk5.mp4", tag: "Wedding" },
  { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777955/Music_eibsm8.mp4", tag: "Music Video" },
  { src: "/Container3.png", tag: "Corporate" },
  { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777989/doc_glq8jn.mp4", tag: "Documentary" },
  { src: "/Container4.png", tag: "Photography" },
  { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777880/Adver_worzni.mp4", tag: "Advertising" },
  { src: "https://res.cloudinary.com/davlyosj1/image/upload/v1772777900/prof_jdkvfj.jpg", tag: "Photography" },
  { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772781869/Event_qcm0o3.mp4", tag: "Event Shoot" },
  { src: "/pic.jpg", tag: "Photography" },
  { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772777928/BTS_nm2zzd.mp4", tag: "BTS" },
  { src: "/Container.png", tag: "Photoshoot" },
  { src: "https://res.cloudinary.com/davlyosj1/video/upload/v1772779150/MBA_ori9m0.mp4", tag: "Advertising" },
];

export default function PortfolioPage() {
  return (
    <section className="bg-black text-white px-5 md:px-12 lg:px-20 py-20 md:py-24">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Our <span className="text-yellow-500">Portfolio</span>
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          Explore our collection of cinematic masterpieces, from breathtaking
          weddings to compelling documentaries and creative advertising campaigns.
        </p>
      </div>

      {/* FILTERS — horizontally scrollable on mobile */}
      <div className="flex gap-3 mb-12 md:mb-16 overflow-x-auto pb-2 scrollbar-hide justify-start md:justify-center">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`px-4 py-1.5 text-xs rounded-full border whitespace-nowrap shrink-0 transition-colors duration-200
              ${cat === "All"
                ? "bg-yellow-500 text-black border-yellow-500"
                : "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {items.map((item, i) => {
          const isVideo = item.src.endsWith(".mp4") || item.src.endsWith(".mov");
          return (
            <div key={i} className="relative h-56 sm:h-64 md:h-72 rounded-xl overflow-hidden group">
              {isVideo ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                >
                  <source
                    src={item.src}
                    type={item.src.endsWith(".mov") ? "video/quicktime" : "video/mp4"}
                  />
                </video>
              ) : (
                <Image
                  src={item.src}
                  alt={item.tag}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              )}
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />
              <span className="absolute top-3 left-3 bg-yellow-500 text-black text-xs px-3 py-1 rounded-full z-10 font-medium">
                {item.tag}
              </span>
            </div>
          );
        })}
      </div>

      {/* FINAL CTA */}
      <div className="mt-20 md:mt-32 py-16 md:py-24 text-center relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-linear-to-r from-[#3a2600] via-black to-[#3a2600] opacity-90" />
        <div className="relative z-10 max-w-3xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Ready to Create Your Story?
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-8 md:mb-10 leading-relaxed">
            Let&apos;s bring your vision to life with our expert cinematography and production services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-md text-sm font-semibold hover:bg-yellow-400 transition"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}



