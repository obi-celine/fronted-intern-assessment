import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/">
          {/* Export the logo from Figma and place it as public/logo.svg */}
          <Image src="/logo.svg" alt="Luthman Group Logo" width={140} height={40} priority />
        </Link>
        <div className="flex items-center space-x-3">
          <button className="text-xs sm:text-sm font-medium border border-purple-800 text-purple-800 px-3 py-1.5 rounded-md hover:bg-purple-50 transition-colors">
            Account ▾
          </button>
          <button className="text-xs sm:text-sm font-medium bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-600 transition-colors">
            Take Assessment
          </button>
        </div>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 hidden md:flex items-center justify-center space-x-6 text-sm font-medium text-gray-700">
        <Link href="#" className="hover:text-purple-800">About ▾</Link>
        <Link href="#" className="hover:text-purple-800">What We Do ▾</Link>
        <Link href="#" className="hover:text-purple-800">Jobs ▾</Link>
        <Link href="#" className="hover:text-purple-800">Projects</Link>
        <Link href="#" className="hover:text-purple-800">TG Academy</Link>
        <Link href="#" className="hover:text-purple-800">Strategic Partnership</Link>
        <Link href="#" className="hover:text-purple-800">Pricing</Link>
        <Link href="#" className="hover:text-purple-800">Book a Consultation</Link>
      </nav>
    </header>
  );
}