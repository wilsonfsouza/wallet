import styled from 'styled-components';
import { Button } from '../../Button';

export const Container = styled.tr`
    td {
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-body);
        border-radius: 0.25rem;

        &:first-child {
            color: var(--text-title); 
        }

        &.outcome {
            color: var(--red);
        }
        &.income {
            color: var(--green);
        }
    }
`;

export const ActionButton = styled(Button)`
    padding: 0 1rem;
    height: 2rem;
`;