import React, { useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import AppTypes from './../types'
import Face from './Face'

type Props = {
  data: AppTypes.Face[]
}

const FaceList: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Face data={item} />}
      />
    </View>
  )
}

export default FaceList

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
