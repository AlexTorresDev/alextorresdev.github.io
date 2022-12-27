import Link from 'next/link'
import sections from '../data/sections'

export default function Header() {
    return (
        <header className="flex place-content-center">
            <div className="container flex sm:flex-col gap-2 my-4 lg:my-20 lg:flex-row place-content-between lg:rounded-lg lg:mx-2 lg:mt-4 items-center">
                <a className="relative">
                    Logo
                </a>
                <div className="flex">
                    <nav className="fixed bottom-0 z-50 justify-center hidden w-full gap-3 p-2 sm:flex sm:p-0 sm:bg-transparent sm:static sm:w-auto">
                        {sections.map(({ name, url }) => (
                            <Link key={name} href={url} className="w-1/4 sm:w-auto p-2 rounded-lg flex text-xs sm:text-sm font-medium flex-col sm:flex-row items-center gap-1 transition hover:text-yellow-300 text-gray-100">
                                {name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}