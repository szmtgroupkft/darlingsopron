import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Darling, I’ll call you later… | Sopron",
  description: "Kiszállítás Sopronban és környékén – rendelés a Waiterio rendszeren keresztül.",
  metadataBase: new URL("https://darlingsopron.hu"),
  openGraph: {
    title: "Darling, I’ll call you later…",
    description: "Rendelj online – a rendelés közvetlenül a konyhára érkezik.",
    url: "https://darlingsopron.hu",
    siteName: "Darling, I’ll call you later…",
    locale: "hu_HU",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hu">
      <body>
        {children}
      </body>
    </html>
  );
}
