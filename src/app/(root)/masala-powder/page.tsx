import HeroSection from "@/components/HeroSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { constructMetadata } from "@/lib/utils";
import spice_powder from "../../../../public/spice_powder.png";

export const metadata = constructMetadata({
  title: "Biriyani masala powder",
  description:
    "Biryani masala powder is a very flavorful, aromatic & biryani spice blend made with various spices. This elevates the flavors of any dish.",
});

const MasalaPowder = () => {
  return (
    <MaxWidthWrapper>
      <HeroSection
        title="masala powder"
        imageSrc={spice_powder.src}
        imageAlt="A delicious plate of biryani masala"
        subTitle="Garam masala is a spice blend widely used in Indian cuisine, from curries and lentil dishes to soups. Whole spices of cinnamon, mace, peppercorns, coriander seeds, cumin seeds, and cardamon pods are toasted in a pan to release their aromatic flavors, then ground to a powder."
      />
    </MaxWidthWrapper>
  );
};

export default MasalaPowder;
