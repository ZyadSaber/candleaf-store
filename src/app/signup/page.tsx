import { redirect } from 'next/navigation'
import { getSession } from "@/lib/auth";
import FormInputs from "./_partials/FormInputs"

const SignUpPage = async () => {
    const { user } = await getSession() || {}

    if (user) {
        redirect("/")
    }
    return (
        <div className="w-full flex justify-center items-center py-5 md:py-24 px-10">
            <div className="w-full md:w-3/12 border flex flex-col bg-gray-100/60 rounded py-6 px-8 gap-7">
                <h1 className="w-full text-2xl font-bold">Sign Up</h1>
                <FormInputs />
            </div>
        </div>
    )
}

export default SignUpPage