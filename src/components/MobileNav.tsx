"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "./ui/sheet";
import { NAV_LINKS } from "@/lib/links";
import { Menu } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/vegesLogo.png";

interface NavOption {
  text: string;
  url: string;
}

const MobileNav = () => {
  const pathname: string[] = usePathname().split("/");
  const renderNavItem = (option: NavOption): JSX.Element => (
    <SheetClose asChild key={option.url}>
      <Link
        href={option.url}
        className={`flex regular-16 py-4 ${
          pathname
            .map((item) => item.toLowerCase().replaceAll("-", " "))
            .includes(option.text.toLowerCase().replaceAll("-", " "))
            ? "text-green-600"
            : "font-black"
        }`}
      >
        <button
          type="submit"
          className="outline-none flex items-center text-3xl font-semibold"
        >
          <span>{option.text}</span>
        </button>
      </Link>
    </SheetClose>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent className="bg-white/70 backdrop-blur-sm" side="top">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="ml-4 flex lg:ml-0 py-4">
              <span className="h-11 w-32 relative overflow-hidden">
                <Image
                  src={logo}
                  alt="logo"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 769px) 100vw, 1200px"
                />
              </span>
            </Link>
          </SheetTitle>
          <SheetDescription className="flex items-start pl-3 pb-8 text-start">
            One stop platform for all your biryani preparation requirements.
          </SheetDescription>
        </SheetHeader>
        <div className="pl-3">
          {NAV_LINKS && (
            <div>{NAV_LINKS.map((option) => renderNavItem(option))}</div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
