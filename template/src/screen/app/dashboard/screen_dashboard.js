import {StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import {navigate} from '@navigation'
import {useNavigation} from '@react-navigation/native'

export default function screen_dashboard () {
  const navigation = useNavigation()
  return (
    <View>
      <Text></Text>
      <Button title='sa' onPress={() => navigate('insta_home')} />
    </View>
  )
}

const styles = StyleSheet.create({})
