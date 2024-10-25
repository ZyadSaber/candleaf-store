'use client'

import { useVisibleState } from "@/hooks"
import { StyledMobileMenuIconContainer } from "../styled"
import Nav from "./nav"

const MenuItem = () => {

    const { visible, handleVisibility } = useVisibleState()

    return (
        <>
            <StyledMobileMenuIconContainer className="w-7 h-5 relative ease-in-out duration-500 rotate-0" isOpen={visible} onClick={handleVisibility}>
                <span className="block absolute h-1 w-full bg-main rounded-lg opacity-100 left-0 rotate-0 ease-in-out duration-200 top-0" />
                <span className="block absolute h-1 w-full bg-main rounded-lg opacity-100 left-0 rotate-0 ease-in-out duration-200 top-2.5" />
                <span className="block absolute h-1 w-full bg-main rounded-lg opacity-100 left-0 rotate-0 ease-in-out duration-200 top-5" />
            </StyledMobileMenuIconContainer>
            <div className={`top-20 left-0 w-full border fixed h-full px-10 transition-all ${visible ? "flex" : " translate-x-full invisible"} duration-500 bg-white shadow-md md:hidden`} onClick={handleVisibility}>
                <Nav />
            </div>
        </>
    )
}

export default MenuItem;