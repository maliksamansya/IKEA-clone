import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Event listener untuk mengatur state isScrolled ketika halaman di-scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Menambahkan event listener saat komponen navbar di-mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-black fixed top-0 left-0 right-0 z-50 bg-white transition duration-500 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-white">
          IKEA
        </a>

        {/* Search bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Tombol Shopping Cart, Shopping List, dan Profile */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-500">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 6h2.986l1.424-2h9.18L18 6H3zm3.076 1H18M9.19 10h5.621M6.41 14h11.2M9 10V4M16 10V4"
              />
              <circle cx="7.5" cy="19.5" r="1.5" />
              <circle cx="16.5" cy="19.5" r="1.5" />
            </svg> */}
          </button>

          <button className="text-gray-600 hover:text-blue-500">
            {/* <svg
              className="w-8 h-8 text-black-500 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 20s-8-4.5-8-9.5c0-3.935 3.134-7 8-7s8 3.065 8 7c0 5-8 9.5-8 9.5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.352c1.612-.748 3.248-.852 4.806 0 1.559.852 2.623 2.367 2.968 4.148.345 1.78-.015 3.664-1.004 5.137-.988 1.472-2.442 2.468-4.17 2.808l-.6.134-.6-.134c-1.728-.34-3.182-1.336-4.17-2.808-.988-1.473-1.349-3.357-1.004-5.137.345-1.781 1.409-3.296 2.968-4.148C8.752 3.5 10.388 3.604 12 4.352z"
              />
            </svg> */}
          </button>

          <button className="text-gray-600 hover:text-blue-500">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-black-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14s4-2.5 4-4c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 1.5 4 4 4 4zM12 14s-4-2.5-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4c0 1.5-4 4-4 4z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
              />
            </svg> */}
            {/* <i className="fa-regular fa-user"></i> */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
