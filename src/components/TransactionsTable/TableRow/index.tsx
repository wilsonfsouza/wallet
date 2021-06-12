import { useCallback, useState } from 'react';
import { RiPencilLine, RiDeleteBin2Fill } from 'react-icons/ri';
import { formatAmount } from '../../../utils/formatAmount';
import { DeleteTransactionModal } from '../../Modals/DeleteTransaction';
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

type TransactionToBeDeleted = Pick<Transaction, "id" | "title">;

interface TableRowProps {
    transaction: Transaction;
}

export function TableRow({ transaction }: TableRowProps) {
    const { id, title, type, category, createdAt, amount } = transaction;

    const formatedAmount = formatAmount(amount);

    const [isOpenEditTransactionModal, setIsOpenEditTransactionModal] = useState(false);
    const [editTransaction, setEditTransaction] = useState<Transaction | null>(null);

    const onCloseEditTransactionModal = useCallback(() => {
        setIsOpenEditTransactionModal(false);
    }, []);


    function handleEditTransaction(transaction: Transaction) {
        setEditTransaction(transaction);
        setIsOpenEditTransactionModal(true);
    }

    const [isOpenDeleteTransactionModal, setIsOpenDeleteTransactionModal] = useState(false);
    const [deleteTransaction, setDeleteTransaction] = useState<TransactionToBeDeleted | null>(null);

    function handleDeleteTransaction(transaction: TransactionToBeDeleted) {
        setDeleteTransaction(transaction);
        setIsOpenDeleteTransactionModal(true);
    }

    const onCloseDeleteTransactionModal = useCallback(() => {
        setIsOpenDeleteTransactionModal(false);
    }, []);


    return (
        <Container>
            <td>{title}</td>
            <td className={type}>{formatedAmount}</td>
            <td>{category}</td>
            <td>{createdAt}</td>
            <td>
                <ActionButtonsContainer>
                    <ActionButton colorScheme="var(--light-purple)" rightIcon={RiPencilLine} onClick={() => handleEditTransaction(transaction)}>Edit</ActionButton>
                    <ActionButton colorScheme="var(--red)" rightIcon={RiDeleteBin2Fill} onClick={() => handleDeleteTransaction({ id, title })}>Delete</ActionButton>
                </ActionButtonsContainer>
            </td>
            {editTransaction && (
                <EditTransactionModal isOpen={isOpenEditTransactionModal} onClose={onCloseEditTransactionModal} transaction={editTransaction} />
            )}
            {deleteTransaction && (
                <DeleteTransactionModal isOpen={isOpenDeleteTransactionModal} onClose={onCloseDeleteTransactionModal} transaction={deleteTransaction} />
            )}
        </Container>
    );
}