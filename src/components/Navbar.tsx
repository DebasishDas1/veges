import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNav from "./MobileNav";
import Image from "next/image";
import logo from "../../public/vegesLogo.png";
import NavItem from "./NavItem";
import { NAV_LINKS } from "@/lib/navLinks";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <div className="backdrop-blur-3xl bg-white/30 sticky z-50 top-0 inset-x-0 h-14">
      <header className="relative">
        <MaxWidthWrapper>
          <div className="flex h-14 items-center">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 mx-6">
                <div className="h-7 w-20 relative overflow-hidden">
                  <Image
                    src={logo}
                    alt="logo"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </Link>
            </div>

            <div className="z-50 lg:ml-8 lg:block lg:self-stretch">
              <div className="md:flex hidden h-full gap-2">
                {NAV_LINKS.map((product) => (
                  <NavItem
                    text={product.text}
                    url={product.url}
                    key={product.text}
                  />
                ))}
              </div>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden md:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <div className="ml-4 flow-root lg:ml-6">
                  <Cart />
                </div>
              </div>
            </div>

            <div className="flex md:hidden items-end ml-auto mr-3">
              <MobileNav />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
