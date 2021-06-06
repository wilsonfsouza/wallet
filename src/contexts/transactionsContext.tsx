import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';
import { formatAmount } from '../utils/formatAmount';
import { formatDate } from '../utils/formatDate';

type ResponseTransaction = {
    id: number;
    title: string;
    amount: number;
    type: 'income' | 'outcome';
    category: string;
    createdAt: Date;
}

type ApiTransactionsResponse = {
    transactions: ResponseTransaction[]
}

type Transaction = {
    id: number;
    title: string;
    amount: string;
    type: 'income' | 'outcome';
    category: string;
    createdAt: string;
}

type TransactionsContextData = {
    transactions: Transaction[];
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get<ApiTransactionsResponse>('/transactions')
            .then(response => {
                const transactions = response.data.transactions

                const formatedTransactions = transactions.map(transaction => {
                    return {
                        ...transaction,
                        amount: formatAmount(transaction.amount),
                        createdAt: formatDate(transaction.createdAt)
                    }
                });

                setTransactions(formatedTransactions);
            });
    }, []);

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}