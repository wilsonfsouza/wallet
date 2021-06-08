import { useContext } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext';

export function useTransactions() {
    const context = useContext(TransactionsContext);

    if (!context) {
        throw Error('useTransactions hook must be used within TransactionsContext.')
    }

    return context;
}