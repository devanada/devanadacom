import React from "react";

import Program from "./program";

import { FenceType } from "@/utils/types/fences";

interface Props {
  title: string;
  datas: FenceType[];
}

export default function Fences(props: Readonly<Props>) {
  const { title, datas } = props;

  return (
    <div className="z-10 relative h-fit w-full rounded-xl bg-white/70 dark:bg-black/70 md:w-1/2 lg:w-2/5 xl:1/3">
      <div className="flex w-full justify-center rounded-t-xl bg-white dark:bg-zinc-950/75">
        <p className="text-center text-zinc-950 dark:text-white">{title}</p>
      </div>
      <div className="grid auto-cols-max auto-rows-max grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 p-2">
        {datas.map((data) => (
          <Program key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}
