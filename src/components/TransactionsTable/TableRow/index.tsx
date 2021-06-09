import { RiPencilLine, RiDeleteBin2Fill } from 'react-icons/ri';
import { Container, ActionButton, ActionButtonsContainer } from './styles';

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
            <td>
                <ActionButtonsContainer>
                    <ActionButton colorScheme="var(--light-purple)" rightIcon={RiPencilLine}>Edit</ActionButton>
                    <ActionButton colorScheme="var(--red)" rightIcon={RiDeleteBin2Fill}>Delete</ActionButton>
                </ActionButtonsContainer>
            </td>
        </Container>
    );
}