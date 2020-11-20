import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './components/Calculator/reducers';
import Calculator from './components/Calculator';

const store = createStore(reducer);

export default class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <Calculator />
            </Provider>
        );
    }
}

