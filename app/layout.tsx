import type { ReactNode } from "react";

export const metadata = {
  title: "Darling, I'll call you later… | Sopron",
  description: "Eat me out, Darling – online rendelés Sopronban",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="hu">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
