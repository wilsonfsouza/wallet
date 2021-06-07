import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';
import { BsWallet } from 'react-icons/bs';
import { Card } from './Card';
import { Container } from './styles';
import { useMemo } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { formatAmount } from '../../utils/formatAmount';

export const Summary = () => {
    const { transactions } = useTransactions();

    const { income, outcome, total } = useMemo(() => {
        const accumulatedTransactions = transactions.reduce((acc, transaction) => {
            switch (transaction.type) {
                case 'income':
                    acc.income += transaction.amount
                    acc.total += transaction.amount
                    break;
                case 'outcome':
                    acc.outcome += transaction.amount
                    acc.total -= transaction.amount
                    break;
                default:
                    break;
            }

            return acc;
        }, {
            total: 0,
            income: 0,
            outcome: 0
        });

        return {
            total: formatAmount(accumulatedTransactions.total),
            income: formatAmount(accumulatedTransactions.income),
            outcome: formatAmount(accumulatedTransactions.outcome)
        }
    }, [transactions]);

    return (
        <Container>
            <Card
                title="Income"
                amount={income}
                icon={FiArrowUpCircle}
                iconColor="#12A454"
            />
            <Card
                title="Outcome"
                amount={`- ${outcome}`}
                icon={FiArrowDownCircle}
                iconColor="#E52E4D"
            />
            <Card
                title="Total"
                amount={total}
                icon={BsWallet}
                iconColor="#fff"
                textColor="#fff"
                bgColor="#6A1B9A"
            />
        </Container>
    );
}
