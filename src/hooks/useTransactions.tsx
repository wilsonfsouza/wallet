import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { formatDate } from '../utils/formatDate';

type RawTransaction = {
    id: number;
    title: string;
    amount: number;
    type: 'income' | 'outcome';
    category: string;
    createdAt: Date;
}

type Transaction = {
    id: number;
    title: string;
    amount: number;
    type: 'income' | 'outcome';
    category: string;
    createdAt: string;
}

type TransactionDTO = Omit<RawTransaction, 'id' | 'createdAt'>;

type TransactionsContextData = {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionDTO) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get<{ transactions: RawTransaction[] }>('/transactions')
            .then(response => {
                const { transactions } = response.data;

                const formatedTransactions = transactions.map(transaction => {
                    return {
                        ...transaction,
                        createdAt: formatDate(transaction.createdAt)
                    }
                });

                setTransactions(formatedTransactions);
            });
    }, []);

    async function createTransaction(transactionInput: TransactionDTO) {
        const response = await api.post<{ transaction: RawTransaction }>('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        });

        const { transaction } = response.data;

        const formatedTransaction = {
            ...transaction,
            createdAt: formatDate(transaction.createdAt)
        };

        setTransactions(transactionsAvailable => [...transactionsAvailable, formatedTransaction]);
    }

    return (
        <TransactionsContext.Provider value={{
            transactions,
            createTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    if (!context) {
        throw Error('useTransactions hook must be used within TransactionsContext.')
    }

    return context;
}