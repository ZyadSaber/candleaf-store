import { memo } from "react";
import { product } from "../../images"
import ProductCard from "./partials/ProductCard";

const SignInPage = memo(() => (
  <>
    <div className="w-full h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover bg-headingImage">
      <div className="bg-glossy h-96  flex flex-col justify-center items-center gap-5 px-1 md:px-24">
        <h4 className="text-center text-4xl font-medium">
          🌱
          <br />
          The nature candle
        </h4>
        <p className="text-lg font-normal text-center">All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
        <button className="bg-main text-white px-14 py-3 rounded-lg text-xl font-medium mt-10">Discovery our collection</button>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col py-20 px-10 md:px-28 gap-5">
      <h4 className="text-4xl font-medium">Products</h4>
      <p className="font-medium text-lg text-faded">Order it for you or your beloved ones</p>
      <div className="pt-14 flex flex-col gap-10 w-full md:w-auto">
        <div className="flex flex-col md:flex-row gap-5">
          <ProductCard productName="product 1" productImage={product} />
          <ProductCard productName="product 2" productImage={product} />
          <ProductCard productName="product 3" productImage={product} />
          <ProductCard productName="product 4" productImage={product} />
        </div>
        <div className="hidden md:flex gap-5">
          <ProductCard productName="product 5" productImage={product} />
          <ProductCard productName="product 6" productImage={product} />
          <ProductCard productName="product 7" productImage={product} />
          <ProductCard productName="product 8" productImage={product} />
        </div>
      </div>
    </div>
  </>
)
);

export default SignInPage;
