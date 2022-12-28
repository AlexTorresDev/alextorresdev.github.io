import Link from 'next/link'
import social from '../../utils/social'

export default function Header() {
    return (
        <header className="flex place-content-center">
            <div className="container flex sm:flex-col gap-2 my-4 lg:my-20 lg:flex-row place-content-between lg:rounded-lg lg:mx-2 lg:mt-4 items-center">
                <Link href="/" className="relative hover:scale-110 transition-all">
                    <div>
                        <span className='flex items-end'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="rounded-md p-1 mr-1 bg-[#027dfd]" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="4" y1="20" x2="7" y2="20" />
                                <line x1="14" y1="20" x2="21" y2="20" />
                                <line x1="6.9" y1="15" x2="13.8" y2="15" />
                                <line x1="10.2" y1="6.3" x2="16" y2="20" />
                                <polyline points="5 20 11 4 13 4 20 20" />
                            </svg>
                            <span className='pb-1 text-3xl'>lex Torres</span>
                        </span>
                    </div>
                </Link>
                <div className="flex">
                    <nav className="fixed bottom-0 right-0 z-50 justify-center flex-column md:flex-row gap-3 p-2 sm:flex sm:p-0 sm:bg-transparent sm:static">
                        {social.map(({ name, color, url, icon }) => (
                            <Link
                                key={name}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 rounded-full mt-2 sm:mt-0 border-white flex text-xs sm:text-sm font-medium flex-col sm:flex-row items-center justify-center gap-1 text-white hover:-rotate-12 hover:scale-110 hover:contrast-125 transition-all"
                                style={{
                                    backgroundColor: color,
                                }}>
                                <span className="p-1">{icon}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    )
}