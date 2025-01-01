import Image, { StaticImageData } from "next/image";
import PageTitle from "./PageTitle";

interface HeroSectionProp {
  imageSrc?: string | StaticImageData; // Optional prop
  imageAlt: string;
  title: string;
  subTitle?: string;
}

const HeroSection = ({
  imageSrc,
  imageAlt,
  title,
  subTitle,
}: HeroSectionProp) => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
      {/* Page Title */}
      <div className="flex-1 flex flex-col text-center">
        <PageTitle title={title} />
        {subTitle && <p className="mt-2 text-gray-600 text-lg">{subTitle}</p>}
      </div>

      {/* Image Section */}
      {imageSrc && (
        <div className="relative w-full md:w-[45%] h-[500px] md:h-[650px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-contain" // Ensures the entire image fits inside the container
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
          />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
