import { memo } from "react";
import { ProductCardProps } from "../interface"

const ProductCard = memo(({ productName, productImage }: ProductCardProps) => (
    <div className="border flex flex-col h-56 w-full md:w-64 justify-center items-center rounded-md">
        <div className={`h-3/5 w-full bg-[url('${productImage}')] bg-center bg-cover`}></div>
        <div className="h-2/5 border w-full px-6 py-3">
            <h4 className="text-base font-medium w-full text-left">{productName}</h4>
            <p className="text-main w-full text-right text-xl font-medium">14.99$</p>
        </div>
    </div>
))

export default ProductCard