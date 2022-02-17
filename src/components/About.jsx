import React from "react"

const About = () => {
    return (
        <div className="py-8 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-base text-gray-500 dark:text-gray-400">
                    I am a person who likes to research, learn and teach new things in technology and programming languages. I use frameworks like Angular, Spring Boot, and Flutter. I am currently working on various mobile projects using Framework Flutter 📱 and some web with Angular, React 💻. I am also learning NodeJS, Microservices and Micro frontend.
                </p>
                <p className="mt-12 text-xl text-gray-900 dark:text-gray-100">😍 Languages I use the most</p>
                <div className="mt-5 text-base text-gray-500 dark:text-gray-400">
                    <p>During the time that I have programmed I have known several languages, but these are the ones I use the most now:</p>

                    <ul className="py-5 pl-6 list-disc">
                        <li>JavaScript / TypeScript</li>
                        <li>Dart</li>
                        <li>Java</li>
                    </ul>

                    <p>Although I have also used C++, Python, C#, .NET and Kotlin</p>
                </div>
            </div>
        </div>
    )
}

export default About