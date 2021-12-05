/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
// Locals
import {persistor, store} from './src/store';
import {Navigation} from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {backgroundColor: 'white', flex: 1},
});

export default App;
