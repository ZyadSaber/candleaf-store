import { memo } from "react";

const Footer = memo(() => (
    <div className="w-full px-10 md:px-28 bg-dark text-white py-16">
        <div className="flex flex-col md:flex-row justify-between items-center w-full h-full border-t pt-3 border-white">
            <div className="md:w-1/4 w-full flex flex-col gap-4">
                <img src="/src/images/footerImage.png" alt="" />
                <p>Your natural candle made for your home and your wellness</p>
            </div>
            <p>d</p>
        </div>
    </div>
))

export default Footer;