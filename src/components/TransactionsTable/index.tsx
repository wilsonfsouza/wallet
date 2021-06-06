import { useContext } from "react";
import { TransactionsContext } from "../../contexts/transactionsContext";
import { Container } from "./styles";
import { TableRow } from "./TableRow";

export const TransactionsTable = () => {
    const { transactions } = useContext(TransactionsContext);

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