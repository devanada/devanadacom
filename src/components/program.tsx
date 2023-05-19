"use client";

import { addWindow } from "@/utils/redux/features/menuSlice";
import { useAppDispatch } from "@/utils/redux/hooks";
import { FenceType } from "@/utils/types/fences";
import { menu } from "@/utils/data";

export default function Program(props: FenceType) {
  const { title, type } = props;
  const dispatch = useAppDispatch();
  const Menu = type === "program" ? menu[props.id] : menu["folder"];

  const handleClick = () => {
    dispatch(addWindow(props));
  };

  return (
    <div
      className="flex cursor-pointer flex-col items-center hover:bg-white/20 active:bg-white/40"
      onDoubleClick={handleClick}
    >
      <Menu className="text-4xl text-white" />
      <p className="select-none text-center text-sm text-white">{title}</p>
    </div>
  );
}
