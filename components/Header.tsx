import Image from "next/image";

function NavDropdown({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`flex items-center gap-1 pb-1 ${
        active
          ? "text-purple-800 border-b-2 border-purple-800"
          : "text-gray-700"
      }`}
      aria-haspopup="true"
      aria-expanded="false"
    >
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="w-3 h-3"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}

export default function Header() {
  return (
    <header className="w-full bg-white">
      {/* Top row: logo + account + take assessment */}
      <div className="flex items-center justify-between px-8 h-35">
        <Image
          src="/images/Logo-bg.png"
          alt="Tobams Group logo"
          width={160}
          height={40}
          className="h-auto"
        />

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-purple-950 text-white text-sm px-4 py-2 rounded">
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.76-3.58-5-8-5Z" />
              </svg>
            </span>
            Account
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-3 h-3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <button className="bg-rose-500 text-white text-sm px-5 py-2 rounded">
            Take Assessment
          </button>
        </div>
      </div>
       {/* Bottom row: nav links */}
      <nav className="hidden md:flex items-center justify-center gap-8 text-sm py-3 border-t border-gray-200 text-gray-700">
        <NavDropdown label="About" active />
        <NavDropdown label="What We Do" />
        <NavDropdown label="Jobs" />
        <a href="#">Projects</a>
        <a href="#">TG Academy</a>
        <a href="#">Strategic Partnership</a>
        <a href="#">Pricing</a>
        <a href="#">Book a Consultation</a>
      </nav>
    </header>
  );
}

