import LogoImg from '../../assets/logo.png';
import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="digiWallet" />
                <button type="button" onClick={onOpenNewTransactionModal}>New transaction</button>
            </Content>
        </Container>
    );
}
