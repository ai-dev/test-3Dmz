import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import AppTypes from './../types'

type Props = {
  data: AppTypes.Face
}

const Face: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: data.avatar,
        }}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{data.name}</Text>
      </View>
    </View>
  )
}

export default Face

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a5b1c2',
    padding: 10,
    marginBottom: 5,
    flexDirection: 'row',
    borderRadius: 100,
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
  },
  nameContainer: {
    justifyContent: 'center',
    marginLeft: 15,
  },
  nameText: {
    fontSize: 15,
  },
})
