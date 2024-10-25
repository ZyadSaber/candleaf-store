import Link from "next/link";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { prisma } from "@/lib/prisma";
import { getSession, logout } from "@/lib/auth";
import { RecordWithAnyData } from "@/types";

const CartAvatarSection = async () => {
    const { user } = await getSession() || {}
    const { first_name, email, id }: RecordWithAnyData = user || {}

    const handleLogOut = async () => {
        "use server"
        await logout()
    }

    const foundItems = await prisma.cart_items.count({
        where: {
            user_id: id,
        }
    })

    return (
        <div className="gap-3 flex py-6">
            <Link className="relative cursor-pointer h-9" href="/cart">
                <ShoppingCartOutlinedIcon className="w-9 h-9 text-main" />
                <div className="absolute bottom-5 left-6 rounded-full w-5 h-5 flex items-center justify-center text-sm bg-main text-white">{foundItems}</div>
            </Link>
            <Link className="cursor-pointer flex justify-center items-center gap-2" href={user ? "" : "/login"}>
                <PersonOutlineOutlinedIcon className="w-9 h-9 text-main" />
                <div className="flex flex-col">
                    <p className="hidden md:block text-base">{user ? `Hello, ${first_name}` : "login/sign up"}</p>
                    {!!email && <p className="hidden md:block text-xs">{email}</p>}
                </div>
            </Link>
            <form action={handleLogOut}>
                {user && (<button type="submit" className="text-main"><LogoutIcon /></button>)}
            </form>
        </div>
    )
}

export default CartAvatarSection