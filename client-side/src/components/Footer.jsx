function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-sm">
                Fusce aliquam mauris at risus fermentum, eget tempus ligula
                iaculis.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Information</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    Shipping & Delivery
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-gray-400 transition duration-300"
                  >
                    Returns & Exchanges
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f text-white hover:text-gray-400 transition duration-300"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter text-white hover:text-gray-400 transition duration-300"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram text-white hover:text-gray-400 transition duration-300"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-gray-800 my-8" />
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} IKEA. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
