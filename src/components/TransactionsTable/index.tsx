import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { formatAmount } from "../../utils/formatAmount";
import { formatDate } from "../../utils/formatDate";
import { Container } from "./styles";
import { TableRow } from "./TableRow";

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

export const TransactionsTable = () => {
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
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <TableRow
                            key={transaction.id}
                            title={transaction.title}
                            amount={transaction.amount}
                            type={transaction.type}
                            category={transaction.category}
                            date={transaction.createdAt}
                        />
                    ))}
                </tbody>
            </table>
        </Container>
    );
}