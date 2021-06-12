import Modal from 'react-modal';
import { SubmitButton } from './SubmitButton';
import { Input } from '../../Input';
import { Container, TransactionTypeContainer } from './styles';
import { CloseButton } from './CloseButton';
import { RadioBox } from './RadioBox';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../../hooks/useTransactions';

type Transaction = {
    id: number;
    title: string;
    amount: number;
    type: 'income' | 'outcome';
    category: string;
    createdAt: string;
}

interface EditTransactionModalProps {
    transaction: Transaction;
    onClose: () => void;
    isOpen: boolean;
}

export function EditTransactionModal({ onClose, isOpen, transaction }: EditTransactionModalProps) {

    const [title, setTitle] = useState(transaction.title ?? '');
    const [amount, setAmount] = useState(transaction.amount ?? 0);
    const [category, setCategory] = useState(transaction.category ?? '');

    const [type, setType] = useState<'income' | 'outcome'>(transaction.type ?? 'income');

    const { onEditTransaction } = useTransactions();

    async function handleEditTransaction(event: FormEvent) {
        event.preventDefault();

        await onEditTransaction({
            id: transaction.id,
            title,
            amount,
            category,
            type,
            createdAt: transaction.createdAt
        });

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('income');

        onClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <CloseButton onClick={onClose} />

            <Container onSubmit={handleEditTransaction}>
                <h2>Edit transaction</h2>
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

                <SubmitButton content="Edit transaction" />
            </Container>
        </Modal>
    );
}