import { useQuery } from "@tanstack/react-query";
import { Briefcase } from "lucide-react";
import { format } from "date-fns";

interface Work {
  id: number;
  companyName: string;
  title: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  company: { url: string };
}

const Works = () => {
  const { data, isLoading } = useQuery<Work[]>({
    queryKey: ["works"],
    queryFn: () =>
      fetch("https://cache.showwcase.com/user/devanada/experiences").then((r) =>
        r.json()
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
    <div className="grid grid-cols-3 gap-3 p-3 content-start">
      {(data ?? []).map((work) => (
        <a
          key={work.id}
          href={work.company.url}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 p-2 hover:bg-blue-100 cursor-default rounded-sm text-center"
        >
          <Briefcase className="w-10 h-10 text-blue-600" />
          <p className="text-xs font-bold text-gray-800 leading-tight">{work.companyName}</p>
          <p className="text-xs text-gray-600 leading-tight">{work.title}</p>
          <p className="text-[10px] text-gray-400">
            {format(new Date(work.startDate), "MMM yyyy")}
            {" – "}
            {work.current ? "present" : format(new Date(work.endDate!), "MMM yyyy")}
          </p>
        </a>
      ))}
    </div>
  );
};

export default Works;
