import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";
import { TableRow } from "./TableRow";

export const TransactionsTable = () => {
    useEffect(() => {
        api.get('/transactions')
            .then(response => console.log(response.data));
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
                    <TableRow
                        title="Website Development"
                        amount="$ 12,000.00"
                        category="Freelance"
                        date="4/30/2021"
                    />
                </tbody>
            </table>
        </Container>
    );
}