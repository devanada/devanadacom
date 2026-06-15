import { useQuery } from "@tanstack/react-query";
import { FolderGit2 } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
}

const Projects = () => {
  const { data, isLoading } = useQuery<Repo[]>({
    queryKey: ["projects"],
    queryFn: () =>
      fetch("https://api.github.com/users/devanada/starred?sort=updated").then(
        (r) => r.json()
      ),
  });

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center text-gray-400 text-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-3 p-3 content-start">
      {(data ?? []).map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 p-1 hover:bg-blue-100 cursor-default rounded-sm"
        >
          <FolderGit2 className="w-10 h-10 text-yellow-500" />
          <p className="text-xs text-center text-gray-800 break-all leading-tight">
            {repo.name}
          </p>
        </a>
      ))}
    </div>
  );
};

export default Projects;
