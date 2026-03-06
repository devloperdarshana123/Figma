import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-[#0b0b0b] to-black text-gray-400 pt-20">
      <div className="max-w-7xl mx-auto px-10">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12">
 

          {/* Brand */}
          <div>
    <Image
         src="/logo.png"
         alt="PB Logo"
         width={300}
         height={150}
         priority
         className="object-contain h-full w-auto max-h-22.5 drop-shadow-lg"
       />
            <h2 className="text-yellow-500 text-lg font-semibold mb-4">
              Pahadi Bhula
            </h2>
            <p className="text-sm leading-relaxed">
              Crafting cinematic tales from the heart of the Himalayas.
              We bring your stories to life with authentic mountain storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
  <h3 className="text-white text-sm font-semibold mb-4">
    Quick Links
  </h3>

  <ul className="space-y-2 text-sm text-gray-400">
    <li>
      <Link href="/" className="hover:text-yellow-500 transition">
        Home
      </Link>
    </li>

    <li>
      <Link href="/services" className="hover:text-yellow-500 transition">
        Services
      </Link>
    </li>

    <li>
      <Link href="/about" className="hover:text-yellow-500 transition">
        About
      </Link>
    </li>

    <li>
      <Link href="/contact" className="hover:text-yellow-500 transition">
        Contact
      </Link>
    </li>
  </ul>
</div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Wedding Cinematography</li>
              <li>Music Videos</li>
              <li>Corporate Films</li>
              <li>Documentary Production</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-500" />
                +91-8439220575
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-500" />
                design@pahadibhulaproduction.in
              </li>

              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-500" />
                Dehradun, Uttarakhand, India
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <span className="p-2 border border-gray-600 rounded-full">
                <FaInstagram />
              </span>
              <span className="p-2 border border-gray-600 rounded-full">
                <FaYoutube />
              </span>
              <span className="p-2 border border-gray-600 rounded-full">
                <FaFacebookF />
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-6 pb-8 text-sm">
          © 2026 Pahadi Bhula Production. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
