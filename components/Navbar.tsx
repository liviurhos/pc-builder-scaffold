// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          PC Builder RO/UK
        </Link>
        <div className="space-x-4">
          <Link href="/builder" className="text-gray-700 hover:text-blue-600">
            Builder
          </Link>
          <Link href="/preview" className="text-gray-700 hover:text-blue-600">
            Preview
          </Link>
          <Link href="/profile" className="text-gray-700 hover:text-blue-600">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
