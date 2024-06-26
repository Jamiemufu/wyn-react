import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";

export const metadata: Metadata = {
  title: "Wyn Edwards Electrical",
  description: "Wyn Edwards Electrical",
};

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}} >
      <body className={ubuntu.variable}>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <footer>
         <Footer/>
        </footer>
      </body>
    </html>
  );
}
