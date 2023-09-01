import { useState } from "react";

// import "./App.css";

import Template from "./components/MainContent";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Template></Template>
    </>
  );
}

export default App;
