import { TextField } from "@mui/material"
import { getSession } from "@/lib/auth";
import { RecordWithAnyData } from "@/types";
import { prisma } from "@/lib/prisma";

const NewProduct = async () => {
    const { user } = await getSession() || {}
    const { admin }: RecordWithAnyData = user || {}

    const handleSave = async (formData) => {
        "use server"
        await prisma.products.create({
            data: {
                product_name: formData.get("product_name"),
                price: +formData.get("price"),
                product_description: formData.get("description"),
                product_image: formData.get("image")
            }
        })
    }

    return (
        admin ? <form className="p-5 w-full md:w-1/4 hover:shadow-lg transition-shadow rounded-lg bg-gray-100 flex flex-col items-center gap-3" action={handleSave}>
            <h2 className="text-2xl">New Product</h2>
            <TextField id="outlined-basic" label="Product image" name="image" variant="outlined" className="w-full" />
            <TextField id="outlined-basic" label="Product Name" name="product_name" variant="outlined" className="w-full" />
            <TextField id="outlined-basic" type="number" inputProps={{
                min: 1
            }} label="Price" name="price" variant="outlined" className="w-full" />
            <TextField id="outlined-basic" label="Product description" name="description" variant="outlined" className="w-full" />
            <button className="w-full p-2 bg-main" type="submit">Save</button>
        </form> : <></>
    )
}

export default NewProduct;