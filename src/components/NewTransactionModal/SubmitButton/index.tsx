import { ButtonHTMLAttributes } from "react";
import { Button } from './styles';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    content: string;
}

export function SubmitButton({ content }: SubmitButtonProps) {
    return (
        <Button type="button">{content}</Button>
    );

}