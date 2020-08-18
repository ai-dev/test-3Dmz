import React, { FC } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { Face } from './../types'

type Props = {
  data: Face
}

const FaceList: FC<Props> = ({ data }) => {
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

export default FaceList

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffbe76',
    padding: 15,
    marginBottom: 5,
    flexDirection: 'row',
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
