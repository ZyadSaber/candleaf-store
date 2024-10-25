import Link from "next/link"

const Confirmation = () => (
    <div className="bg-gray-100 p-28 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h1 className="text-2xl font-bold mb-4 text-center">Order Confirmed!</h1>
            <p className="mb-4 text-center">
                Thank you for your purchase. Your order has been placed successfully.
            </p>
            <p className="text-center">
                You will receive a confirmation email shortly.
            </p>
            <div className="mt-6 text-center">
                <Link href="/" className="bg-main text-white px-4 py-2 rounded-lg">Continue Shopping</Link>
            </div>
        </div>
    </div>
)

export default Confirmation