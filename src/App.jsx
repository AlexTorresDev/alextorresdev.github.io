import React from 'react'
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import About from "./components/About"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="min-h-screen min-w-full text-black dark:text-white bg-gray-200 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto py-3 md:py-10 px-2 md:px-8 xl:px-2">
        <Intro />
        <hr className='border-gray-200 dark:border-gray-800'/>
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
