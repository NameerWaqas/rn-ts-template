/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// Locals
import {Navigation} from './src/navigation';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {backgroundColor: 'white', flex: 1},
});

export default App;
