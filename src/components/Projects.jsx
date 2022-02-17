import React from "react";
import { RiFlutterFill } from "react-icons/ri"
import { SiPhpmyadmin } from "react-icons/si"
import { IoLogoElectron } from "react-icons/io5"

const Projects = () => {

	const projects = [
		{
			link: "https://github.com/AlexTorresSk/flutter-template",
			icon: RiFlutterFill,
			color: "#0468d7",
			name: "Flutter template",
			description: "It is a template to start with the development of a mobile application developed in Flutter",
			status: "active"
		},
		{
			link: "https://github.com/AlexTorresSk/custom-electron-titlebar",
			icon: IoLogoElectron,
			color: "#20515b",
			name: "Custom Electron Titlebar",
			description: "It is a title bar for windows created with electron similar to the VS Code title bar. It is 100% customizable in colors, icons, fonts, menu, etc.",
			status: "active"
		},
		{
			link: "https://github.com/AlexTorresSk/PMA-Material",
			icon: SiPhpmyadmin,
			color: "#f89c0e",
			name: "PMA Material",
			description: "It is a theme for phpMyAdmin which allows you to change the layout and make it look like material design.",
			status: "archive"
		}
	]

	return (
		<div className="py-8 bg-white dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-2xl font-semibold tracking-wide">🛠️ My projects</h2>

				<div className="mt-12">
					<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
						{projects.map((project, key) => (
							<div key={key} className="relative">
								<div>
									<div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white" style={{ backgroundColor: project.color }} >
										<project.icon className="h-7 w-7" aria-hidden="true" />
									</div>
									<p className="flex items-center mb-1 ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
										<a className="hover:text-primary-500 hover:underline" href={project.link}>{project.name}</a>
									</p>
									<label className={project.status === 'active' ? 'ring-green-400 text-green-500' : 'ring-yellow-400 text-yellow-500'}>
										{project.status}
									</label>
								</div>
								<p className="mt-3 ml-16 text-base text-gray-500 dark:text-gray-400">{project.description}</p>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}

export default Projects
