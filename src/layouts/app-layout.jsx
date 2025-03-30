import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


const AppLayout = () => {
  return (
    <div>
      
      <main className="min-h-screen min-w-full container">
        <Navbar/>
        <Outlet />
      </main>
         
      <Footer />
    </div>
  );
};

export default AppLayout;
