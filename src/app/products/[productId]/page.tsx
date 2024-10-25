import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { RadioGroup, FormControlLabel, Radio, TextField } from "@mui/material";
import { getSession } from "@/lib/auth";
import { redirect } from 'next/navigation'

const ProductById = async ({ params: { productId } }) => {
    const { user: { user_id } } = await getSession() || {}
    const { product_image, price, product_name } = await prisma.products.findUnique({
        where: {
            product_id: +productId
        }
    }) || {}

    const handleSubmit = async (formData) => {
        'use server'

        const foundItem = await prisma.cart_items.findFirst({
            where: {
                product_id: +productId,
                user_id
            }
        })

        foundItem ? await prisma.cart_items.update({
            where: {
                cart_item_id: foundItem.cart_item_id
            },
            data: {
                ...foundItem,
                quantity: foundItem.quantity + +formData.get('qty'),
                preference: formData.get('preference'),
            }
        }) : await prisma.cart_items.create({
            data: {
                quantity: +formData.get('qty'),
                preference: formData.get('preference'),
                product_id: +productId,
                user_id
            }
        })

        return redirect("/")
    }

    return (
        <div className="w-full flex py-20 px-10 md:px-28">
            <div className="flex flex-col w-full md:w-1/2 justify-center items-center gap-5">
                <Image
                    src={`/products_images/${product_image}`}
                    alt={product_image || ""}
                    width={400}
                    height={300}
                    className="rounded" />
                <p className="w-96 text-center">All hand-made with natural soy wax, Candleaf is made for your pleasure moments. </p>
                <p className="text-main">🚚 FREE SHIPPING</p>
            </div>
            <div className="flex flex-col w-full md:w-1/2  items-center gap-5">
                <h1 className="w-full font-bold text-3xl">{product_name}</h1>
                <form action={handleSubmit} className="w-full flex justify-between">
                    <div className="flex flex-col w-1/5">
                        <p className="text-xl font-bold text-main mb-5">$ {price}</p>
                        <TextField
                            id="standard-basic"
                            label="Quantity"
                            variant="standard"
                            className="w-full"
                            name="qty"
                            type="number"
                            inputProps={{ min: 1 }}
                        />
                    </div>
                    <div className="w-3/5 flex flex-col gap-4">
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="preference"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="One time purchase" className="px-5 py-2" />
                            <div className="border p-5 rounded">
                                <FormControlLabel value="male" control={<Radio />} label="Subscript and delivery every 3 weeks" />
                                <p>Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. <span className="text-main">See details</span></p>
                            </div>
                        </RadioGroup>

                        <button className="w-full bg-main text-white py-3 rounded-md" type="submit">Add to Cart</button>
                    </div>
                </form>
                <div className="flex border gap-5 flex-col w-full p-5 rounded">
                    <p className="text-gray-300"><span className="font-bold text-black">Wax:</span> Top grade Soy wax that delivers a smoke less,  consistent burn</p>
                    <p className="text-gray-300"><span className="font-bold text-black">Fragrance:</span>  Premium quality ingredients with natural essential oils</p>
                </div>
            </div>
        </div>
    )
}

export default ProductById;