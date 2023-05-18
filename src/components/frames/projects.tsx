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
        <div className="grid w-full grid-flow-row grid-cols-3 gap-3 p-2 text-white md:grid-cols-5 lg:grid-cols-6">
          {data.map((val: any) => (
            <a
              className="flex cursor-pointer flex-col items-center hover:bg-white/20 active:bg-white/40"
              key={val.id}
              rel="noreferrer"
              target="_blank"
              href={val.html_url}
            >
              <RiGitRepositoryFill className="text-5xl" />
              <p className="select-none text-center text-sm text-white">
                {val.name}
              </p>
            </a>
          ))}
        </div>
      )}
    </Window>
  );
}
