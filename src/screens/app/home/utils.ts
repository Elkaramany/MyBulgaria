import * as Location from 'expo-location';
import { Alert } from 'react-native';


export const getCurrentLoaction = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
    }

    return await Location.getCurrentPositionAsync({});
}

export const getInitialRegion = () => {
    return {
        latitude: 51.2065,
        longitude: -2.105,
        latitudeDelta: 1.25,
        longitudeDelta: 1.5,
    }
}

export type property = {
    id: string
    title: string
    description: string
    image: string
    coordinate: { latitude: number, longitude: number }
}


export const markers: property[] = [
    {
        id: '1',
        title: 'Golden Gate Bridge',
        description: 'A famous suspension bridge connecting San Francisco Bay and the Pacific Ocean.',
        coordinate: { latitude: 37.8199, longitude: -122.4783 },
        image: 'https://assets.cityexperiences.com/wp-content/uploads/2022/06/Golden-Gate-SF-e1666363626246.jpg',
    },
    {
        id: '2',
        title: 'Statue of Liberty',
        description: 'An iconic symbol of freedom located on Liberty Island in New York Harbor.',
        coordinate: { latitude: 40.6892, longitude: -74.0445 },
        image: 'https://assets.cityexperiences.com/wp-content/uploads/2022/06/Golden-Gate-SF-e1666363626246.jpg',
    },
    {
        id: '3',
        title: 'Eiffel Tower',
        description: 'A wrought-iron lattice tower on the Champ de Mars in Paris, France.',
        coordinate: { latitude: 48.8584, longitude: 2.2945 },
        image: 'https://assets.cityexperiences.com/wp-content/uploads/2022/06/Golden-Gate-SF-e1666363626246.jpg',
    },
    {
        id: '4',
        title: 'Big Ben',
        description: 'The nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster in London.',
        coordinate: { latitude: 51.5007, longitude: -0.1246 },
        image: 'https://assets.cityexperiences.com/wp-content/uploads/2022/06/Golden-Gate-SF-e1666363626246.jpg',
    },
    {
        id: '5',
        title: 'Sydney Opera House',
        description: 'A multi-venue performing arts centre in Sydney, Australia, known for its unique architecture.',
        coordinate: { latitude: -33.8568, longitude: 151.2153 },
        image: 'https://assets.cityexperiences.com/wp-content/uploads/2022/06/Golden-Gate-SF-e1666363626246.jpg',
    },
    {
        id: '6',
        title: 'Bournemouth test marker',
        description: 'Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Sed diam lectus.',
        coordinate: { latitude: 51.206, longitude: -2.105 },
        image: 'https://assets.cityexperiences.com/wp-content/uploads/2022/06/Golden-Gate-SF-e1666363626246.jpg',
    },
];

export const getNameSuggestions = async () => {

}

export const filterByName = () => {

}

export const getAllProperties = async () => {

}