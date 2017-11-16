import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default class MobileApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Mobile View</Text>
      </View>
    )
  }
}
