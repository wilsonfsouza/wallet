import LogoImg from '../../assets/logo.png';
import { useNewTransactionsModal } from '../../hooks/useNewTransactionsModal';
import { Container, Content, NewTransactionButton } from './styles';

export const Header = () => {
    const { onOpenNewTransactionModal } = useNewTransactionsModal();
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="digiWallet" />
                <NewTransactionButton colorScheme="var(--light-purple)" onClick={onOpenNewTransactionModal}>New transaction</NewTransactionButton>
            </Content>
        </Container>
    );
}
