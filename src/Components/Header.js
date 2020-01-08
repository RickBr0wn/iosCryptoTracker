import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>iOS CryptoCurrency Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    marginTop: 55,
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Header;
