import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative h-[70vh] overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">

  <Image
    src="/logo.png"
    alt="PB Logo"
    width={600}
    height={450}
    priority
    className="object-contain drop-shadow-lg max-w-[95%] max-h-[320px] h-auto"
  />

 

</div>



    </section>
  );
}
