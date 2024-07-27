import React from "react"

const Footer = () => {
  return (
    <footer className="flex flex-wrap bg-gray-800 p-2 text-white">
      <div class>
        <span className="footer-title">Services</span>
        <a className="mx-4 my-1">Branding</a>
        <a className="mx-4 my-1">Design</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="mx-4 my-1">About us</a>
        <a className="mx-4 my-1">Contact</a>
      </div>
    </footer>
  )
}

export default Footer