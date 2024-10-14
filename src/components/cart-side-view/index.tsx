import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma"
import Image from "next/image";

const CartSideView = async () => {
    const { user } = await getSession() || {}
    const { id }: any = user || {}

    const cartItems = await prisma.cart_items.findMany({
        where: {
            user_id: id,
            order_no: null
        },
        include: {
            products: true
        },
    })

    const computedData = cartItems.map(({ cart_item_id, product_id, quantity, products: { product_name, price, product_image } }) => (
        {
            product_image,
            cart_item_id,
            product_id,
            product_name,
            quantity,
            price,
            total: price * quantity
        }
    ))

    const invoiceSubtotal = computedData.map(({ total }) => total).reduce((sum, i) => sum + i, 0)

    return (
        <div className="w-full md:w-1/2 border p-4 rounded bg-gray-100">
            <div className="w-full border-b-2 pb-3">
                {computedData.map(row => (
                    <div key={row.cart_item_id} className="flex md:items-center flex-col md:flex-row gap-4 px-3 py-3 bg-white rounded-lg">
                        <Image src={`/products_images/${row.product_image}`} width={200} height={100} alt={row.product_name} />
                        <div className="flex gap-3 flex-col">
                            <h1 className="font-bold text-2xl">{row.product_name}</h1>
                            <p>Qty: {row.quantity} <span className="ml-2 text-main">Price: {row.price}</span></p>
                            <p>Total: {row.total}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="py-4">
                <div className="rounded border-b-2 py-2">
                    <div className="flex justify-between items-center gap-4 px-3 py-3 ">
                        <p className="text-xl font-bold">Subtotal: </p>
                        <p className="text-lg">${invoiceSubtotal}</p>
                    </div>
                    <div className="flex justify-between items-center gap-4 px-3 py-3">
                        <p className="text-xl font-bold">Shipping: </p>
                        <p className="text-lg">Free Shipping</p>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-4 px-3 pt-4">
                    <p className="text-xl font-bold">Total: </p>
                    <p className="text-lg">${invoiceSubtotal}</p>
                </div>
            </div>
        </div>
    )
}

export default CartSideView;