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
        user_name,
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

    return (
        <div className="flex gap-4 flex-wrap">
            <InputText
                floatingLabel={false}
                label="First name"
                width="47%"
                name={"user_name"}
                value={user_name}
                onChange={onChange}
                error={errors?.user_name}
                disabled={loading}
            />
            <InputText
                floatingLabel={false}
                label="Last Name"
                width="47%"
                name={"user_name"}
                value={user_name}
                onChange={onChange}
                error={errors?.user_name}
                disabled={loading}
            />
            <InputText
                floatingLabel={false}
                label="Email"
                type="email"
                width="100%"
                name={"user_name"}
                value={user_name}
                onChange={onChange}
                error={errors?.user_name}
                disabled={loading}
            />
            <PasswordInput
                floatingLabel={false}
                label="Password"
                width="100%"
                name={"password"}
                value={password}
                onChange={onChange}
                error={errors?.password}
                disabled={loading}
            />
            <PasswordInput
                floatingLabel={false}
                label="Retype password"
                width="100%"
                name={"password"}
                value={password}
                onChange={onChange}
                error={errors?.password}
                disabled={loading}
            />
            <Button variant="contained" onClick={submit}>Sign In</Button>

            <p className="w-full flex justify-center items-center gap-3">
                Already have an account?
                <Link href="login" className="text-blue-400 hover:text-blue-300">Log in</Link>
            </p>
        </div>
    )
}

export default FormInputs