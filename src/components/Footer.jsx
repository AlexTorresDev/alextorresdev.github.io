import React from "react"
import { SiGithub, SiTwitter } from 'react-icons/si'

const Footer = () => {
	return (
		<div>
			<div className="py-8 bg-white dark:bg-gray-900 rounded-bl-lg rounded-br-lg">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl font-semibold tracking-wide">📒 Contact me</h2>
					<div className="mt-4 text-base text-gray-500 dark:text-gray-400">
						You can write me on: <b>
							<a className="hover:text-primary-400" href="mailto:alextorressk@gmail.com">alextorressk@gmail.com</a>
						</b>
						<br />
						or follow me on my social networks.
						<div className="flex items-center justify-end mt-5">
							<a className="mx-2 hover:text-primary-500" href="https://twitter.com/AlexTorresSk" target="_blank" rel="noopener noreferrer">
								<SiTwitter className="w-6 h-6" />
							</a>
							<a className="mx-2 hover:text-primary-500" href="https://github.com/AlexTorresSk" target="_blank" rel="noopener noreferrer">
								<SiGithub className="w-6 h-6" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<p className="m-0 mt-9 text-sm text-gray-400 text-center md:text-right">
				&copy; {new Date().getFullYear()} All rights reserved
			</p>
		</div>
	)
}

export default Footer