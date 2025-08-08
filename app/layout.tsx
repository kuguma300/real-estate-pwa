import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";

export const metadata = {
  title: "Real Estate PWA",
  description: "Rent and buy properties easily",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>       
    </html>
  );
}
