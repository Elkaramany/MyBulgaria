import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        // Custom Wave Tab
        if (route.name === 'WaveTab') {
          return (
            <TouchableOpacity
              key={route.key}
              style={styles.waveTab}
              activeOpacity={1}
              onPress={() => {
                // Ignore navigation for the wave tab
              }}
            >
              <View style={styles.waveShape} />
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }}
            onLongPress={() => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            }}
            style={styles.tab}
          >
            {/* Render your tab icon or label here */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'white',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waveTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  waveShape: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'blue', // Customize your wave shape style
  },
});

export default CustomTabBar;
