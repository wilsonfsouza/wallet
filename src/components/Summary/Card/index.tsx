import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface CardProps {
    title: string;
    amount: string;
    icon: React.ComponentType<IconBaseProps>;
    iconColor: string;
    textColor?: string;
    bgColor?: string;
}

export const Card = ({ title, amount, icon: Icon, iconColor, textColor, bgColor }: CardProps) => {

    return (
        <Container style={{ color: textColor, backgroundColor: bgColor && bgColor }}>
            <header>
                <p>{title}</p>
                <Icon fontSize={32} color={iconColor} />
            </header>
            <strong>{amount}</strong>
        </Container>
    );
}