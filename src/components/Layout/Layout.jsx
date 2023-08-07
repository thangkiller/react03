import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Support from "./Support";

function Layout() {
   return (
      <div>
         <Navbar />
         <main>
            <Outlet />
            <Support />
         </main>
         <Footer />
      </div>
   );
}

export default Layout;
