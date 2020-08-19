import { configureStore } from '@reduxjs/toolkit'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'

import FaceListPage from './pages/FaceListPage'
import appReducer from './redux'

const store = configureStore({
  reducer: appReducer,
})

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <FaceListPage />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
})
