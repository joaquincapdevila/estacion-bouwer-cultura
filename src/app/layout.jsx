import { Montserrat } from "next/font/google";
import "./ui/globals.css";
import { Nav } from "./ui/nav";
import { Footer } from "./ui/footer";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Estacion Cultural Bouwer",
  description: "Cultura Cordoba, cordoba",
  icons: {
    icon: "/svgBouwer.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <header>
          <Nav />
        </header>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
