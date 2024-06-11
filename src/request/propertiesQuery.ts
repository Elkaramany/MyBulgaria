import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { API } from './index';
import { CategoryType, PropertyType, useAuthActions, ProvinceType } from '@redux';

const usePropertiesQuery = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [filteredCategories, setFilteredCategories] = useState<CategoryType[]>([])
    const [provinces, setProvinces] = useState<ProvinceType[]>([]);
    const [filteredProvinces, setFilteredProvinces] = useState<ProvinceType[]>([])
    const [distance, setDistance] = useState<number>(9999)
    const [difficulty, setDifficulty] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { jwt } = useAuthActions();

    useEffect(() => {
        const fetchProperties = async () => {
            setLoading(true);

            try {
                const [props, cats, provs] = await Promise.all([
                    API('get', '/testpois', null, jwt),
                    API('get', '/categories', null, jwt),
                    API('get', '/provinces', null, jwt)
                ]);

                setProperties(props);
                setCategories(cats);
                setProvinces(provs);
            } catch (error: any) {
                setError(error.data.message[0].messages[0].message);
                Alert.alert(error.data.message[0].messages[0].message);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, [jwt]);

    return {
        properties, categories, provinces,
        filteredCategories, setFilteredCategories,
        filteredProvinces, setFilteredProvinces,
        distance, setDistance,
        difficulty, setDifficulty,
        loading, error
    };
};

export { usePropertiesQuery };
