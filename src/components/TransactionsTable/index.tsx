import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";
import { TableRow } from "./TableRow";

export const TransactionsTable = () => {
    const { transactions } = useTransactions();

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
                            transaction={transaction}
                        />
                    ))}
                </tbody>
            </table>
        </Container>
    );
}