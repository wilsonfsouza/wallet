import { Container } from './styles';

interface TableRowProps {
    title: string;
    amount: string;
    category: string;
    date: string;
    type: 'income' | 'outcome';
}

export function TableRow({ title, amount, type, category, date }: TableRowProps) {
    return (
        <Container>
            <td>{title}</td>
            <td className={type}>{amount}</td>
            <td>{category}</td>
            <td>{date}</td>
        </Container>
    );
}