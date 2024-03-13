import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Archie Home Decors",
  description:
    "Archie Home Decors offers a world of elegance and style for your living spaces. Discover curated collections of exquisite furnishings, decor accents, and design inspiration to elevate every corner of your home. Let Archie Home Decors transform your space into a haven of sophistication and comfort.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body className={poppins.className}>
        <div className="flex flex-col h-screen">
          <NavBar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
