import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Subharjun Bose - Computer Science Engineer | %s | Portfolio",
    default:
      "Subharjun Bose - Computer Science Engineer & Problem Solver",
  },
  description:
    "Portfolio of Subharjun Bose, a Computer Science Engineering student passionate about solving real-world problems through full-stack development, machine learning, and innovative technology solutions. Explore my projects in AI, real-time systems, and rural development applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
