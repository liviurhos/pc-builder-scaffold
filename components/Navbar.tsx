// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 h-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
          PC Builder RO/UK
        </Link>
        <div className="hidden md:flex gap-8">
          <Link href="/builder" className="text-gray-700 hover:text-blue-600 font-medium">Builder</Link>
          <Link href="/preview" className="text-gray-700 hover:text-blue-600 font-medium">Preview</Link>
          <Link href="/profile" className="text-gray-700 hover:text-blue-600 font-medium">Profile</Link>
        </div>
      </div>
    </nav>
  );
}
