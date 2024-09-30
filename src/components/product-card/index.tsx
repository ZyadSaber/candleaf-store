'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'

interface ProductCardPros {
    product_name: string;
    price: number | string;
    product_description?: string;
    product_image: string;
    product_id: number | string;
}

const ProductCard = ({ product_name, price, product_description, product_image, product_id }: ProductCardPros) => {
    const router = useRouter();
    return (
        <div className="p-5 w-full md:w-1/4 hover:shadow-lg transition-shadow rounded-lg" onClick={() => router.push(`/products/${product_id}`)}>
            <div className="border flex flex-col h-80 justify-center items-center rounded-md">
                <Image src={`/products_images/${product_image}`} alt={product_image} width={400} height={50} className="h-3/5" />
                <div className="h-2/5 border w-full px-6 py-3 gap-1.5 flex flex-col">
                    <div className="flex justify-between w-full">
                        <h4 className="text-base font-medium">
                            {product_name}
                        </h4>
                        <p className="text-main text-sm ">{price}$</p>
                    </div>
                    <p className="text-xs text-gray-400/70">{product_description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;