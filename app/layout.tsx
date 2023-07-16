import Nav from "./components/Nav/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
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
        <Provider store={store}>
          <Nav />
          {children}
        </Provider>
        <Footer />
      </body>
    </html>
  );
}
