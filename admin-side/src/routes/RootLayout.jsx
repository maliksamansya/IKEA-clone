import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function RootLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      {/* ini berguna untuk menampilkan children element */}
      <Outlet></Outlet>
    </>
  );
}

export default RootLayout;
