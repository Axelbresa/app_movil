// components/Footer.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 Hamburguesas Felices</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 40,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
  },
});

export default Footer;
