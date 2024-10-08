import { Outlet } from "react-router-dom";
import Footer from "./components/shared/footer/Footer";
import Navbar from "./components/shared/navbar/Navbar";

function App() {
  return (
    <section className="flex flex-col min-h-screen text-slate-100">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default App;
