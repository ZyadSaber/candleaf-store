'use client'
import { useCallback } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button"
import { useFormManager, usePost } from "@/hooks";
import InputText from "@/components/input-text"
import PasswordInput from "@/components/password-input"
import { initialValues, validate } from "../constants"
import { RecordWithAnyData } from "@/types";

const FormInputs = () => {
    const router = useRouter()

    const { mutate, loading } = usePost({
        url: "auth/login"
    })

    const submitFN = useCallback((data: RecordWithAnyData) => {
        mutate({
            data,
            fn: (_: unknown, error: RecordWithAnyData) => {
                if (error) {
                    return alert(error.message)
                }
                router.push("/")
                router.refresh()
            }
        })
    }, [mutate, router])

    const { values: {
        email,
        password
    },
        onChange,
        errors,
        submit
    } = useFormManager({
        initialValues,
        validate,
        submitFN
    })

    const addOnLabel = useCallback(() => (
        <Link href={`login/forgetPassword?email=${email}`} className="hover:text-blue-300">Forgot your password?</Link>
    ), [email])

    return (
        <div className="flex flex-col gap-4">
            <InputText
                floatingLabel={false}
                label="Email"
                width="100%"
                name={"email"}
                value={email}
                onChange={onChange}
                error={errors?.email}
                disabled={loading}
            />
            <PasswordInput
                floatingLabel={false}
                label="Password"
                width="100%"
                name={"password"}
                value={password}
                onChange={onChange}
                addOnLabel={addOnLabel}
                error={errors?.password}
                disabled={loading}
            />
            <Button variant="contained" onClick={submit}>Sign In</Button>

            <p className="w-full flex justify-center items-center gap-3">
                Not Signed In?
                <Link href="signup" className="text-blue-400 hover:text-blue-300">Sign Up</Link>
            </p>
        </div>
    )
}

export default FormInputs