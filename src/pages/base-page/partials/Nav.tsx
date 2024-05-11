import { memo } from "react";
import { Link } from "react-router-dom";
import { StyledSubMenuItem } from "../styled";

const Nav = memo(() => {
    return (
        (
            <nav>
                <ul className="font-medium">
                    <StyledSubMenuItem className="relative list-none float-left w-full md:w-auto py-2.5 md:p-0 leading-10">
                        <Link className="text-base px-7 flex justify-between text-start hover:text-main transition-colors duration-150 py-2" to="products">Discovery</Link>
                        <ul className="p-1.5 border  relative left-0 opacity-0 transition-opacity duration-500 invisible w-full md:absolute md:w-48 flex flex-col bg-white shadow-lg rounded-lg gap-2 py-3">
                            <li className="relative list-none float-left w-full md:w-auto py-2.5 md:p-0 ">
                                <Link className="text-base px-7 flex justify-between text-start hover:text-main transition-colors duration-150" to="products">All Products</Link>
                            </li>
                            <li className="relative list-none float-left w-full md:w-auto py-2.5 md:p-0 ">
                                <Link className="text-base px-7 flex justify-between text-start hover:text-main transition-colors duration-150" to="products/t-shirts">T-Shirts</Link>
                            </li>
                        </ul>
                    </StyledSubMenuItem>
                    <li className="relative list-none float-left w-full md:w-auto py-2.5 md:p-0">
                        <Link className="text-base px-7 flex justify-between text-start hover:text-main transition-colors duration-150 py-2" to="about-us">About</Link>
                    </li>
                    <li className="relative list-none float-left w-full md:w-auto py-2.5 md:p-0">
                        <Link className="text-base px-7 flex justify-between text-start hover:text-main transition-colors duration-150 py-2" to="contact-us">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        )
    )
}
)

export default Nav