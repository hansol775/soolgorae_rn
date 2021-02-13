import React from 'react';
import MainRouter from './src/pages/MainRouter';
import { Provider } from 'mobx-react';
import rootStore from './src/settings/stores';
import { Root } from 'native-base';
import { SafeAreaView } from 'react-native';

if (process.env.NODE_ENV === 'production') {
    console.log = () => { }
}

const App = () => {
    return (
        <Provider {...rootStore}>
            <Root>
                <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
                    <MainRouter />
                </SafeAreaView>
            </Root>
        </Provider>
    )
}

export default App;