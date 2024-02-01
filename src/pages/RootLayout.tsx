import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

type RootLayout = {
  withNavbar?: boolean;
};

function RootLayout({ withNavbar = true }: RootLayout) {
  return (
    <div className="mx-auto h-dvh min-h-screen">
      {withNavbar ? <Navbar /> : null}
      <Outlet />
    </div>
  );
}

export default RootLayout;
