import { Facebook, Instagram, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <MaxWidthWrapper>
      <footer className="wrapper font-thin">
        <div className="pb-4">
          Celebrate love with Dremable, your partner in crafting dream weddings.
          From fairytale weddings to the romance of Darjeeling and soirées in
          the Sundarbans, discover India`&apos;s finest wedding vendors at your
          doorstep. Say halo!`&apos; to your dream wedding in your Bengali
          wonderland. Our curated selection of photographers, planners, and more
          ensures every detail is a reflection of your love story. Whether
          it`&apos;s the vibrant Howrah or the tranquil Hooghly, Dremable covers
          your vendors by the Ganga. Contact us for a free consultation, and
          let`&apos;s plan your dream event effortlessly. With Dremable, your
          journey to a joyous union begins here. Happy Wedding!
        </div>
        <span className="text-xl">Contact us</span>
        <div className="flex pt-1 mb-1">
          <Link
            href={
              "https://www.facebook.com/profile.php?id=61555124971996&mibextid=eHce3h"
            }
            className={`cursor-pointer py-1 pl-1`}
            target="_blank"
            aria-label="Facebook"
          >
            <Facebook />
          </Link>
          <Link
            href={
              "https://www.instagram.com/dremablewedding?igsh=MTloaG1iaDUzMHdlNg=="
            }
            className={`cursor-pointer py-1 pl-1`}
            target="_blank"
            aria-label="Instagram"
          >
            <Instagram />
          </Link>
          <Link
            href={"https://twitter.com/dremablewedding"}
            className={`cursor-pointer py-1 pl-1`}
            target="_blank"
            aria-label="X"
          >
            <Twitter />
          </Link>
          <Link
            href={"https://wa.me/918777790641"}
            className={`cursor-pointer py-1 pl-1`}
            target="_blank"
            aria-label="WhatsApp"
          >
            <Phone />
          </Link>
        </div>
        <div>Copyright © 2024 Dremable Inc. All rights reserved.</div>
      </footer>
    </MaxWidthWrapper>
  );
};

export default Footer;
