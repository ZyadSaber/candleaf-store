import Link from "next/link";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { RecordWithAnyData } from "@/types";

const CartAvatarSection = async () => {
    const { user } = await getSession() || {}
    const { first_name, email, id }: RecordWithAnyData = user || {}

    const foundItems = await prisma.cart_items.count({
        where: {
            user_id: id,
            order_no: null
        }
    })

    return (
        <div className="gap-3 flex py-6">
            <Link className="relative cursor-pointer h-9" href="/cart">
                <ShoppingCartOutlinedIcon className="w-9 h-9 text-main" />
                <div className="absolute bottom-5 left-6 rounded-full w-5 h-5 flex items-center justify-center text-sm bg-main text-white">{foundItems}</div>
            </Link>
            <Link className="cursor-pointer flex justify-center items-center gap-2" href={user ? "/profile" : "/login"}>
                <PersonOutlineOutlinedIcon className="w-9 h-9 text-main" />
                <div className="flex flex-col">
                    <p className="hidden md:block text-base">{user ? `Hello, ${first_name}` : "login/sign up"}</p>
                    {!!email && <p className="hidden md:block text-xs">{email}</p>}
                </div>
            </Link>
        </div>
    )
}

export default CartAvatarSection