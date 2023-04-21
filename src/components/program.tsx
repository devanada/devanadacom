"use client";

import { addWindow } from "@/utils/redux/features/menuSlice";
import { useAppDispatch } from "@/utils/redux/hooks";
import { FrameType } from "@/utils/types/frame";
import { menu } from "@/utils/data";

export default function Program(props: FrameType) {
  const { title } = props;
  const dispatch = useAppDispatch();
  const Menu = menu[props.id];

  const handleClick = () => {
    dispatch(addWindow(props));
  };

  return (
    <div
      className="flex flex-col items-center hover:bg-white/20 active:bg-white/40"
      onClick={handleClick}
    >
      <Menu className="text-4xl text-white" />
      <p className="text-center text-white">{title}</p>
    </div>
  );
}
