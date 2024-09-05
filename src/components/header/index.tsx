import { memo } from "react"
import Link from "next/link"
import Image from "next/image"
import Nav from "./partials/nav"
import CartAvatarSection from "./partials/cartAvatarSection"

const Header = () => {
    return (
        <div className="h-20 bg-white  border px-10 md:px-28 flex justify-between items-center">

            <div className="md:hidden w-16 flex justify-center items-center py-5 h-20">
                <div className="w-7 h-5 relative ease-in-out duration-500 rotate-0">
                    <span className="block absolute h-1 w-full bg-black rounded-lg opacity-100 left-0 rotate-0 ease-in-out duration-200 top-0"></span>
                    <span className="block absolute h-1 w-full bg-black rounded-lg opacity-100 left-0 rotate-0 ease-in-out duration-200 top-2.5"></span>
                    <span className="block absolute h-1 w-full bg-black rounded-lg opacity-100 left-0 rotate-0 ease-in-out duration-200 top-5"></span>
                </div>
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
}

export default memo(Header)