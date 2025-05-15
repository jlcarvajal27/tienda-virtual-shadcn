import BannerDiscount from "@/components/banner-discount";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProduct from "@/components/featured-products";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProduct />
      <BannerDiscount />
      <ChooseCategory />
    </main>
  );
}
