import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from './../redux'
import { fetchFaceList } from './../redux/faceList'
import Face from './Face'

const FaceList = () => {
  const dispatch = useDispatch()
  const faceList = useSelector((state: RootState) => state.faceList)

  useEffect(() => {
    dispatch(fetchFaceList())
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={faceList.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Face data={item} />}
      />
    </View>
  )
}

export default FaceList

const styles = StyleSheet.create({
  container: {},
})
