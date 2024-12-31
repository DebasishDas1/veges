"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

interface NavItemProps {
  text: string;
  url: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, url }) => {
  const pathnameList = usePathname().split("/");
  const updatedPathList = pathnameList.map((pathname) =>
    pathname.replaceAll("-", " ").toLowerCase()
  );

  const isSubtitle = updatedPathList.includes(text.toLowerCase());

  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          asChild
          variant={isSubtitle ? "secondary" : "ghost"}
          className={`${isSubtitle ? "text-green-600" : "text-black"} text-lg`}
        >
          <Link href={url}>{text}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NavItem;
