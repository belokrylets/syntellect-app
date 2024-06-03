import { createContext } from 'react';
import RootStore from 'app/store/rootStore';

export const StoreContext = createContext<RootStore | null>(null);
