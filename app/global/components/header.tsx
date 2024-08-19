// app/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-dark-blue text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="logo">FOTIS AGRO</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/market">MARKET</Link></li>
            <li className="relative group">
              <Link href="/businesses">SERVICES</Link>
              <ul className="absolute hidden group-hover:block bg-white shadow-md">
                <li><Link href="/businesses/warehouse" className="block px-4 py-2 text-black hover:bg-gray-100">WAREHOUSING</Link></li>
                <li><Link href="/businesses/logistics" className="block px-4 py-2 text-black hover:bg-gray-100">LOGISTICS</Link></li>
                <li><Link href="/businesses/land" className="block px-4 py-2 text-black hover:bg-gray-100">LAND</Link></li>
                <li><Link href="/businesses/insurance" className="block px-4 py-2 text-black hover:bg-gray-100">INSURANCE</Link></li>
              </ul>
            </li>
            <li><Link href="/dashboard">DASHBOARD</Link></li>
            <li><Link href="/contracts">CONTRACTS</Link></li>
          </ul>
        </nav>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded">Sign In</button>
      </div>
    </header>
  );
};

export default Header;