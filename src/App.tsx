import Modal from 'react-modal';

import { useCallback, useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';
import './services/mirage';
import { TransactionsProvider } from './contexts/TransactionsContext';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleCloseNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false)
  }, []);

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true)
  }, []);

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
