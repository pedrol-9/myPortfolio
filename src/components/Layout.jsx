import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = () => {

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      <main className="flex flex-1 flex-col bg-[#E8DFCA] bg-gray-800">
        <Outlet />
      </main>
      <Footer />
    </div>
  )

}

export default Layout