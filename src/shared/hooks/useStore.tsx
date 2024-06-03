import { useContext } from 'react';
import { StoreContext } from '../helpers/context/StoreContext';

export const useStore = () => {
    const context = useContext(StoreContext);

    if (!context) {
        throw new Error('Ошибка контекста');
    }
    return context;
};
