import { memo } from "react";
import { product } from "../../images";

const DetailsPage = memo(() => {
    return (
        <div className="px-10 md:px-28 py-5 w-full flex flex-col md:flex-row">
            <div className="flex flex-col w-1/2 items-center px-10 py-16">
                test
            </div>
            <div className="flex flex-col w-1/2 items-center px-10 bg-second py-16">
                <div className="flex h-32 items-center text-left w-full border-b">
                    <img src={product} alt="" className="w-40" />
                    <div>
                        <h4 className="text-base font-medium">Spiced Mint Candleaf®</h4>
                        <p className="text-xl text-main font-semibold">$ 9.99</p>
                    </div>
                </div>

                <div className="flex w-full items-center gap-3 py-8 border-b">
                    <input type="text" className="h-10 rounded w-4/5 px-5" placeholder="Coupon Code" />
                    <button className="h-10 bg-gray-200 w-2/12 rounded-md">Search</button>
                </div>

            </div>
        </div>
    )
})

export default DetailsPage