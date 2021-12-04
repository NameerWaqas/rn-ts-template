/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.view}>
        <Text style={styles.text}>Welcome to React Native template..</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {backgroundColor: 'white', flex: 1},
  view: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {color: 'black', fontWeight: 'bold'},
});

export default App;
