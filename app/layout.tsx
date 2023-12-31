import Nav from "./components/Nav/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./redux/provider/provider";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vibecommerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} scrollbar-thin scrollbar-thumb-slate-400`}
      >
        <Providers>
          <Nav />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
