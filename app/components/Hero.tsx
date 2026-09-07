import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-125 flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/Hero-bg.jpg"
        alt="Woman reviewing training analytics on a digital dashboard"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-2xl px-4 text-white">
        <span className="inline-block bg-white/10 border border-white/30 rounded-full px-4 py-1 text-xs tracking-wide mb-4">
          WHAT WE DO
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Training and Development
        </h1>
        <p className="text-sm md:text-base text-gray-200 mb-6">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>
        <button className="bg-[#4B1942] hover:bg-[#3A1433] text-white text-sm px-6 py-3 rounded">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}