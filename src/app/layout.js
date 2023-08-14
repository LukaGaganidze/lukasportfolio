import "./globals.css";
import { Josefin_Slab } from "next/font/google";
import Navigation from "@/componenets/navigation/Navigation";
import Footer from "../componenets/footer/Footer";

const content = Josefin_Slab({ subsets: ["latin"] });

export const metadata = {
  title: "Luka Gaganidze",
  description: "Luka Gaganidze's Front-End Developer Portfolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={content.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
