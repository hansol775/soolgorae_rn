import React from 'react';
import MainRouter from './src/pages/MainRouter';
import { Provider } from 'mobx-react';
import rootStore from './src/settings/stores';
import { Root } from 'native-base';

if (process.env.NODE_ENV === 'production') {
    console.log = () => { }
}

const App = () => {
    return (
        <Provider {...rootStore}>
            <Root>
                <MainRouter />
            </Root>
        </Provider>
    )
}

export default App;