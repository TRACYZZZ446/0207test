import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ms Alpha",
  description: "The Future is Fierce. The Future is Female.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
