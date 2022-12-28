import colors from '../../utils/colors';

export const RepoCard = ({ repo }) => {
  const getLanguageColor = (language) => {
    const color = colors.find(color => color.name === language)
    return color && color.color
  }

  return (
    <div className="shadow-sm rounded-md p-4 bg-[#78909c] mb-5 bg-opacity-[0.15]">
      <h3 className="font-medium text-lg text-ellipsis whitespace-nowrap overflow-hidden mb-1">{repo.name}</h3>
      <div className="flex items-center gap-3 text-xs mb-4">
        <p className="rounded-3xl py-1 px-2"
          style={{
            backgroundColor: getLanguageColor(repo.language) ?? '#888'
          }}>
          {repo.language ?? 'N/A'}
        </p>

        <p className={`rounded-3xl py-1 px-2 ${repo.archived ? 'bg-orange-500' : 'bg-green-500'}`}>
          {repo.archived ? 'Archivado' : 'En desarrollo'}
        </p>
      </div>

      <p className="text-[13px]">{repo.description}</p>

      <div className="flex items-center gap-2 mt-4">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            stroke="#ffca28"
            strokeWidth="1.5"
            fill="none"
          >
            <path d="M17.8 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            <path d="M6.2 19.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
            <path d="M12 9.817l-2.172 1.138a0.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a0.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a0.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a0.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a0.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
          </svg>
          <p className="text-sm">{repo.stargazers_count}</p>
        </div>

        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            stroke="#64b5f6"
            fill="none"
            strokeWidth="1.5"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="18" r="2" />
            <circle cx="7" cy="6" r="2" />
            <circle cx="17" cy="6" r="2" />
            <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
          <p className="text-sm">{repo.forks_count}</p>
        </div>

        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ef5350"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 9v-1a3 3 0 0 1 6 0v1" />
            <path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" />
            <line x1="3" y1="13" x2="7" y2="13" />
            <line x1="17" y1="13" x2="21" y2="13" />
            <line x1="12" y1="20" x2="12" y2="14" />
            <line x1="4" y1="19" x2="7.35" y2="17" />
            <line x1="20" y1="19" x2="16.65" y2="17" />
            <line x1="4" y1="7" x2="7.75" y2="9.4" />
            <line x1="20" y1="7" x2="16.25" y2="9.4" />
          </svg>
          <p className="text-sm">{repo.open_issues_count}</p>
        </div>
      </div>

      <div className="mt-4 text-right">
        <a href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium  bg-[#00000049] rounded-md hover:bg-[#0000007c] focus:outline-none hover:contrast-150 hover:scale-105 hover:-rotate-1 transition-all"
        >
          Ver en GitHub
        </a>
      </div>
    </div>
  )
}