import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';
import { Container } from './styles';

export const Dashboard = () => {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}
