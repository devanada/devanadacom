import type { Metadata } from "next";

import RightMenu from "@/components/right-menu";
import Fences from "@/components/fences";
import Frames from "@/components/frame";
import { folders, programs } from "@/utils/constants/constant";

export const metadata: Metadata = {
  title: "Devanada's Desktop",
  description: "Welcome to my desktop",
};

export default async function Page() {
  return (
    <>
      <div className="h-full w-full relative flex flex-col gap-3 p-3">
        <Fences title="Programs" datas={programs} />
        <Fences title="Other" datas={folders} />
        <Frames />
      </div>
      <RightMenu />
    </>
  );
}
