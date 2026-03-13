// // import Image from "next/image";
// // export default function Hero() {
// //   return (
// //     <section className="relative h-[70vh] overflow-hidden">

// //       {/* Background Video */}
// //       <video
// //         className="absolute inset-0 w-full h-full object-cover"
// //         src="https://res.cloudinary.com/davlyosj1/video/upload/v1772777910/hero_umjlne.mp4"
// //         autoPlay
// //         loop
// //         muted
// //         playsInline
// //         preload="auto"
// //       />

// //       {/* Dark Overlay */}
// //       <div className="absolute inset-0 bg-black/40" />

// //     <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">

// //   <Image
// //     src="/logo.png"
// //     alt="PB Logo"
// //     width={600}
// //     height={450}
// //     priority
// //     className="object-contain drop-shadow-lg max-w-[95%] max-h-80 h-auto"
// //   />

 

// // </div>



// //     </section>
// //   );
// // }



import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/davlyosj1/video/upload/v1772777910/hero_umjlne.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-5">

        <Image
          src="/logo.png"
          alt="PB Logo"
          width={500}
          height={375}
          priority
          className="object-contain drop-shadow-2xl w-[85vw] max-w-md md:max-w-lg h-auto mb-6"
        />

        <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Cinematic stories from the heart of the Himalayas
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/portfolio"
            className="bg-yellow-500 text-black px-7 py-3 rounded-md text-sm font-semibold hover:bg-yellow-400 transition w-full sm:w-auto text-center"
          >
            View Our Work
          </Link>
          <Link
            href="/contact"
            className="border border-yellow-500 text-yellow-500 px-7 py-3 rounded-md text-sm font-medium hover:bg-yellow-500 hover:text-black transition w-full sm:w-auto text-center"
          >
            Start a Project
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-px h-10 bg-linear-to-b from-yellow-500 to-transparent mx-auto" />
      </div>
    </section>
  );
}


