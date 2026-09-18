import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Wallet from './components/Wallet';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <Wallet /> */}
            <App />
        </Provider>
    </React.StrictMode>
);