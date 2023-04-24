"use client";

import { RiGitRepositoryFill } from "react-icons/ri";
import React from "react";
import useSWR from "swr";

import Window from "./window";

import { useAppSelector } from "@/utils/redux/hooks";
import { FenceType } from "@/utils/types/fences";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Frame(props: FenceType) {
  const { title, src, type } = props;

  if (type === "program") {
    return (
      <Window {...props}>
        {src && <iframe className="h-full w-full" title={title} src={src} />}
      </Window>
    );
  } else {
    const { data, error, isLoading } = useSWR(
      "https://api.github.com/users/devanada/starred?sort=updated",
      fetcher
    );

    return (
      <Window {...props}>
        {!isLoading && (
          <div className="grid grid-flow-row grid-cols-6 gap-3 p-2 text-white">
            {data.map((val: any) => (
              <a
                key={val.id}
                rel="noreferrer"
                target="_blank"
                href={val.html_url}
              >
                <div className="flex cursor-pointer flex-col items-center hover:bg-white/20 active:bg-white/40">
                  <RiGitRepositoryFill className="text-5xl" />
                  <p className="select-none text-center text-white">
                    {val.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </Window>
    );
  }
}

export default function Frames() {
  const windows = useAppSelector((state) => state.menuReducer.windows);

  return (
    <>
      {windows.map((window) => (
        <Frame key={window.id} {...window} />
      ))}
    </>
  );
}
