import { useState } from "react";

// import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Product/Content.jsx";
import Navbar from "./components/Navbar";

// import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <!-- Sidebar --> */}
      <Navbar></Navbar>

      <Sidebar></Sidebar>
      {/* <!-- Main Content --> */}
      <div className="w-4/5 ml-auto overflow-y-auto">
        <br />
        <br />
        <br />
        <Content></Content>
      </div>
    </>
  );
}

export default App;
