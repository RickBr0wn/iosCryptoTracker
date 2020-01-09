import React from 'react'
import { Button, colors, ThemeProvider, Header } from 'react-native-elements'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'

const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Header
          placement="left"
          // leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{
            text: 'iOS CryptoCurrency Tracker',
            style: { color: '#fff' },
          }}
          // rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={styles.buttonContainer}>
          <Button style={styles.button} title="Hey!" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#000ddd',
    color: '#fff',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    width: 250,
  },
})

export default App
