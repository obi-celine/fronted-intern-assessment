export default function TrainingTheConsultant() {
  const features = [
    {
      title: "Expert-Led Learning",
      description:
        "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
    },
    {
      title: "Interactive Workshops",
      description:
        "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
    },
    {
      title: "Global Recognition",
      description:
        "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
    },
  ];

  return (
    <section className="w-full bg-[#F2E9EC] px-16 py-12">
      <h2 className="text-3xl font-semibold text-[#571244] mb-2">
        Training The Consultant
      </h2>

      <p className="font-medium text-[#571244] mb-4">
        Maximise Your Potential as a Certified Trainer:
      </p>

      <p className="text-gray-700 max-w-5xl mb-8">
        With the help of our Training Consultants program, take a
        revolutionary step toward becoming a distinguished certified training
        consultant. Learn from professionals in the field, immerse yourself
        in a thorough curriculum, and hone your training methods through
        interactive workshops. Participating in our program will enable you
        to gain expertise in diverse courses while also developing the
        abilities to mentor and encourage others in their career advancement.
      </p>

      <div className="bg-[#571244] rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
        {features.map((feature) => (
          <div key={feature.title}>
            <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-200 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-2 bg-[#571244] text-white px-6 py-3 rounded">
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
    </section>
  );
}