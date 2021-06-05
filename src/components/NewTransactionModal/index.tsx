import Modal from 'react-modal';
import { SubmitButton } from './SubmitButton';
import { Input } from './Input';
import { Container, TransactionTypeContainer } from './styles';
import { CloseButton } from './CloseButton';
import { TransactionTypeButton } from './TransactionTypeButton';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <CloseButton onClick={onRequestClose} />

            <Container>
                <h2>Create a new transaction</h2>
                <Input placeholder="Title" type="text" />
                <Input placeholder="Amout" type="number" />
                <TransactionTypeContainer>
                    <TransactionTypeButton transactionType="income" icon={FiArrowUpCircle} />
                    <TransactionTypeButton transactionType="outcome" icon={FiArrowDownCircle} />
                </TransactionTypeContainer>
                <Input placeholder="Category" type="text" />
                <SubmitButton content="Create transaction" />
            </Container>
        </Modal>
    );
}