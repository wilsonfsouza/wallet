import styled from 'styled-components';
import { Button } from '../Button';

export const Container = styled.header`
    background: var(--pink);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    text-align: center;
    justify-content: space-between;
`;

export const NewTransactionButton = styled(Button)`
    padding: 0 2rem;
    height: 3rem;
`;