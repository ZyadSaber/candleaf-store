import { useCallback } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { PasswordInputProps } from "./interface"

const PasswordInput = ({
    floatingLabel = true,
    label,
    name,
    error,
    placeholder,
    value,
    onChange,
    autoFocus,
    autoComplete,
    required,
    width,
    addOnLabel,
    disabled
}: PasswordInputProps) => {

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.({ name, value: event.target.value });
    }, [name, onChange])

    return (
        <FormControl style={{
            width
        }}>
            {!floatingLabel && <FormLabel className='flex justify-between' htmlFor={name}>
                {label}
                {addOnLabel?.()}
            </FormLabel>
            }
            <TextField
                className='p-0'
                value={value}
                onChange={handleInputChange}
                error={!!error}
                helperText={error}
                id={name}
                name={name}
                label={floatingLabel ? label : undefined}
                type="password"
                placeholder={placeholder}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                required={required}
                fullWidth
                variant="outlined"
                color={error ? 'error' : 'primary'}
                sx={{ ariaLabel: 'password' }}
                inputProps={{
                    className: "py-2.5 px-3"
                }}
                disabled={disabled}
            />
        </FormControl>
    )
}

export default PasswordInput;