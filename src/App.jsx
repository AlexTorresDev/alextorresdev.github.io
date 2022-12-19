import React from 'react'
import { SiGithub, SiInstagram, SiTwitter } from 'react-icons/si'
import image from "./images/loading.webp"

const App = () => {
  return (
    <div className="flex min-h-screen min-w-full text-black dark:text-white bg-gray-200 dark:bg-gray-800">
      <div className="max-w-6xl m-auto px-3 md:px-0 shadow-md card">
        <div className="py-8 bg-white dark:bg-gray-900 rounded-tl-lg rounded-lg">
          <p className="mt-2 mb-6 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl text-center">
            🛠️ Sitio en renovación 🛠️
          </p>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img src={image} alt="Loading" />
          </div>

          <div className="flex items-center justify-end px-4 pt-8 mt-5">
            <span className='mr-6'>Sígueme ➡️</span>
            <a className="mx-2 hover:text-primary-500" href="https://twitter.com/AlexTorresDev" target="_blank" rel="noopener noreferrer">
              <SiTwitter className="w-6 h-6" />
            </a>
            <a className="mx-2 hover:text-gray-400" href="https://github.com/AlexTorresDev" target="_blank" rel="noopener noreferrer">
              <SiGithub className="w-6 h-6" />
            </a>
            <a className="mx-2 hover:text-pink-500" href="https://instagram.com/AlexTorresDev" target="_blank" rel="noopener noreferrer">
              <SiInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
