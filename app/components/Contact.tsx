// "use client";

// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaClock,
// } from "react-icons/fa";
// import emailjs from "@emailjs/browser";
// import { useRef } from "react";
// import toast, { Toaster } from "react-hot-toast";

// export default function ContactPage() {
//   const formRef = useRef<HTMLFormElement>(null);

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formRef.current) return;

//     emailjs
//       .sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         formRef.current,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//       )
//       .then(() => {
//         toast.success("Message sent successfully! ✅");
//         formRef.current?.reset();
//       })
//       .catch((error) => {
//         toast.error("Failed to send: " + error.text);
//       });
//   };

//   return (
//     <section id="contact" className="bg-black text-white">

//       {/* TOAST CONTAINER */}
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           success: {
//             style: {
//               background: "#1a1a1a",
//               color: "#fff",
//               border: "1px solid #EAB308",
//             },
//           },
//           error: {
//             style: {
//               background: "#1a1a1a",
//               color: "#fff",
//               border: "1px solid #ef4444",
//             },
//           },
//         }}
//       />

//       {/* HEADER */}
//       <div
//         className="w-full bg-linear-to-b from-[#1b1b1b] to-[#0a0a0a]
//                    flex items-center justify-center"
//         style={{ height: "260px" }}
//       >
//         <div className="text-center px-6">
//           <h1 className="text-[42px] font-semibold mb-4 tracking-tight">
//             Get in <span className="text-yellow-500">Touch</span>
//           </h1>
//           <p className="text-[13px] text-gray-400 max-w-160 mx-auto leading-relaxed">
//             Ready to start your project? Have questions? We&apos;d love to hear from you.
//           </p>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-6 md:px-20 py-24 grid md:grid-cols-2 gap-16">

//         {/* LEFT INFO */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-8">
//             Contact <span className="text-yellow-500">Information</span>
//           </h2>

//           <div className="space-y-6">
//             <InfoCard icon={<FaPhoneAlt />} title="Phone" text="+91-8439220575" sub="Mon–Sun, 8am–10pm IST" />
//             <InfoCard icon={<FaEnvelope />} title="Email" text="design@pahadibhulaproduction.in" sub="We reply within 02 hours" />
//             <InfoCard icon={<FaMapMarkerAlt />} title="Location" text="Dehradun, Uttarakhand" sub="India" />
//             <InfoCard icon={<FaClock />} title="Working Hours" text="Monday – Sunday" sub="8:00 AM – 10:00 PM IST" />
//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="bg-linear-to-b from-[#141414] to-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-10">
//           <h2 className="text-2xl font-semibold mb-8">
//             Send us a <span className="text-yellow-500">Message</span>
//           </h2>

//           <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

//             <div className="grid md:grid-cols-2 gap-6">
//               <Input name="from_name" label="Your Name *" />
//               <Input name="email" label="Email Address *" type="email" />
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <Input name="phone" label="Phone Number" />
//               <Input name="subject" label="Subject *" />
//             </div>

//             <div>
//               <label className="block text-sm mb-2">Your Message *</label>
//               <textarea
//                 name="message"
//                 required
//                 className="w-full h-32 bg-black border border-[#2a2a2a] rounded-md px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-yellow-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-yellow-500 text-black px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
//             >
//               Send Message →
//             </button>

//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ---------- Components ---------- */

// function InfoCard({ icon, title, text, sub }: any) {
//   return (
//     <div className="bg-linear-to-b from-[#141414] to-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-6 flex gap-4">
//       <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#2a1d05] text-yellow-500">
//         {icon}
//       </div>
//       <div>
//         <h3 className="text-sm font-semibold">{title}</h3>
//         <p className="text-sm text-gray-300">{text}</p>
//         <p className="text-xs text-gray-500">{sub}</p>
//       </div>
//     </div>
//   );
// }

// function Input({ label, name, type = "text" }: any) {
//   return (
//     <div>
//       <label className="block text-sm mb-2">{label}</label>
//       <input
//         type={type}
//         name={name}
//         required
//         className="w-full bg-black border border-[#2a2a2a] rounded-md px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-yellow-500"
//       />
//     </div>
//   );
// }




"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        toast.success("Message sent successfully! ✅");
        formRef.current?.reset();
      })
      .catch((error) => {
        toast.error("Failed to send: " + error.text);
      });
  };

  return (
    <section id="contact" className="bg-black text-white">
      <Toaster
        position="top-right"
        toastOptions={{
          success: { style: { background: "#1a1a1a", color: "#fff", border: "1px solid #EAB308" } },
          error: { style: { background: "#1a1a1a", color: "#fff", border: "1px solid #ef4444" } },
        }}
      />

      {/* HEADER */}
      <div className="w-full bg-linear-to-b from-[#1b1b1b] to-[#0a0a0a] flex items-center justify-center py-16 md:py-24">
        <div className="text-center px-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-tight">
            Get in <span className="text-yellow-500">Touch</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Ready to start your project? Have questions? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16">

        {/* LEFT INFO */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-8">
            Contact <span className="text-yellow-500">Information</span>
          </h2>
          <div className="space-y-4">
            <InfoCard icon={<FaPhoneAlt />} title="Phone" text="+91-8439220575" sub="Mon–Sun, 8am–10pm IST" />
            <InfoCard icon={<FaEnvelope />} title="Email" text="design@pahadibhulaproduction.in" sub="We reply within 02 hours" />
            <InfoCard icon={<FaMapMarkerAlt />} title="Location" text="Dehradun, Uttarakhand" sub="India" />
            <InfoCard icon={<FaClock />} title="Working Hours" text="Monday – Sunday" sub="8:00 AM – 10:00 PM IST" />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-linear-to-b from-[#141414] to-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">
            Send us a <span className="text-yellow-500">Message</span>
          </h2>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input name="from_name" label="Your Name *" />
              <Input name="email" label="Email Address *" type="email" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input name="phone" label="Phone Number" />
              <Input name="subject" label="Subject *" />
            </div>
            <div>
              <label className="block text-sm mb-2">Your Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-black border border-[#2a2a2a] rounded-md px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-yellow-500 text-black px-8 py-3 rounded-md text-sm font-semibold hover:bg-yellow-400 transition"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, text, sub }: any) {
  return (
    <div className="bg-linear-to-b from-[#141414] to-[#0b0b0b] border border-[#1f1f1f] rounded-xl p-5 flex gap-4 hover:border-yellow-500/40 transition-colors duration-300">
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#2a1d05] text-yellow-500 shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="text-sm text-gray-300 truncate">{text}</p>
        <p className="text-xs text-gray-500">{sub}</p>
      </div>
    </div>
  );
}

function Input({ label, name, type = "text" }: any) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required
        className="w-full bg-black border border-[#2a2a2a] rounded-md px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-yellow-500 transition-colors"
      />
    </div>
  );
}