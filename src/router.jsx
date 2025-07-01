import { createBrowserRouter, Outlet } from "react-router";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Work from "./pages/Work";
import NavigationBar from "./components/NavigationBar";
import Fotter from "./components/Fotter";
import Bolg from "./pages/Bolg";

// Layout component that includes NavigationBar
function Layout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Fotter/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/my-work", Component: Work },
      { path: "/contact-me", Component: ContactUs },
      { path: "/blog", Component: Bolg },
    ]
  }
]);

export default router;