import { Container } from "./styles";

export const TransactionsTable = () => {
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
                    <tr>
                        <td>Website Development</td>
                        <td className="income">$ 12,000.00</td>
                        <td>Freelance</td>
                        <td>4/30/2021</td>
                    </tr>
                    <tr>
                        <td>Rent</td>
                        <td className="outcome">- $ 1,000.00</td>
                        <td>Home</td>
                        <td>4/30/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}