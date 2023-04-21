import { IconType } from "react-icons";

export interface FrameType {
  id: string;
  title: string;
  src: string;
}

export interface FrameIconType extends FrameType {
  icon: IconType;
}
