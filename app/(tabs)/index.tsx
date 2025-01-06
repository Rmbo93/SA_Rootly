import { Image, StyleSheet, Platform, TextComponent } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { SafeAreaView, View, Text } from 'react-native';
import tw from "twrnc";
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Container } from '@/components/Container';


const logo = require("../../assets/images/react-logo.png");

export default function HomeScreen() {
  return (
    <Container>
      <Image 
        source={logo}
        style={tw`w-24 h-10`}
        resizeMode="contain" // Corrected typo
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
