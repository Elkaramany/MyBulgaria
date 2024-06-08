import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { PropertyType } from "@redux";

// Stack Navigator Types
export type MainStackParamList = {
    Tabs: undefined;
    PropertyDetails: { property: PropertyType };
    Leaderboard: undefined
};

export type MainStackNavigationProp<T extends keyof MainStackParamList> = StackNavigationProp<
    MainStackParamList,
    T
>;

export type MainStackRouteProp<T extends keyof MainStackParamList> = RouteProp<
    MainStackParamList,
    T
>;

// Tabs Navigator Types
export type BottomTabParamList = {
    Home: undefined;
    Favorites: undefined;
    Wave: undefined;
    Prizes: undefined;
    Profile: undefined;
};

export type BottomTabNavigationProp<T extends keyof BottomTabParamList> = BottomTabNavigationProp<
    BottomTabParamList,
    T
>;

// PropertyDetails Screen Types
export type PropertyDetailsRouteProp = MainStackRouteProp<"PropertyDetails">;
