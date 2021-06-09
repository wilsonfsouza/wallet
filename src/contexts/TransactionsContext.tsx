import { ReactNode, useCallback, useEffect, useState } from 'react';
import { api } from '../services/api';
import { formatDate } from '../utils/formatDate';
import { createContext } from 'use-context-selector';

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

    const createTransaction = useCallback(async (transactionInput: TransactionDTO) => {
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
    }, []);

    const editTransaction = useCallback(async (transactionInput: Transaction) => {
        const response = await api.put<{ transaction: RawTransaction }>('/transactions', transactionInput);

        const { transaction } = response.data;

        const formatedTransaction = {
            ...transaction,
            createdAt: formatDate(transaction.createdAt)
        };

        setTransactions(transactionsAvailable => {
            const updatedTransactions = transactionsAvailable.filter(transaction => transaction.id === transactionInput.id)
            return [...updatedTransactions, formatedTransaction]
        });
    }, []);

    const deleteTransaction = useCallback(async (transactionInput: Transaction) => {
        await api.delete<{ transaction: RawTransaction }>(`/transactions/${transactionInput.id}`);

        setTransactions(transactionsAvailable => {
            const updatedTransactions = transactionsAvailable.filter(transaction => transaction.id === transactionInput.id)
            return updatedTransactions
        });
    }, []);

    return (
        <TransactionsContext.Provider value={{
            transactions,
            createTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}