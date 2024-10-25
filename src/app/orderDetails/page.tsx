import CartSideView from "@/components/cart-side-view"
import { prisma } from "@/lib/prisma"
import { TextField } from "@mui/material"
import { redirect } from 'next/navigation'
import { getSession, logout } from "@/lib/auth";
import { RecordWithAnyData } from "@/types";

const OrderDetailsPage = async () => {
    const { user } = await getSession() || {}
    const { id }: RecordWithAnyData = user || {}

    const handleSave = async () => {
        "use server"
        await prisma.cart_items.deleteMany({
            where: {
                user_id: id
            }
        })
        redirect("/confirmation")
    }

    return (
        <div className="p-10 flex flex-col md:flex-row gap-3">
            <form className="w-full md:w-1/2 flex flex-col gap-3" action={handleSave}>
                <h3 className="font-bold md:w-1/2 text-3xl">Contact</h3>
                <TextField id="outlined-basic" label="Phone Number" name="phone_number" variant="outlined" className="w-full" required />
                <h3 className="font-bold text-3xl">Shipping Address</h3>
                <div className="flex gap-5">
                    <TextField id="outlined-basic" label="First Name" name="first_name" variant="outlined" className="w-full md:w-1/2" required />
                    <TextField id="outlined-basic" label="Second Name" name="second_name" variant="outlined" className="w-full md:w-1/2" required />
                </div>
                <TextField id="outlined-basic" label="Address and number" name="address_and_number" variant="outlined" className="w-full" required />
                <TextField id="outlined-basic" label="Shipping Note (optional)" name="shipping_note" variant="outlined" className="w-full" />
                <button className="p-2 rounded bg-main">Confirm</button>
            </form>
            <CartSideView />
        </div>
    )
}

export default OrderDetailsPage;