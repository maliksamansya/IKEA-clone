import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function RootLayout() {
  return (
    <>
      <main>
        <Navbar></Navbar>
        <br />
        <br />

        <Outlet></Outlet>
        <Footer></Footer>
      </main>
    </>
  );
}

export default RootLayout;
