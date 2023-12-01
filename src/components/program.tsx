"use client";

import useWindowsStore from "@/utils/states/windows";
import { FenceType } from "@/utils/types/fences";
import { menu } from "@/utils/constants/constant";

export default function Program(props: Readonly<FenceType>) {
  const { title, id } = props;
  const addWindow = useWindowsStore((state) => state.addWindow);

  const Menu = menu[props.id];

  const handleClick = () => {
    addWindow(props);
  };

  return (
    <div
      id={`shortcut-${id}`}
      className="flex cursor-pointer flex-col items-center hover:bg-white/20 active:bg-white/40"
      onDoubleClick={handleClick}
    >
      <Menu className="text-4xl text-white" />
      <p className="select-none text-center text-sm text-white">{title}</p>
    </div>
  );
}
