import { TooltipProvider } from "@/components/ui/tooltip";
import Taskbar from "@/components/taskbar";
import Providers from "@/utils/redux/provider";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <TooltipProvider>
            <main className="main-container flex flex-col overflow-hidden bg-[url(/background2.jpg)] bg-cover bg-center bg-no-repeat">
              {children}
            </main>
            <Taskbar />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
