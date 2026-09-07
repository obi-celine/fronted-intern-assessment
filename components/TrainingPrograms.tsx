import Image from "next/image";

const boltIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 text-[#571244] shrink-0 mt-1"
  >
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
);

function ProgramRow({
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  title: string;
  description: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-10 py-10`}
    >
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-700">
              {boltIcon}
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="rounded-2xl object-cover w-full h-auto"
        />
      </div>
    </div>
  );
}

export default function TrainingPrograms() {
  return (
    <section className="px-16 py-8">
      <ProgramRow
        title="Corporate Trainings"
        description="Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values."
        items={[
          "Leadership Training",
          "Strategic Planning and Implementation",
          "Project Management",
          "Sustainability Training",
          "Customised Training",
        ]}
        imageSrc="/images/corporate-training.jpg"
        imageAlt="A facilitator leading a corporate training session with a team around a table"
      />

      <ProgramRow
        title="Personalised Individual Training"
        description="Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals."
        items={[
          "Leadership Development",
          "Soft Skills Development",
          "Industry Specific Knowledge",
          "Technical Skills Enhancement",
          "Time Management and Productivity",
          "Career Development",
        ]}
        imageSrc="/images/personalised-training.jpg"
        imageAlt="Two women attentively participating in a training session"
        reverse
      />

      <ProgramRow
        title="Capacity Development"
        description="At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:"
        items={[
          "Tailored Training Programs",
          "Expert-Led Workshops",
          "Personalized Mentorship",
          "Technical Skills Enhancement",
          "Collaborative Learning Environment",
          "Ongoing Support and Resources",
        ]}
        imageSrc="/images/capacity-development.jpg"
        imageAlt="A presenter pointing at charts on a flip board during a workshop"
      />
    </section>
  );
}