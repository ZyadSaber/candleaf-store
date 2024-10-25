import { prisma } from "@/lib/prisma"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getSession } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";

const Cart = async () => {
    const { user } = await getSession() || {}
    const { id }: any = user || {}

    const cartItems = await prisma.cart_items.findMany({
        where: {
            user_id: id,
            order_no: null
        },
        include: {
            products: true
        },
    })

    const computedData = cartItems.map(({ cart_item_id, product_id, quantity, products: { product_name, price, product_image } }) => (
        {
            product_image,
            cart_item_id,
            product_id,
            product_name,
            quantity,
            price,
            total: price * quantity
        }
    ))

    const invoiceSubtotal = computedData.map(({ total }) => total).reduce((sum, i) => sum + i, 0)

    return (
        <div className="p-10">
            <div className="flex flex-col gap-2 m-5 justify-center items-center">
                <h2 className="text-4xl font-semibold ">Cart Page</h2>
                <Link className="text-green-600 text-sm" href="/products">Back to shopping</Link>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Qty.</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Sum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {computedData.map((row, index) => (
                            <TableRow key={row.cart_item_id} className="hover:bg-gray-100">
                                <TableCell>{index + 1}</TableCell>
                                <TableCell className="flex gap-2 items-center"><Image width={120} height={100} src={`/products_images/${row.product_image}`} alt="product image" />{row.product_name}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.total}</TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell rowSpan={3} />
                            <TableCell className="font-semibold">Subtotal</TableCell>
                            <TableCell align="right" className="font-semibold">{invoiceSubtotal.toFixed(2)}</TableCell>
                            <TableCell align="right" className="font-semibold"><Link href={computedData.length !== 0 ? "/orderDetails" : ""} className="bg-main py-1.5 px-2.5 rounded">Check-out</Link></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Cart;