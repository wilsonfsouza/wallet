import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    rightIcon?: React.ComponentType<IconBaseProps>;
    colorScheme?: string | undefined;
}

export function Button({ children, rightIcon: RightIcon, colorScheme, ...rest }: ButtonProps) {
    return (
        <Container type="button" colorScheme={colorScheme} {...rest} tabIndex={0}>
            {children}
            {RightIcon && (<RightIcon />)}
        </Container>
    );
}