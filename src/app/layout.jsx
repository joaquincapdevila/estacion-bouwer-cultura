import { Inter, Libre_Baskerville, Montserrat } from "next/font/google";
import "./ui/globals.css";
import { Nav } from "./ui/nav";
import { Footer } from "./ui/footer";
const montserrat = Montserrat({ subsets: ["latin"] });

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
