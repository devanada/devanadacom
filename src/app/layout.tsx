import { ReactNode } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Taskbar from "@/components/taskbar";

import "./globals.css";

interface Props {
  children: ReactNode;
}

export default function RootLayout(props: Readonly<Props>) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <main className="h-screen w-full flex flex-col overflow-hidden bg-[url(/background/background2.jpg)] bg-cover bg-center bg-no-repeat relative">
              {children}
              <Taskbar />
            </main>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
