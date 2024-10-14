import { useCallback } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { InputTextProps } from "./interface"

const InputText = ({
    floatingLabel = true,
    label,
    name,
    error,
    type,
    placeholder,
    value,
    onChange,
    autoFocus,
    autoComplete,
    required,
    width,
    disabled,
    addOnLabel
}: InputTextProps) => {

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.({ name, value: event.target.value });
    }, [name, onChange])

    return (
        <FormControl style={{
            width
        }}>
            {!floatingLabel && <FormLabel htmlFor={name}>
                {label}
                {addOnLabel?.()}
            </FormLabel>}
            <TextField
                className='p-0'
                value={value}
                onChange={handleInputChange}
                error={!!error}
                helperText={error}
                id={name}
                name={name}
                label={floatingLabel ? label : undefined}
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                required={required}
                fullWidth
                disabled={disabled}
                variant="outlined"
                color={error ? 'error' : 'primary'}
                sx={{ ariaLabel: 'email' }}
                inputProps={{
                    className: "py-2.5 px-3"
                }}
            />
        </FormControl>
    )
}

export default InputText;