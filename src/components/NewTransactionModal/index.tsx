import Modal from 'react-modal';
import { SubmitButton } from './SubmitButton';
import { Input } from './Input';
import { Container } from './styles';
import { CloseButton } from './CloseButton';


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
                <Input placeholder="Category" type="text" />
                <SubmitButton content="Create transaction" />
            </Container>
        </Modal>
    );
}