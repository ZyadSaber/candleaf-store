import { memo } from "react"
import Link from "next/link"
import Image from "next/image"
import Nav from "./partials/nav"
import CartAvatarSection from "./partials/cartAvatarSection"
import MenuItem from "./partials/menuIcon"


const Header = () => (
    <div className="h-20 bg-white  border px-10 md:px-28 flex justify-between items-center">

        <div className="md:hidden w-16 flex justify-center items-center py-5 h-20">
            <MenuItem />
        </div>

        <Link href="/" className="h-full flex items-center gap-2 font-semibold py-6">
            <Image src="/logo.png" className="h-full" alt="" width={30} height={150} />
            <p className="text-main">Candleaf</p>
        </Link>
        <span className="hidden md:block">
            <Nav />
        </span>

        <CartAvatarSection />
    </div>
)

export default memo(Header)