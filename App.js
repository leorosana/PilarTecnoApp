import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/routes/index'
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App=()=> {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack /> 
      </NavigationContainer>
    </Provider>
  );
}

export default App;
