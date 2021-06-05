import styled from 'styled-components';
import { darken } from 'polished';

interface ContainerProps {
    transactionType: 'income' | 'outcome';
}

const transactionTypeColors = {
    income: '#12A454',
    outcome: '#E52E4D'
}

export const Container = styled.button<ContainerProps>`
    height: 4rem;
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;
    
    &:hover {
        border-color: ${darken(0.1, '#D7D7D7')};
    }

    svg {
        color: ${props => transactionTypeColors[props.transactionType]}
    }

    span {
        text-transform: capitalize;
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title)
    }
`;