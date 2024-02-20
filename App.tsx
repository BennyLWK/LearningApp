import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import {MainLayout} from './src/screens'; //'../.././src/screens';
import store from './src/redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={'MainLayout'}>
            <Stack.Screen name="Dashboard" component={MainLayout} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
