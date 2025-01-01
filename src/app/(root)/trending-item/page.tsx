import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageTitle from "@/components/PageTitle";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Trending Items",
  description: "One stop destination for all your biriyani requirements",
});

const TrendingItem = () => {
  return (
    <MaxWidthWrapper>
      <PageTitle title={"Trending Items"} />
    </MaxWidthWrapper>
  );
};

export default TrendingItem;
