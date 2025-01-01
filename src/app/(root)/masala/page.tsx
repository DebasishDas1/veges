import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { constructMetadata } from "@/lib/utils";
import spice_hero from "../../../../public/spices.png";

export const metadata = constructMetadata({
  title: "Biriyani masala",
  description:
    "Biryani masala powder is a very flavorful, aromatic & biryani spice blend made with various spices. This elevates the flavors of any dish.",
});

const Masala = () => {
  return (
    <MaxWidthWrapper>
      <HeroSection
        title="masala"
        imageSrc={spice_hero.src}
        imageAlt="A delicious plate of biryani masala"
        subTitle="Biryani Masala is a blend of aromatic spices in varying proportion that are roasted and powdered. Biryani Masala is the spice powder or blend that is commonly used to add to biryani or rice dishes."
      />
    </MaxWidthWrapper>
  );
};

export default Masala;
