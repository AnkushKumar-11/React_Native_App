import { ActivityIndicator, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import type { PropsWithChildren } from 'react'

import { setUpPlayer, addTrack } from '../musicPlayerServices'
import { MusicPlayer } from './Screen/MusicPlayer'


const App = (): JSX.Element => {

  const [isPlayerReady, setIsPlayerReady] = useState(false)

  async function setup() {
    let isSetup = await setUpPlayer()

    if(isSetup){
      await addTrack()
    }
    setIsPlayerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])


  if(!isPlayerReady){
    return(
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }

  return(
    <View style = {styles.container}>
      <StatusBar barStyle={'light-content'}/>
      <MusicPlayer />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
