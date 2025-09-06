
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">Brendan Dileo</span>
        </Link>
        <div className="space-x-6">
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
