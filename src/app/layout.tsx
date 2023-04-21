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
          <main className="flex flex-1 flex-col overflow-hidden bg-[url(/background2.jpg)] bg-cover bg-center bg-no-repeat">
            {children}
          </main>
          <Taskbar />
        </Providers>
      </body>
    </html>
  );
}
