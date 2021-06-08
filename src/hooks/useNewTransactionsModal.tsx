import { NewTransactionsModalContext } from '../contexts/NewTransactionsModalContext';
import { useContextSelector } from 'use-context-selector';

export function useNewTransactionsModal() {
    const isNewTransactionModalOpen = useContextSelector(NewTransactionsModalContext, modal => modal.isNewTransactionModalOpen);
    const onCloseNewTransactionModal = useContextSelector(NewTransactionsModalContext, modal => modal.onCloseNewTransactionModal);
    const onOpenNewTransactionModal = useContextSelector(NewTransactionsModalContext, modal => modal.onOpenNewTransactionModal);

    return {
        isNewTransactionModalOpen,
        onCloseNewTransactionModal,
        onOpenNewTransactionModal
    };
}