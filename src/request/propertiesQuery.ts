import { Alert } from 'react-native';
import { API } from './index'
import { PropertyType } from '@redux';

async function fetchAllProperties(): Promise<PropertyType[]> {
    try {
        const response = await API('get', '/testpois');
        console.log(response.data, ' el data bta3t el properties')
        return response.data
    }
    catch (error: any) {
        Alert.alert(error.data.message[0].messages[0].message)
        throw error;
    }
}


export { fetchAllProperties }