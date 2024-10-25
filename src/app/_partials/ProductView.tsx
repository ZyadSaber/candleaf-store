import ProductCard from "@/components/product-card";
import { prisma } from "@/lib/prisma";

const ProductView = async () => {

    const products = await prisma.products.findMany({
        orderBy: {
            created_at: 'desc',
        },
        take: 6
    })

    return (
        <div className="flex justify-center items-center flex-col py-20 px-10 md:px-28 gap-5">
            <h4 className="text-4xl font-medium">Our Latest Products</h4>
            <p className="font-medium text-lg text-faded">Order it for you or your beloved ones</p>
            <div className="pt-14 md:px-20 flex w-full flex-wrap justify-center">
                {products.map((record) => (
                    <ProductCard key={record.product_id} {...record} />
                ))}
            </div>
        </div>
    )
}

export default ProductView;