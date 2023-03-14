
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="#slide" passHref>
            Logo
          </Link>
          <button
            className="border border-gray-800 px-3 py-2 rounded text-gray-800 opacity-50 hover:opacity-75 md:hidden"
            type="button"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path
                fillRule="evenodd"
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              />
            </svg>
          </button>
        </div>
        <div className="md:flex items-center">
          <Link href="/about" passHref>
              About
          </Link>
          <Link href="/contact" passHref >
              Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
