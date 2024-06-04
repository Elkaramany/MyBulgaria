import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { PropertyType } from '@redux'

export type Region = {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
};


export const getCurrentLoaction = async (setFetchingLocation: (val: boolean) => void, region: Region, setRegion: (val: Region) => void) => {
    setFetchingLocation(true)
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
    }
    let location = await Location.getCurrentPositionAsync({});
    if (location) {
        setRegion({ ...region, latitude: location.coords.latitude, longitude: location.coords.longitude })
    }
    setFetchingLocation(false)
}

export const getInitialRegion = () => {
    return {
        latitude: 51.2065,
        longitude: -2.105,
        latitudeDelta: 1.25,
        longitudeDelta: 1.5,
    }
}

export const getNameSuggestions = async () => {

}

export const filterByName = () => {

}

export const getAllProperties = async () => {

}