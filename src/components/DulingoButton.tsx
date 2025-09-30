import React, { useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

export default function DuolingoButton() {
  const [pressAnim] = useState(new Animated.Value(0));

  const handlePressIn = () => {
    Animated.timing(pressAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(pressAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const translateY = pressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 4],
  });

  const shadowOpacity = pressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <View style={styles.buttonWrapper}>
          <Animated.View
            style={[
              styles.buttonShadow,
              {
                opacity: shadowOpacity,
              },
            ]}
          />
          <Animated.View
            style={[
              styles.button,
              {
                transform: [{ translateY }],
              },
            ]}
          >
            <Text style={styles.buttonText}>CONTINUAR</Text>
          </Animated.View>
        </View>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  buttonWrapper: {
    position: 'relative',
    width: 300,
    height: 56,
  },
  buttonShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 56,
    backgroundColor: '#00a300',
    borderRadius: 16,
  },
  button: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 52,
    backgroundColor: '#58cc02',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: '#52bd00',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});