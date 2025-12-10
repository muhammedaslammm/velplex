import { Source_Sans_3, Playfair } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Velplex Industries",
  description:
    "Velplex industries is one of the poineers in plywood manufacturing units in Kerala, situated at Kizhakkepuram, Varkala in Trivandrum District.",
};

const playfair = Playfair({
  variable: "--font-playfair",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const source_sans = Source_Sans_3({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${source_sans.variable} ${playfair.variable}`}>
      <body className="flex flex-col h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
