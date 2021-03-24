import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {myTheme} from './my-theme';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './screens/home.screen';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen
            options={{
              header: () => null,
            }}
            name="Home"
            component={Home}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
