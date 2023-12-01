import React from "react";

import Program from "./program";

import { FenceType } from "@/utils/types/fences";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  datas: FenceType[];
  className?: string;
}

export default function Fences(props: Readonly<Props>) {
  const { title, datas, className } = props;

  return (
    <div
      className={cn(
        "z-10 relative h-fit w-full rounded-xl bg-black/70 md:w-1/2 lg:w-2/5 xl:1/3",
        className
      )}
    >
      <div className="flex w-full justify-center rounded-t-xl bg-zinc-950/75">
        <p className="text-center text-white">{title}</p>
      </div>
      <div className="grid auto-cols-max auto-rows-max grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 p-2">
        {datas.map((data) => (
          <Program key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}
