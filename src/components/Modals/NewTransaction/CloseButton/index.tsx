import { ButtonHTMLAttributes } from "react";
import { Button } from './styles';
import closeImg from '../../../assets/x.svg';

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function CloseButton({ ...rest }: CloseButtonProps) {
    return (
        <Button type="submit" {...rest}>
            <img src={closeImg} alt="Close modal" />
        </Button>
    );

}