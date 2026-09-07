import Image from "next/image";

export default function LearningManagementSystem() {
  return (
    <section
      className="w-full flex flex-col md:flex-row items-center gap-20 py-12 px-16"
      style={{ backgroundColor: "#5712441A" }}
    >
      <div className="w-133.75 h-133.75 rounded-full overflow-hidden shrink-0">
        <Image
          src="/images/Ims-photo.png"
          alt="Two colleagues, a man and a woman, standing together in an office"
          width={535}
          height={535}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-15.5 w-full md:w-168.75">
        <h2 className="text-3xl font-semibold text-[#571244]">
          Learning Management System
        </h2>

        <div className="bg-[#5712441A] rounded p-6">
          <p className="text-gray-700 mb-6">
            TG Academy is a hub of knowledge and skill-building resources
            designed to empower tech talents on their learning journey. From
            technical courses covering the latest programming languages and
            development frameworks to soft skills training in leadership,
            effective communication and project management, TG Academy
            offers a wide range of courses to cater to diverse learning
            needs. With accessible and interactive learning materials,
            individuals can enhance their skills and stay ahead in today&apos;s
            competitive tech landscape.
          </p>

          <p className="font-semibold text-[#571244] mb-3">
            Some of our courses include:
          </p>

          <div className="grid grid-cols-3 gap-x-6 gap-y-3 text-gray-700 text-sm">
            <span>• Business Analysis</span>
            <span>• Design Thinking</span>
            <span>• Effective Communication</span>
            <span>• Entrepreneurship</span>
            <span>• Career Development</span>
            <span>• Business Model</span>
          </div>
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
    </section>
  );
}