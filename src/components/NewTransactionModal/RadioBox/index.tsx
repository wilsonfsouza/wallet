import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface RadioBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    transactionType: 'income' | 'outcome';
    icon: React.ComponentType<IconBaseProps>;
    isActive: boolean;
}

export function RadioBox({ transactionType, isActive, icon: Icon, ...rest }: RadioBoxProps) {
    return (
        <Container
            type="button"
            transactionType={transactionType}
            isActive={isActive}
            {...rest}
        >
            <Icon size={20} />
            <span>{transactionType}</span>
        </Container>
    );
}