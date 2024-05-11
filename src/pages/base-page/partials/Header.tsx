import { memo } from "react";
import Nav from "./Nav"
import CartAvatarSection from "./CartAvatarSection"

const Header = memo(() => {

    return (
        <div className="h-20 bg-white  border px-28 flex justify-between items-center">
            <div className="h-full flex items-center gap-2 font-semibold py-6">
                <img src="/src/images/image.png" className="h-full" alt="" />
                <p className="text-main">Candleaf</p>
            </div>
            <Nav />
            <CartAvatarSection />
        </div>
    )
})

export default Header;