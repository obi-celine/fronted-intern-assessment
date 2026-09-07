import Image from "next/image";

const boltIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-white shrink-0"
  >
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
);

export default function ManagementDevelopment() {
  const benefits = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];

  return (
    <section className="w-full px-16 py-16 bg-[#2E0A29]">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 w-full">
          <Image
            src="/images/management-development.jpg"
            alt="A manager showing colleagues information on a tablet in an office hallway"
            width={600}
            height={500}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>

        <div className="flex-1 text-white">
          <h2 className="text-3xl font-semibold mb-6">
            Management Development Program
          </h2>

          <p className="text-gray-300 mb-4">
            Tobams Group offers a comprehensive Management Development
            Program designed to equip corporate organisations with the
            high-performing leaders they need to thrive.
          </p>

          <p className="text-gray-300 mb-6">
            Our program includes workshops, seminars, coaching sessions,
            online courses, and experiential learning opportunities designed
            to improve leadership, strategic thinking, communication, and
            other essential managerial competencies for corporate
            organisations.
          </p>

          <div className="flex flex-col gap-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 bg-[#8B5C7E] rounded px-4 py-3"
              >
                {boltIcon}
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}