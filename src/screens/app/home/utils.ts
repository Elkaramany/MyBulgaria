import * as Location from 'expo-location';
import { Alert } from 'react-native';
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
        setFetchingLocation(false)
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
        latitude: 42.7339,
        longitude: 25.4858,
        latitudeDelta: 1.25,
        longitudeDelta: 1.5,
    }
}