import Modal from 'react-modal';
import { Dashboard } from './pages/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';
import './services/mirage';
import { TransactionsProvider } from './contexts/TransactionsContext';
import { NewTransactionsModalProvider } from './contexts/NewTransactionsModalContext';

Modal.setAppElement('#root');

function App() {
  return (
    <TransactionsProvider>
      <NewTransactionsModalProvider>
        <Header />
        <NewTransactionModal />
      </NewTransactionsModalProvider>
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
