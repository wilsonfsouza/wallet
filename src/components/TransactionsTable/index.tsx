import { useTransactions } from "../../hooks/useTransactions";
import { formatAmount } from "../../utils/formatAmount";
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
                            title={transaction.title}
                            amount={formatAmount(transaction.amount)}
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