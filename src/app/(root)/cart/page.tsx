import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageTitle from "@/components/PageTitle";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Cart",
  noIndex: true,
});

const Cart = () => {
  return (
    <MaxWidthWrapper>
      <PageTitle title={"Cart"} />
    </MaxWidthWrapper>
  );
};

export default Cart;
