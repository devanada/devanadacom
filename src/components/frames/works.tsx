import { MdWork } from "react-icons/md";
import React from "react";
import dayjs from "dayjs";
import useSWR from "swr";

import Window from "../window";

import { FenceType } from "@/utils/types/fences";

export default function Works(props: FenceType) {
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
              href={val.company.url}
            >
              <div className="cursor-pointer flex flex-col items-center hover:bg-white/20 active:bg-white/40">
                <MdWork className="text-5xl" />
                <p className="font-bold text-center text-white select-none">
                  {val.companyName}
                </p>
                <p className="text-center text-sm text-white select-none">
                  {val.title}
                </p>
                <p className="text-center text-sm text-white select-none">
                  ({dayjs(val.startDate).format("MMM YYYY")}
                  {" - "}
                  {val.current
                    ? "present"
                    : dayjs(val.endDate).format("MMM YYYY")}
                  )
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </Window>
  );
}
