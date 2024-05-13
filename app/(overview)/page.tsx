import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/app/_components/productCard";
import { getProducts } from "@/app/_lib/action";
import { Product } from "@/app/_lib/definition";
import Button from "@/app/_components/button";
import ButtonLink from "@/app/_components/Link";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="p-14">
      <center>
        <span className="text-center font-bold text-2xl">
          Featured Products
        </span>
      </center>
      <div className={"flex flex-wrap gap-2 mt-10"}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <center>
        {" "}
        <ButtonLink
          to={"/products"}
          name={"View all"}
          icon={<ArrowRightIcon width={"25"} height={"25"} />}
        />
      </center>
    </div>
  );
}
