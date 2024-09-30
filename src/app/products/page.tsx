import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/product-card";

const ProductsPage = async () => {
    const products = await prisma.products.findMany({
        orderBy: {
            created_at: 'desc',
        },
    })
    return (
        <div className="py-20 px-10 md:px-28">
            <h4 className="text-4xl font-medium">Our Products</h4>
            <div className="flex">
                {products.map((record) => (
                    <ProductCard key={record.product_id} {...record} />
                ))}
            </div>
        </div>
    )
}

export default ProductsPage;