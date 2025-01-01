import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { constructMetadata } from "@/lib/utils";
import rice_hero from "../../../../public/rice.png";
import HeroSection from "@/components/HeroSection";

export const metadata = constructMetadata({
  title: "Biriyani rice",
  description:
    "Biryani Rice is basically a spiced rice, that is, basmati rice cooked with choicest of spices and finished with some fried onions, nuts and fresh herbs.",
});

const Rice = () => {
  return (
    <MaxWidthWrapper>
      <HeroSection
        title="basmati rice"
        imageSrc={rice_hero.src}
        imageAlt="A delicious plate of biryani"
        subTitle="Basmati, meaning ‘Queen of Fragrance’ is a variety of long-grain rice, famous for its fragrance and delicate flavor."
      />
    </MaxWidthWrapper>
  );
};

export default Rice;
