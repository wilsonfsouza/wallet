import { TransactionsContext } from '../contexts/TransactionsContext';
import { useContextSelector } from 'use-context-selector';

export function useTransactions() {
    const transactions = useContextSelector(TransactionsContext, transactions => transactions.transactions);
    const onCreateTransaction = useContextSelector(TransactionsContext, transactions => transactions.createTransaction);
    const onEditTransaction = useContextSelector(TransactionsContext, transactions => transactions.editTransaction);
    const onDeleteTransaction = useContextSelector(TransactionsContext, transactions => transactions.deleteTransaction);

    return {
        transactions,
        onCreateTransaction,
        onEditTransaction,
        onDeleteTransaction
    };
}