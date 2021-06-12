import styled from 'styled-components';
import { Button } from '../../Button';

export const Container = styled.section`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
        font-weight: 400;
        text-align: center;
    }
`;

export const Controllers = styled.div`
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
`;

export const CancelButton = styled(Button)`
    width: 100%;
    height: 4rem;
    background: var(--shape);
    color: var(--text-title);

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9);
    }
`;

export const DeleteButton = styled(Button)`
    width: 100%;
    height: 4rem;
    background: var(--red);
`;