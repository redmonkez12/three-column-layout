import './globals.css'
import { lexendDeca } from "@/app/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={"w-full h-full"}>
      <div className={`container ${lexendDeca.className} grid place-items-center w-screen h-screen`}>
          {children}
      </div>
      </body>
    </html>
  )
}
