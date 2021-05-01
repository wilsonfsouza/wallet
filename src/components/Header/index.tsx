import LogoImg from '../../assets/logo.png';
import { Container, Content } from './styles';

export const Header = () => {
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="digiWallet" />
                <button type="button">New transaction</button>
            </Content>
        </Container>
    );
}
