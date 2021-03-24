/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {Text, View} from 'react-native';
import {myTheme} from './my-theme';

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <View>
        <Text>Hello</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
