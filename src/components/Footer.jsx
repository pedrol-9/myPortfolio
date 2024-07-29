import React from "react"

const Footer = () => {
  return (
    <footer className="flex flex-wrap bg-gray-800 text-white py-4 mt-10">
      <div className="w-full">
        <picture className="w-full flex justify-center items-center space-x-4">
          <a href="https://www.linkedin.com/in/pedrosanabria9" target="_blank">
            <img src="/linkedin.png" alt="linkedIn logotype" className="h-10" />
          </a>
          <a href="https://discord.com/users/pedrosanabria9" target="_blank">
            <img src="/discord.png" alt="discord logotype" className="h-10" />
          </a>
          <a href="mailto:psanabria999@gmail.com" target="_blank">
            <img src="/gmail.png" alt="discord logotype" className="h-10" />
          </a>
        </picture>
      </div>
    </footer>
  )
}

export default Footer