import { useNavigate } from "react-router-dom";

useNavigate;
function Sidebar() {
  const navigate = useNavigate();
  function goToCategory(e) {
    e.preventDefault();
    navigate("/category");
  }

  function goToDashboard(e) {
    e.preventDefault();
    navigate("/products");
  }

  function goToRegister(e) {
    e.preventDefault();
    navigate("/register");
  }

  function signOut(e) {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  }
  return (
    <>
      <aside className="fixed top-0 left-0 h-screen w-1/5 bg-gray-800 text-white">
        <div className="flex items-center justify-center h-16 bg-gray-800">
          <img alt="Logo" className="h-30" />
        </div>
        <ul className="py-6">
          <li>
            <a
              onClick={goToDashboard}
              href="#"
              className="flex items-center px-4 py-2 text-gray-300 hover:text-white"
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
              Dashboard
            </a>
          </li>
          <li>
            <a
              onClick={goToRegister}
              href="#"
              className="flex items-center px-4 py-2 text-gray-300 hover:text-white"
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
                  />
                </svg>
              </span>
              Register Admin
            </a>
          </li>
          <li>
            <a
              onClick={goToCategory}
              href="#"
              className="flex items-center px-4 py-2 text-gray-300 hover:text-white"
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </span>
              Category
            </a>
          </li>
          <li>
            <a
              onClick={signOut}
              href="#"
              className="flex items-center px-4 py-2 text-gray-300 hover:text-white"
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 20l-4-4m0 0l-4-4m4 4l4-4m-4 4l4 4"
                  />
                </svg>
              </span>
              Sign Out
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
