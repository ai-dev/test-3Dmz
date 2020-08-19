import React, { useEffect, useState, useMemo } from 'react'
import { StyleSheet, View, TextInput, Text, Button, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import FaceList from '../components/FaceList'
import AppTypes from '../types'
import { RootState } from './../redux'
import { fetchFaceList } from './../redux/faceList'

// Same behaviour as Google Contacts on Android
export const filterFaces = (faceList: AppTypes.Face[], filter: string) => {
  const _filter = filter.trim().toUpperCase()

  return faceList.filter(
    (face: AppTypes.Face) =>
      face.name.toUpperCase().startsWith(_filter) ||
      face.name.split(' ').reverse().join(' ').toUpperCase().startsWith(_filter)
  )
}

const FaceListPage = () => {
  const dispatch = useDispatch()
  const faceListState = useSelector((state: RootState) => state.faceList)

  const [filter, setFilter] = useState('')

  useEffect(() => {
    dispatch(fetchFaceList())
  }, [])

  const faceListData = useMemo(() => filterFaces(faceListState.data, filter), [
    faceListState,
    filter,
  ])

  if (faceListState.meta.fetching) {
    return (
      <View style={[styles.container, styles.loaderContainer]}>
        <ActivityIndicator size={50} />
      </View>
    )
  }

  if (faceListState.error) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <View style={styles.errorBodyContainer}>
          <View style={styles.errorBody}>
            <View style={styles.errorTextContainer}>
              <Text style={styles.errorTitle}>{faceListState.error.title}</Text>
              <Text style={styles.errorMessage}>{faceListState.error.message}</Text>
            </View>
            <Button title="Retry" onPress={() => dispatch(fetchFaceList())} />
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.filterInput}
        placeholder="Filter faces"
        onChangeText={(text) => setFilter(text)}
      />
      <FaceList data={faceListData} />
    </View>
  )
}

export default FaceListPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    justifyContent: 'center',
  },
  errorContainer: {
    backgroundColor: '#ff7979',
    justifyContent: 'center',
  },
  errorBodyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  errorBody: {
    width: 200,
    backgroundColor: '#fff',
    height: 200,
    padding: 15,
  },
  errorTextContainer: {
    flex: 1,
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorMessage: {},
  filterInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 15,
    marginVertical: 5,
  },
})
