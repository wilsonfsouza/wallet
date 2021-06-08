import LogoImg from '../../assets/logo.png';
import { useNewTransactionsModal } from '../../hooks/useNewTransactionsModal';
import { Container, Content } from './styles';

export const Header = () => {
    const { onOpenNewTransactionModal } = useNewTransactionsModal();
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="digiWallet" />
                <button type="button" onClick={onOpenNewTransactionModal}>New transaction</button>
            </Content>
        </Container>
    );
}
