import { memo } from "react";
import { Link } from "react-router-dom";
import { product } from "../../images"
import QuantitySelector from "./partials/QuantitySelector"

const CartPage = memo(() => (
    <div className="px-10 md:px-28 py-24 w-full text-center flex flex-col gap-9">
        <h4 className="text-3xl font-medium">Your cart items</h4>
        <Link to="products" className="text-main underline">Back to shopping</Link>

        <div className="w-full flex flex-wrap text-start border-b pb-3">
            <h6 className="w-4/5 md:w-2/5">Product</h6>
            <h6 className="w-1/5 hidden md:block">Price</h6>
            <h6 className="w-1/5 hidden md:block">Quantity</h6>
            <h6 className="w-1/5 text-center md:text-left">Total</h6>
        </div>
        <div className="w-full flex flex-wrap text-start border-b pb-3">
            <div className="w-4/5 md:w-2/5 flex items-center gap-5">
                <img src={product} alt="product" className="w-32 h-28 md:w-40 md:h-32" />
                <div>
                    <h3 className="text-2xl font-medium">Spiced Mint Candleaf</h3>
                    <Link to="products" className="text-main underline">Remove</Link>
                </div>
            </div>
            <h6 className="w-1/5 hidden md:block content-center">$ 9.99</h6>
            <h6 className="w-1/5 hidden md:block content-center">
                <div className="w-2/5">
                    <QuantitySelector />
                </div>
            </h6>
            <h6 className="w-1/5 content-center text-center md:text-left">$ 9.99</h6>
        </div>
        <div className="w-full text-right px-10">
            <p className="inline mr-16">Sub-total</p>
            <p className="inline mr-16">$ 9.99</p>
            <Link to="details" className="bg-main px-4 py-1 rounded text-white">Check out</Link>
        </div>
    </div>
))

export default CartPage
export { default as QuantitySelector } from "./partials/QuantitySelector"