import Link from "next/link"
import Image from "next/image"
import ProductView from "./_partials/ProductView"
import CustomerReview from "./_partials/CustomerReview"

const App = () => (
  <>
    <div className="w-full h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover bg-headingImage">
      <div className="bg-glossy h-96  flex flex-col justify-center items-center gap-5 px-1 md:px-24">
        <h4 className="text-center text-4xl font-medium">
          🌱
          <br />
          The nature candle
        </h4>
        <p className="text-lg font-normal text-center">All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
        <Link className="bg-main text-white px-14 py-3 rounded-lg text-xl font-medium mt-10 hover:bg-green-700 transition" href="/products">Discovery our collection</Link>
      </div>
    </div>

    <ProductView />

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
        <button className="w-48 bg-main text-white h-10 rounded-md text-md font-medium hover:bg-green-700 transition">Learn More</button>
      </div>
      <div className="flex flex-col w-full md:w-6/12 h-full">
        <Image src="/section2.png" alt="section2.png" width={1000} height={500} />
      </div>
    </div>

    <div className="py-20 px-10 md:px-28 flex justify-center items-center flex-col gap-3 bg-lightMain">
      <h4 className="text-4xl font-medium">Testimonials</h4>
      <p>Some quotes from our happy customers</p>
      <div className="flex flex-col md:flex-row gap-5 px-1">
        <CustomerReview reviewDescription="Looks very natural, the smell is awesome" reviewName="Mart" />
        <CustomerReview reviewDescription="Recommended for everyone" reviewName="Edgardo" />
        <CustomerReview reviewDescription="I love it! No more air fresheners" reviewName="Luisa" />
      </div>
    </div>

  </>
)

export default App