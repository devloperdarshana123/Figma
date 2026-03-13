// import Link from "next/link";
// import Image from "next/image";
// export default function Navbar() {
//   return (
//    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-yellow-500">
//   <div className="max-w-7xl mx-auto flex items-center justify-between px-10 h-25 text-white">

//     {/* Logo */}
//     <Image
//       src="/logo.png"
//       alt="PB Logo"
//       width={300}
//       height={150}
//       priority
//       className="object-contain h-full w-auto max-h-22.5 drop-shadow-lg"
//     />



//         {/* Menu */}
//        <ul className="flex gap-8 text-sm tracking-wide font-inter">
//   <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
//   <li><Link href="/services" className="hover:text-yellow-500">Services</Link></li>
//   <li><Link href="/portfolio" className="hover:text-yellow-500">Portfolio</Link></li>
//   <li><Link href="/about" className="hover:text-yellow-500">About</Link></li>
//   <li><Link href="/contact" className="hover:text-yellow-500">Contact</Link></li>
// </ul>


//         {/* CTA */}
//         <button className="bg-yellow-500 text-black px-4 py-2 rounded-md text-sm hover:opacity-90 font-inter">
//           Get in Touch
//         </button>

//       </div>
//     </nav>
//   );
// }



"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-yellow-500/40
        ${scrolled ? "bg-black/95 backdrop-blur-md shadow-lg shadow-yellow-500/5" : "bg-black"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="PB Logo"
            width={160}
            height={80}
            priority
            className="object-contain h-14 w-auto drop-shadow-lg"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm tracking-wide">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-500 group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-yellow-500 text-black px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-yellow-400 transition-colors duration-200"
        >
          Get in Touch
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl p-2 rounded-md hover:bg-white/10 transition"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#0d0d0d] border-t border-yellow-500/20
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-yellow-500 transition py-1.5 border-b border-white/5"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-yellow-500 text-black px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-yellow-400 transition"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}