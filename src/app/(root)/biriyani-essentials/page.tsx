import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Biriyani essentials",
  description:
    "Biryani masala powder is a very flavorful, aromatic & biryani spice blend made with various spices. This elevates the flavors of any dish.",
});

const BiriyaniEssentials = () => {
  return (
    <MaxWidthWrapper>
      <HeroSection
        title="essentials"
        imageSrc={
          "https://images.pexels.com/photos/3691103/pexels-photo-3691103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        imageAlt="A delicious plate of biryani masala"
        subTitle="Biryani Masala is a blend of aromatic spices in varying proportion that are roasted and powdered. Biryani Masala is the spice powder or blend that is commonly used to add to biryani or rice dishes."
      />
    </MaxWidthWrapper>
  );
};

export default BiriyaniEssentials;
