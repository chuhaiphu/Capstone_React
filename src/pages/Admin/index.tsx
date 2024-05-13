import { Outlet } from "react-router-dom";
import Footer from "./_component/Footer";
import SideBar from "./_component/Sidebar"

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col flex-1 bg-white p-10">
        <Outlet />
      </div>
    </div>
  );
}