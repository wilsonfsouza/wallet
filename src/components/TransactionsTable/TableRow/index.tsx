import { RiPencilLine, RiDeleteBin2Fill } from 'react-icons/ri';
import { useTransactions } from '../../../hooks/useTransactions';
import { formatAmount } from '../../../utils/formatAmount';
import { Container, ActionButton, ActionButtonsContainer } from './styles';

interface Transaction2 {
    id: number;
    title: string;
    amount: number;
    category: string;
    createdAt: string;
    type: 'income' | 'outcome';
}

interface TableRowProps {
    transaction: Transaction2;
}

export function TableRow({ transaction }: TableRowProps) {
    const { onDeleteTransaction } = useTransactions();

    const { id, title, type, category, createdAt, amount } = transaction;

    const formatedAmount = formatAmount(amount);

    return (
        <Container>
            <td>{title}</td>
            <td className={type}>{formatedAmount}</td>
            <td>{category}</td>
            <td>{createdAt}</td>
            <td>
                <ActionButtonsContainer>
                    <ActionButton colorScheme="var(--light-purple)" rightIcon={RiPencilLine}>Edit</ActionButton>
                    <ActionButton colorScheme="var(--red)" rightIcon={RiDeleteBin2Fill} onClick={() => onDeleteTransaction(id)}>Delete</ActionButton>
                </ActionButtonsContainer>
            </td>
        </Container>
    );
}