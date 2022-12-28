import { useEffect, useState } from "react";
import { RepoCard } from "../page/RepoCard"

export const GitHub = ({ repoOwner, repoName }) => {
    const [repo, setRepo] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRepo = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://api.github.com/repos/${repoOwner}/${repoName}`
                );
                const data = await response.json();
                setRepo(data)
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchRepo();
    }, [repoOwner, repoName])

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Something went wrong!</p>
    }

    if (!repo) {
        return null;
    }

    return (
        <div className="w-5/6 m-auto my-6 rounded-sm shadow-md">
            <RepoCard repo={repo} />
        </div>
    )
}