import React from 'react';
import { StoreContext } from '../shared/helpers/context/StoreContext';
import RootStore from './store/rootStore';
import { MainPage } from 'pages/MainPage';

function App() {
    return (
        <StoreContext.Provider value={new RootStore()}>
            <div className={'app'}>
                <MainPage />
            </div>
        </StoreContext.Provider>
    );
}

export default App;
