import { FcOpenedFolder } from "react-icons/fc";
import type { Metadata } from "next";

import Fences from "@/components/fences";
import Frames from "@/components/frame";

export const metadata: Metadata = {
  title: "Devanada's Desktop",
  description: "Welcome to my desktop",
};

export default async function Page() {
  return (
    <div className="h-full w-full flex-grow overflow-hidden p-2">
      <Fences />
      <Frames />
    </div>
  );
}
