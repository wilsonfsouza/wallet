import { useCallback, useState } from 'react';
import { RiPencilLine, RiDeleteBin2Fill } from 'react-icons/ri';
import { useTransactions } from '../../../hooks/useTransactions';
import { formatAmount } from '../../../utils/formatAmount';
import { EditTransactionModal } from '../../Modals/EditTransaction';
import { Container, ActionButton, ActionButtonsContainer } from './styles';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    category: string;
    createdAt: string;
    type: 'income' | 'outcome';
}

interface TableRowProps {
    transaction: Transaction;
}

export function TableRow({ transaction }: TableRowProps) {
    const { onDeleteTransaction } = useTransactions();

    const { id, title, type, category, createdAt, amount } = transaction;

    const formatedAmount = formatAmount(amount);

    const [isOpenEditTransactionModal, setIsOpenEditTransactionModal] = useState(false);

    const onCloseEditTransactionModal = useCallback(() => {
        setIsOpenEditTransactionModal(false);
    }, []);

    const [editTransaction, setEditTransaction] = useState<Transaction | null>(null);

    function handleEditTransaction(transaction: Transaction) {
        setEditTransaction(transaction);
        setIsOpenEditTransactionModal(true);
    }

    return (
        <Container>
            <td>{title}</td>
            <td className={type}>{formatedAmount}</td>
            <td>{category}</td>
            <td>{createdAt}</td>
            <td>
                <ActionButtonsContainer>
                    <ActionButton colorScheme="var(--light-purple)" rightIcon={RiPencilLine} onClick={() => handleEditTransaction(transaction)}>Edit</ActionButton>
                    <ActionButton colorScheme="var(--red)" rightIcon={RiDeleteBin2Fill} onClick={() => onDeleteTransaction(id)}>Delete</ActionButton>
                </ActionButtonsContainer>
            </td>
            {editTransaction && (
                <EditTransactionModal isOpen={isOpenEditTransactionModal} onClose={onCloseEditTransactionModal} transaction={editTransaction} />
            )}
        </Container>
    );
}