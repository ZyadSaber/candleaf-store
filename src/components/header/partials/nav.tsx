import Link from "next/link"

const Nav = () => (
    <nav>
        <ul className="font-medium">
            <li className="relative list-none rounded-md hover:text-gray-900 hover:bg-gray-100 float-left w-full md:w-auto py-2.5 md:p-0 leading-10 group ">
                <Link className="text-base px-7 flex justify-between text-start hover:text-main transition-colors duration-150 py-2" href="products">Discovery</Link>
                {/* <ul className="p-1.5 border  relative left-0 opacity-0 transition-opacity duration-500 invisible w-full md:absolute md:w-48 hidden md:flex flex-col bg-white shadow-lg rounded-lg gap-2 py-3 group-hover:flex group-hover:opacity-100 group-hover:visible">
                    <li className="relative list-none rounded-md hover:text-gray-900 hover:bg-gray-100 float-left w-full md:w-auto py-2.5 md:p-0 ">
                        <Link className="text-base px-7 flex justify-between text-start hover:text-main transition-colors duration-150" href="products">All Products</Link>
                    </li>
                    <li className="relative list-none rounded-md hover:text-gray-900 hover:bg-gray-100 float-left w-full md:w-auto py-2.5 md:p-0 ">
                        <Link className="text-base px-7 flex justify-between text-start hover:text-main transition-colors duration-150" href="products/t-shirts">T-Shirts</Link>
                    </li>
                </ul> */}
            </li>
            <li className="relative list-none rounded-md hover:text-gray-900 hover:bg-gray-100 float-left w-full md:w-auto py-2.5 md:p-0">
                <Link className="text-base px-7 flex justify-between text-start hover:text-main transition-colors duration-150 py-2" href="about-us">About</Link>
            </li>
            <li className="relative list-none rounded-md hover:text-gray-900 hover:bg-gray-100 float-left w-full md:w-auto py-2.5 md:p-0">
                <Link className="text-base px-7 flex justify-between text-start hover:text-main transition-colors duration-150 py-2" href="contact-us">Contact Us</Link>
            </li>
        </ul>
    </nav>
)

export default Nav