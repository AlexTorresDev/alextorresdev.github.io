import { useEffect, useState } from "react";
import { RepoCard } from "../page/RepoCard"

export default function Sidebar() {
    const [repos, setRepos] = useState(null)

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await fetch(
                `https://api.github.com/users/AlexTorresDev/repos`
            );
            const data = await response.json();
            setRepos(data)
        };

        fetchRepos()
    }, [])

    return (
        <aside className="flex flex-col w-1/5">
            <div className="">
                <h3 className="font-medium text-2xl mb-8">Proyectos</h3>
                {repos && repos.map(repo => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </div>
        </aside>
    )
}