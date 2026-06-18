import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <div className="pt-32">

      <Footer/>
      </div>
    </>
  );
}
