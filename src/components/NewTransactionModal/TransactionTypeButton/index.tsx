import { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface TransactionTypeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    transactionType: 'income' | 'outcome';
    icon: React.ComponentType<IconBaseProps>;
}

export function TransactionTypeButton({ transactionType, icon: Icon, ...rest }: TransactionTypeButtonProps) {
    return (
        <Container
            type="button"
            transactionType={transactionType}
            {...rest}
        >
            <Icon size={20} />
            <span>{transactionType}</span>
        </Container>
    );
}