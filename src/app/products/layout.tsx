import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products for Candleaf Store",
    description: "Product Page Here you can find the products",
};

const LayOut = ({ children }: {
    children: React.ReactNode;
}) => (
    children
)

export default LayOut
