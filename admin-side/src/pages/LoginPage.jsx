import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function LoginPage() {
  const baseUrl = "https://idea-c1.maliksamansya.site";
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const error = [];
    if (!loginInput.email) {
      error.push("Email is required");
    }
    if (!loginInput.password) {
      error.push("Password is required");
    }

    if (error.length) {
      //   console.log("masuk");
      const message = error.join(", ");
      return swal("Error", message, "error");
    }

    fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInput),
    })
      .then(async (response) => {
        return response.json();
      })
      .then((data) => {
        if (data.statusCode) {
          throw { code: data.statusCode, message: data.message };
        }
        const access_token = data.access_token;
        localStorage.setItem("access_token", access_token);
        navigate("/products");
      })
      .catch((err) => {
        const message = err.message;
        swal("Error", message, "error");
      });
  };

  return (
    <>
      <div className="bg-gradient-to-r h-screen flex flex-col justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
          <form onSubmit={submitHandler} className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-800 text-lg mb-2">
                Email
              </label>
              <input
                value={loginInput.email}
                onChange={(e) => {
                  setLoginInput({
                    ...loginInput,
                    email: e.target.value,
                  });
                }}
                name="email"
                type="email"
                id="email"
                className="w-full bg-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:bg-white"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="text-gray-800 text-lg mb-2">
                Password
              </label>
              <input
                value={loginInput.password}
                onChange={(e) => {
                  setLoginInput({
                    ...loginInput,
                    password: e.target.value,
                  });
                }}
                name="password"
                type="password"
                id="password"
                className="w-full bg-gray-200 rounded-lg py-2 px-4 focus:outline-none focus:bg-white"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
