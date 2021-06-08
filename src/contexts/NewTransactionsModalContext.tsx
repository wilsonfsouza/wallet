import { ReactNode, useCallback, useState } from 'react';
import { createContext } from 'use-context-selector';

interface NewTransactionsModalContextData {
    isNewTransactionModalOpen: boolean;
    onCloseNewTransactionModal: () => void;
    onOpenNewTransactionModal: () => void;
}

interface NewTransactionsModalProviderProps {
    children: ReactNode;
}

export const NewTransactionsModalContext = createContext<NewTransactionsModalContextData>({} as NewTransactionsModalContextData);

export function NewTransactionsModalProvider({ children }: NewTransactionsModalProviderProps) {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    const onCloseNewTransactionModal = useCallback(() => {
        setIsNewTransactionModalOpen(false);
    }, []);

    const onOpenNewTransactionModal = useCallback(() => {
        setIsNewTransactionModalOpen(true);
    }, []);

    return (
        <NewTransactionsModalContext.Provider value={{
            isNewTransactionModalOpen,
            onCloseNewTransactionModal,
            onOpenNewTransactionModal
        }}>
            {children}
        </NewTransactionsModalContext.Provider>
    );
}