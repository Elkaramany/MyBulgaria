import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { PropertyType } from '@redux';
//@ts-ignore
import stringSimilarity from 'string-similarity';

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

// Function to get the top 3 closest property names
export const getClosestProperties = (properties: PropertyType[], searchText: string): PropertyType[] => {
    if (!searchText) {
        return [];
    }

    // Calculate similarity scores
    const similarityScores = properties.map(property => ({
        property,
        score: stringSimilarity.compareTwoStrings(property.name, searchText),
    }));

    // Sort properties based on the similarity score in descending order
    similarityScores.sort((a, b) => b.score - a.score);

    // Get the top 3 closest properties
    const top3Properties = similarityScores.slice(0, 3).map(item => item.property);

    return top3Properties;
};

export const getAllProperties = async () => {

}