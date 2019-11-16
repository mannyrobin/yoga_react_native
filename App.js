import React, { Component,  } from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import Main from './src/components/main'
import configureStore from './src/redux/store';

const store = configureStore()








export default function App(props) {

    return (
     <Provider store = { store }>
        <Main />
     </Provider>
    );
  
}





 
 
