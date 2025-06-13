import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Sumérgete en una experiencia unica</p>
        <h4 className="mt-2 text-5xl font-extrabold">CafeExquisito</h4>
        <p className="my-2 text-lg ">Despierta tus sentidos con cada sorbo</p>
        <Link href="#" className={buttonVariants()}>
          Comparar
        </Link>
      </div>
      <div
        className="h-[300px] lg:h-[600px] bg-center mt-5 bg-cover"
        style={{ backgroundImage: "url('/slider-banner.jpg')" }}
      />
    </>
  );
};

export default BannerProduct;
