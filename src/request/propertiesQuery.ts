import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { API } from './index';
import { PropertyType, useAuthActions } from '@redux';

const usePropertiesQuery = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { jwt } = useAuthActions()

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await API('get', '/testpois', null, jwt);
                setProperties(response);
            } catch (error: any) {
                setError(error.data.message[0].messages[0].message);
                Alert.alert(error.data.message[0].messages[0].message);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    return { properties, loading, error };
};

export { usePropertiesQuery };
