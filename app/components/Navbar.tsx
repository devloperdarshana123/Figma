import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
   <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-yellow-500">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-10 h-[100px] text-white">

    {/* Logo */}
    <Image
      src="/logo.png"
      alt="PB Logo"
      width={300}
      height={150}
      priority
      className="object-contain h-full w-auto max-h-[90px] drop-shadow-lg"
    />



        {/* Menu */}
       <ul className="flex gap-8 text-sm tracking-wide font-inter">
  <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
  <li><Link href="/services" className="hover:text-yellow-500">Services</Link></li>
  <li><Link href="/portfolio" className="hover:text-yellow-500">Portfolio</Link></li>
  <li><Link href="/about" className="hover:text-yellow-500">About</Link></li>
  <li><Link href="/contact" className="hover:text-yellow-500">Contact</Link></li>
</ul>


        {/* CTA */}
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-md text-sm hover:opacity-90 font-inter">
          Get in Touch
        </button>

      </div>
    </nav>
  );
}
