import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { constructMetadata } from "@/lib/utils";
import spice_hero from "../../../../public/spices.png";

export const metadata = constructMetadata({
  title: "Biriyani vegetable",
  description:
    "Biryani masala powder is a very flavorful, aromatic & biryani spice blend made with various spices. This elevates the flavors of any dish.",
});

const Masala = () => {
  return (
    <MaxWidthWrapper>
      <HeroSection
        title="vegetable"
        imageSrc={
          "https://images.pexels.com/photos/3297455/pexels-photo-3297455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        imageAlt="A delicious plate of biryani vegetable"
        subTitle="Fresh vegetables are crucial because their production is influenced by proximity to urban markets, where demand is highest due to their short shelf life."
      />
    </MaxWidthWrapper>
  );
};

export default Masala;
