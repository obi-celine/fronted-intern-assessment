import Image from "next/image";

const boltIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-[#571244] shrink-0"
  >
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
);

export default function TransformationHub() {
  const items = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <section className="w-full bg-[#FBDCE0] px-16 py-12">
      <p className="italic text-blue-600 font-medium mb-1">
        Learning With Our CEO:
      </p>
      <h2 className="italic text-3xl font-semibold text-[#571244] mb-6">
        Transformation Hub With Jite Newton
      </h2>

      <p className="text-gray-700 max-w-5xl mb-8">
        Transformation Hub with Jite Newton is a flagship webinar series
        curated by the CEO, Dr. Jite Newton. Designed to elevate career
        trajectories and leadership capabilities, this exclusive event offers
        invaluable insights and strategies for personal and professional
        growth. Whether you&apos;re seeking to advance your career or enhance
        your leadership skills, the Transformation Hub provides a
        transformative learning experience to unlock your full potential and
        drive success in your endeavours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="relative rounded-2xl overflow-hidden min-h-90">
          <Image
            src="/images/transformation-hub.jpg"
            alt="A woman looking at a digital data display, representing career transformation"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="bg-[#FCE9EC] rounded-2xl p-6 flex flex-col justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 bg-white rounded px-4 py-3 text-gray-700 text-sm"
              >
                {boltIcon}
                {item}
              </div>
            ))}
          </div>

          <button className="flex items-center gap-2 bg-[#571244] text-white px-6 py-3 rounded w-fit">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}