import { configureStore } from '@reduxjs/toolkit'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
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
      <KeyboardAvoidingView
        style={styles.flex1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView style={[styles.container, styles.flex1]}>
          <FaceListPage />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  flex1: {
    flex: 1,
  },
})
