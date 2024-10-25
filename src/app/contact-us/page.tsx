const ContactUs = () => (
    <div className="bg-gray-100 p-32">
        <div className="container mx-auto">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="mb-6 text-lg">
                    Have questions or comments? Drop us a message and we will get back to you as soon as possible.
                </p>
            </div>
            <form className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <button type="submit" className="w-full p-2 bg-main text-white rounded-lg">
                    Send Message
                </button>
            </form>
        </div>
    </div>
)

export default ContactUs