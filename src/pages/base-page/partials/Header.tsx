import { memo } from "react";
import { useVisibleState } from "../../../hooks"
import Nav from "./Nav"
import CartAvatarSection from "./CartAvatarSection"
import { StyledMobileMenuIconContainer } from "../styled"

const Header = memo(() => {

    const { visible, handleVisibility } = useVisibleState()

    return (
        <div className="h-20 bg-white  border px-10 md:px-28 flex justify-between items-center">
            <div className="md:hidden w-16 flex justify-center items-center py-5 h-20">
                <StyledMobileMenuIconContainer className="w-7 h-5 relative ease-in-out duration-500 rotate-0" isOpen={visible} onClick={handleVisibility}>
                    <span className="block absolute h-1 w-full bg-main rounded-lg opacity-100 left-0 rotate-0 ease-in-out duration-200 top-0"></span>
                    <span className="block absolute h-1 w-full bg-main rounded-lg opacity-100 left-0 rotate-0 ease-in-out duration-200 top-2.5"></span>
                    <span className="block absolute h-1 w-full bg-main rounded-lg opacity-100 left-0 rotate-0 ease-in-out duration-200 top-5"></span>
                </StyledMobileMenuIconContainer>
            </div>
            <div className="h-full flex items-center gap-2 font-semibold py-6">
                <img src="/src/images/image.png" className="h-full" alt="" />
                <p className="text-main">Candleaf</p>
            </div>
            <div className="hidden md:block">
                <Nav />
            </div>
            <CartAvatarSection />
            <div className={`top-20 left-0 w-full border fixed h-full px-10 transition-all ${visible ? "flex" : " translate-x-full invisible"} duration-500 bg-white shadow-md md:hidden`}>
                <Nav />
            </div>
        </div>
    )
})

export default Header;