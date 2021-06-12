import Modal from 'react-modal';
import { useTransactions } from '../../../hooks/useTransactions';
import { Container, Controllers, CancelButton, DeleteButton } from './styles';

type Transaction = {
    id: number;
    title: string;
}

interface DeleteTransactionModalProps {
    transaction: Transaction;
    onClose: () => void;
    isOpen: boolean;
}

export function DeleteTransactionModal({ onClose, isOpen, transaction }: DeleteTransactionModalProps) {
    const { onDeleteTransaction } = useTransactions();

    async function handleDeleteTransaction(id: number) {
        await onDeleteTransaction(id);
        onClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Are you sure you want to delete <br /><strong>{transaction.title}</strong>?</h2>
                <Controllers>
                    <CancelButton onClick={onClose}>Cancel</CancelButton>
                    <DeleteButton onClick={() => handleDeleteTransaction(transaction.id)} >Delete</DeleteButton>
                </Controllers>
            </Container>
        </Modal >
    );
}