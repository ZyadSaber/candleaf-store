import Link from "next/link"

const Nav = () => (
    <nav>
        <ul className="font-medium">
            <li className="relative list-none rounded-md hover:text-gray-900 hover:bg-gray-100 float-left w-full md:w-auto py-2.5 md:p-0 leading-10 group ">
                <Link className="text-base px-7 flex justify-between text-start hover:text-main transition-colors duration-150 py-2" href="/products">Discovery</Link>
            </li>
            <li className="relative list-none rounded-md hover:text-gray-900 hover:bg-gray-100 float-left w-full md:w-auto py-2.5 md:p-0">
                <Link className="text-base px-7 flex justify-between text-start hover:text-main transition-colors duration-150 py-2" href="/about-us">About</Link>
            </li>
            <li className="relative list-none rounded-md hover:text-gray-900 hover:bg-gray-100 float-left w-full md:w-auto py-2.5 md:p-0">
                <Link className="text-base px-7 flex justify-between text-start hover:text-main transition-colors duration-150 py-2" href="/contact-us">Contact Us</Link>
            </li>
        </ul>
    </nav>
)

export default Nav