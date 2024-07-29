import React from "react"

const Footer = () => {
  return (
    <footer className="flex flex-wrap bg-gray-800 p-2 text-white">
      <div className="w-full">
        <picture className="w-full flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/pedrosanabria9" target="_blank">
            <img src="/linkedin.png" alt="linkedIn logotype" className="h-10" />
          </a>
          <a href="https://discord.com/users/pedrosanabria9" target="_blank">
            <img src="/discord.png" alt="discord logotype" className="h-10" />
          </a>

        </picture>
      </div>
    </footer>
  )
}

export default Footer