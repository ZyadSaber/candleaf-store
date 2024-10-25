
const AboutUs = () => (
    <>
        <div className="bg-gray-100 p-32">
            <div className="container mx-auto">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="mb-6 text-lg">
                        At Candleaf, we believe in the power of natural light to transform spaces and uplift spirits. Our candles are crafted with the finest ingredients, ensuring a clean, long-lasting burn.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
                            <p>
                                Our mission is to create candles that not only illuminate but also inspire. We are committed to sustainability and use eco-friendly materials in all our products.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-2">Our Story</h2>
                            <p>
                                Candleaf was born out of a passion for quality craftsmanship and a love for the natural world. From humble beginnings in a small workshop, we have grown into a brand that lights up homes around the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default AboutUs