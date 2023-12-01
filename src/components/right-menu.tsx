import { ReactNode } from "react";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

interface Props {
  children?: ReactNode;
}

export default function RightMenu(props: Readonly<Props>) {
  const { children } = props;

  return (
    <ContextMenu>
      <ContextMenuTrigger className="h-full w-full overflow-hidden absolute z-0">
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>View</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuRadioGroup value="medium">
              <ContextMenuRadioItem value="large">
                Large icons
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="medium">
                Medium icons
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="small">
                Small icons
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>
              Auto arrange icons
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem checked>
              Align icons to grid
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>
              Show desktop icons
            </ContextMenuCheckboxItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>Sort by</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuItem inset>Refresh</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset disabled>
          Paste
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Paste shortcut
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>New</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Folder</ContextMenuItem>
            <ContextMenuItem>Shortcut</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Rich Text Format</ContextMenuItem>
            <ContextMenuItem>Text Document</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem inset>Display settings</ContextMenuItem>
        <ContextMenuItem inset>Personalise</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
