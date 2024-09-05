import { memo } from "react"
import Image from "next/image"

const Footer = () => (
    <>
        <div className="w-full px-10 md:px-28 bg-dark text-white pt-16 pb-24">
            <div className="flex flex-col md:flex-row justify-between items-center w-full h-full border-t pt-3 border-white gap-5">
                <div className="md:w-1/6 w-full flex flex-col gap-4">
                    <Image src="/footerImage.png" alt="" width={250} height={100} />
                    <p>Your natural candle made for your home and your wellness</p>
                </div>
                <div className="flex flex-col md:flex-row gap-16  w-full md:w-auto">
                    <div className="flex flex-col gap-5 ">
                        <p className="text-main my-2">Discovery</p>
                        <p className="text-white">New Season</p>
                        <p className="text-white">Most searched</p>
                        <p className="text-white">Most seller</p>
                    </div>
                    <div className="flex flex-col gap-5 ">
                        <p className="text-main my-2">About</p>
                        <p className="text-white">Help</p>
                        <p className="text-white">Shipping</p>
                        <p className="text-white">Affiliate</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="text-main my-2">Info</p>
                        <p className="text-white">Contact us</p>
                        <p className="text-white">Privacy Policy</p>
                        <p className="text-white">Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white py-7 px-10 md:px-28 flex flex-col md:flex-row justify-between items-center text-faded">
            <p>©Candleaf All Rights Reserved.</p>
            <p>Designed with ❤ by <span className="font-medium">Zyad Saber</span></p>
        </div>
    </>
)


export default memo(Footer)