import styled from 'styled-components';

interface ContainerProps {
    colorScheme?: string;
}

export const Container = styled.button<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 1.5rem;
    border-radius: 0.25rem;
    height: 3rem;

    border: 0;
    font-size: 1rem;
    color: #FFF;
    background: ${props => props.colorScheme ?? 'transparent'};

    transition: filter 0.2s;

    &:hover {
        filter: brightness(1.1);
    }

    & + button {
        margin-left: 0.5rem;
    }

    svg {
        margin-left: 0.25rem;
    }
`;