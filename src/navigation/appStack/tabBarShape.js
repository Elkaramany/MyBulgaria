import React from "react";
import { Dimensions, Pressable, View } from "react-native";
import { Svg } from "react-native-svg";
import { Text } from "@components";
import { HomeIcon, PrizeIcon, ProfileIcon, HeartIcon, TabShape } from '@assets';
import { WIDTH, colors, globalStyles } from "@config";

const NAVIGATION_BOTTOM_TABS_HEIGHT = 80;
const { width: wWidth } = Dimensions.get("window");

function TabsShape({ state, descriptors, navigation }) {

    return (
        <>
            <View
                style={{
                    flexDirection: "row",
                    zIndex: 1,
                    position: "absolute",
                    bottom: 0,
                    width: '100%',
                    backgroundColor: 'transparent',
                }}
            >
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: "tabLongPress",
                            target: route.key,
                        });
                    };

                    const getRouteIcon = (name) => {
                        if (name === 'Home') return <HomeIcon fill={colors.bg.primary} />;
                        else if (name === 'Favorites') return <HeartIcon fill={colors.bg.primary} />;
                        else if (name === 'Prizes') return <PrizeIcon fill={colors.bg.primary} />;
                        return <ProfileIcon fill={colors.bg.primary} />;
                    };

                    return (
                        <Pressable
                            key={route.key}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{
                                flex: 1,
                                ...globalStyles.centeredContainer,
                                height: NAVIGATION_BOTTOM_TABS_HEIGHT,
                                backgroundColor: 'transparent'
                            }}
                        >
                            <View style={[
                                globalStyles.centeredContainer,
                                route.name === 'Favorites' && { transform: [{ translateX: -30 }] },
                                route.name === 'Prizes' && { transform: [{ translateX: 30 }] },
                                { backgroundColor: 'transparent' }
                            ]}>
                                {getRouteIcon(route.name)}
                                <Text value={route.name} button medium />
                            </View>
                        </Pressable>
                    );
                })}
            </View>
            <View
                style={{
                    zIndex: 0,
                    position: "absolute",
                    bottom: 0,
                    height: NAVIGATION_BOTTOM_TABS_HEIGHT + 40,
                    backgroundColor: 'transparent',
                }}
            >
                <Svg
                    viewBox={`0 -40 ${wWidth} ${NAVIGATION_BOTTOM_TABS_HEIGHT + 80}`}
                    width="100%"
                    height={NAVIGATION_BOTTOM_TABS_HEIGHT + 80}
                >
                    <TabShape fill={colors.brand.secondary} width={WIDTH} />
                </Svg>
            </View>
        </>
    );
}

export default TabsShape;