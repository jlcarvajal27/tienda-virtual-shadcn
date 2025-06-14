import Navbar from "@/components/Navbar";
import BannerDiscount from "@/components/banner-discount";
import BannerProduct from "@/components/banner-product";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProduct from "@/components/featured-products";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CarouselTextBanner />
      <FeaturedProduct />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
    </main>
  );
}
