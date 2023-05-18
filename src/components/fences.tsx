import React from "react";

import Program from "./program";
import { FenceType } from "@/utils/types/fences";

interface Props {
  title: string;
  datas: FenceType[];
}

export default function Fences(props: Props) {
  const { title, datas } = props;

  return (
    <div className="h-fit w-full rounded-lg bg-black/70 md:w-1/2 lg:w-1/3">
      <div className="flex w-full justify-center rounded-t-lg bg-black/75">
        <p className="text-center text-white">{title}</p>
      </div>
      <div className="grid auto-cols-max auto-rows-max grid-cols-6 gap-1 p-2">
        {datas.map((data) => (
          <Program key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}
