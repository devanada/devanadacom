import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarNavProps {
  items: {
    title: string;
  }[];
  active: string;
  onClick: (value: string) => void;
}

export function SidebarNav({ items, active, onClick }: SidebarNavProps) {
  return (
    <nav className="flex flex-col">
      {items.map((item) => (
        <Button
          key={item.title}
          variant="ghost"
          className={cn(
            active === item.title
              ? "bg-muted hover:bg-muted"
              : "hover:bg-slate-700 hover:underline",
            "justify-start"
          )}
          onClick={() => onClick(item.title)}
        >
          {item.title}
        </Button>
      ))}
    </nav>
  );
}
