import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'

import AppTypes from './../types'

type Props = {
  data: AppTypes.Face
}

const Face: React.FC<Props> = ({ data }) => {
  const [showLoader, setShowLoader] = useState<boolean>(true)

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {showLoader && <ActivityIndicator size={50} />}
        <Image
          style={styles.avatar}
          source={{
            uri: data.avatar,
          }}
          onLoadEnd={() => setShowLoader(false)}
        />
      </View>
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
  avatarContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    overflow: 'hidden',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  nameContainer: {
    justifyContent: 'center',
    marginLeft: 15,
  },
  nameText: {
    fontSize: 15,
  },
})
