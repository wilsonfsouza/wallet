import { ButtonHTMLAttributes } from "react";
import { Container } from './styles';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    content: string;
}

export function SubmitButton({ content }: SubmitButtonProps) {
    return (
        <Container type="submit">{content}</Container>
    );

}