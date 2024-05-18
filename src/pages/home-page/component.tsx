import { memo } from "react";
import { product, section2 } from "../../images"
import ProductCard from "./partials/ProductCard";
import CustomerReview from "./partials/CustomerReview"

const SignInPage = memo(() => (
  <>
    {/* header */}
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

    {/* section1 */}
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

    {/* section2 */}
    <div className="py-20 px-10 md:px-28 flex justify-center items-center bg-second flex-col md:flex-row gap-10">
      <div className="flex flex-col w-full md:w-6/12 h-full gap-5">
        <h4 className="text-4xl font-medium">Clean and <br /> fragrant sou wax</h4>
        <p className="text-main text-base">Made for your home and for your wellness</p>
        <div className="flex flex-col gap-3 my-10">
          <p><span className="font-medium">Eco-sustainable:</span> All recyclable materials, 0% CO2 emissions</p>
          <p><span className="font-medium">Hypoallergenic:</span> 100% natural, human friendly ingredients </p>
          <p><span className="font-medium">Handmade:</span> All candles are craftly made with love.</p>
          <p><span className="font-medium">Long burning:</span> No more waste. Created for last long.</p>
        </div>
        <button className="w-48 bg-main text-white h-10 rounded-md text-md font-medium">Learn More</button>
      </div>
      <div className="flex flex-col w-full md:w-6/12 h-full">
        <img src={section2} alt="" />
      </div>
    </div>

    {/* section3 */}
    <div className="py-20 px-10 md:px-28 flex justify-center items-center flex-col gap-3 bg-lightMain">
      <h4 className="text-4xl font-medium">Testimonials</h4>
      <p>Some quotes from our happy customers</p>
      <div className="flex flex-col md:flex-row gap-5">
        <CustomerReview reviewDescription="Looks very natural, the smell is awesome" reviewName="Mart" star={4} />
        <CustomerReview reviewDescription="Recommended for everyone" reviewName="Edgardo" star={3} />
        <CustomerReview reviewDescription="I love it! No more air fresheners" reviewName="Luisa" star={5} />
      </div>
    </div>

    {/* section4 */}
    <div className="py-20 px-10 md:px-28 flex justify-center items-center flex-col gap-3 bg-white">
      <h4 className="text-4xl font-medium">Popular</h4>
      <p className="text-faded">Our top selling product that you may like</p>
      <div className="mt-12 flex flex-col md:flex-row gap-5 w-full md:w-auto">
        <ProductCard productName="product 1" productImage={product} />
        <ProductCard productName="product 2" productImage={product} />
        <ProductCard productName="product 3" productImage={product} />
        <ProductCard productName="product 4" productImage={product} />
      </div>
    </div>
  </>
)
);

export default SignInPage;
