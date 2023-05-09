import { RiGitRepositoryFill } from "react-icons/ri";
import React from "react";
import useSWR from "swr";

import Window from "../window";

import { FenceType } from "@/utils/types/fences";

export default function Projects(props: FenceType) {
  const { title, src, type } = props;
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(src, fetcher);

  return (
    <Window {...props}>
      {!isLoading && (
        <div className="text-white grid grid-flow-row p-2 gap-3 grid-cols-6">
          {data.map((val: any) => (
            <a
              key={val.id}
              rel="noreferrer"
              target="_blank"
              href={val.html_url}
            >
              <div className="cursor-pointer flex flex-col items-center hover:bg-white/20 active:bg-white/40">
                <RiGitRepositoryFill className="text-5xl" />
                <p className="text-center text-white select-none">{val.name}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </Window>
  );
}
