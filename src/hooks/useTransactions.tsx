import { TransactionsContext } from '../contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

export function useTransactions() {
    const transactions = useContextSelector(TransactionsContext, transactions => transactions.transactions);
    const onCreateTransaction = useContextSelector(TransactionsContext, transactions => transactions.createTransaction);

    return {
        transactions,
        onCreateTransaction
    };
}