import { Container } from './styles';

interface TableRowProps {
    title: string;
    amount: string;
    category: string;
    date: string;
}

export function TableRow({ title, amount, category, date }: TableRowProps) {
    return (
        <Container>
            <td>{title}</td>
            <td className="income">{amount}</td>
            <td>{category}</td>
            <td>{date}</td>
        </Container>
    );
}