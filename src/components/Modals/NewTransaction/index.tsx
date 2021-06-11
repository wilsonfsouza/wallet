import Modal from 'react-modal';
import { SubmitButton } from './SubmitButton';
import { Input } from '../../Input';
import { Container, TransactionTypeContainer } from './styles';
import { CloseButton } from './CloseButton';
import { RadioBox } from './RadioBox';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../../hooks/useTransactions';
import { useNewTransactionsModal } from '../../../hooks/useNewTransactionsModal';

export function NewTransactionModal() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState<'income' | 'outcome'>('income');

    const { onCreateTransaction } = useTransactions();
    const { isNewTransactionModalOpen, onCloseNewTransactionModal } = useNewTransactionsModal();

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await onCreateTransaction({
            title,
            amount,
            category,
            type
        });

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('income');

        onCloseNewTransactionModal();
    }

    return (
        <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={onCloseNewTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <CloseButton onClick={onCloseNewTransactionModal} />

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Create a new transaction</h2>
                <Input
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Title"
                    type="text"
                />

                <Input
                    value={amount}
                    onChange={(event) => setAmount(Number(event.target.value))}
                    placeholder="Amout"
                    type="number"
                />

                <TransactionTypeContainer>
                    <RadioBox
                        transactionType="income"
                        icon={FiArrowUpCircle}
                        onClick={() => setType('income')}
                        isActive={type === 'income'}
                    />
                    <RadioBox
                        transactionType="outcome"
                        icon={FiArrowDownCircle}
                        onClick={() => setType('outcome')}
                        isActive={type === 'outcome'}
                    />
                </TransactionTypeContainer>

                <Input
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    placeholder="Category"
                    type="text"
                />

                <SubmitButton content="Create transaction" />
            </Container>
        </Modal>
    );
}