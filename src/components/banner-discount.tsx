import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
  return (
    <div className="p-5 sm:p-20  text-center">
      <h2 className="uppercase text-primary font-black text-2xl ">
        Consigue un 25% de descuento
      </h2>
      <h3 className="mt-2 font-semibold">
        -20% al gastar 100$ o el 25% al gastar 150$. Usa el código de JorgeDev
      </h3>
      <div className="max-w-md mx-auto flex justify-center mt-5 gap-8 ">
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
        <Link href="#" className={buttonVariants({ variant: "outline" })}>
          Mas información
        </Link>
      </div>
    </div>
  );
};

export default BannerDiscount;
