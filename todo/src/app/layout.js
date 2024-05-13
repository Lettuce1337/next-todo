import { Inter } from "next/font/google";
import "@/app/globals.css";
import {NextUIProvider} from "@nextui-org/react";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App By Sirivarakul",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <NextUIProvider locale="en-GB" className="h-full w-full">
            {children}
          </NextUIProvider>
        </body>
      </html>
  );
}
