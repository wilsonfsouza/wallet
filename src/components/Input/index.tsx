import { InputHTMLAttributes } from "react";
import { CustomInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input({ ...rest }: InputProps) {
    return (
        <CustomInput {...rest} />
    )
}