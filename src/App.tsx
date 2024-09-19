import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import BreadCrumbs from "./components/common/BreadCrumbs";

function App() {

  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <BreadCrumbs />
      <Outlet />
      <Footer />
    </section>
  );
}

export default App;
