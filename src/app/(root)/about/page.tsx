import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import PageTitle from "@/components/PageTitle";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "About",
  description: "About us , one stop destination.",
});

const BiriyaniEssentials = () => {
  return (
    <MaxWidthWrapper>
      <h1 className="md:text-8xl text-5xl font-bold py-10 text-center flex justify-center">
        About
      </h1>
    </MaxWidthWrapper>
  );
};

export default BiriyaniEssentials;
