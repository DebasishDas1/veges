import Navbar from "@/components/Navbar";
// import Providers from '@/components/Providers'
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = constructMetadata();

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veges.in/"),
  title: {
    template: `%s - Veges`,
    default: "Veges",
  },
  description:
    "Welcome to Veges. Every product on our platform is verified by our team to ensure our highest quality standards.",
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "./",
  },
  authors: [{ name: "Veges", url: "https://www.veges.in/" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
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
