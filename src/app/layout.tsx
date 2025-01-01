import Navbar from "@/components/Navbar";
// import Providers from '@/components/Providers'
import { cn, constructMetadata } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import "./globals.css";

// Preload Google Font (Poppins)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = constructMetadata({
  title: "Veges",
  description: "One stop destination for all your biriyani requirements",
  exact: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "relative h-full font-sans antialiased",
          poppins.className
        )}
      >
        <main className="relative flex flex-col min-h-screen">
          {/* <Providers> */}
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
          {/* </Providers> */}
        </main>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
