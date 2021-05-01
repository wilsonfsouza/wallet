import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';
import { BsWallet } from 'react-icons/bs';
import { Card } from './Card';
import { Container } from './styles';

export const Summary = () => {
    return (
        <Container>
            <Card
                title="Income"
                amount="$1,000.00"
                icon={FiArrowUpCircle}
                iconColor="#12A454"
            />
            <Card
                title="Outcome"
                amount="-$500.00"
                icon={FiArrowDownCircle}
                iconColor="#E52E4D"
            />
            <Card
                title="Total"
                amount="$500.00"
                icon={BsWallet}
                iconColor="#fff"
                textColor="#fff"
                bgColor="#6A1B9A"
            />
        </Container>
    );
}
