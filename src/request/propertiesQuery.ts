import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { API } from './index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CategoryType, PropertyType, useAuthActions, ProvinceType } from '@redux';

const ASYNC_STORAGE_KEYS = {
    PROPERTIES: 'PROPERTIES',
    CATEGORIES: 'CATEGORIES',
    PROVINCES: 'PROVINCES',
};

const usePropertiesQuery = () => {
    const [search, setSearch] = useState<string>('');
    const [properties, setProperties] = useState<PropertyType[]>([]);
    const [filteredProperties, setFilteredProperties] = useState<PropertyType[]>([]);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [provinces, setProvinces] = useState<ProvinceType[]>([]);
    const [filteredCategoryIds, setFilteredCategoryIds] = useState<number[]>([]);
    const [filteredProvinceIds, setFilteredProvinceIds] = useState<number[]>([]);
    const [distance, setDistance] = useState<number[]>([9999]);
    const [difficulty, setDifficulty] = useState<number[]>([1, 10]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { jwt } = useAuthActions();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                // Check AsyncStorage first
                const storedProperties = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.PROPERTIES);
                const storedCategories = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.CATEGORIES);
                const storedProvinces = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.PROVINCES);

                if (storedProperties && storedCategories && storedProvinces) {
                    setProperties(JSON.parse(storedProperties));
                    setCategories(JSON.parse(storedCategories));
                    setProvinces(JSON.parse(storedProvinces));
                } else {
                    // If not in AsyncStorage, fetch from API
                    const [props, cats, provs] = await Promise.all([
                        API('get', '/testpois', null, jwt),
                        API('get', '/categories', null, jwt),
                        API('get', '/provinces', null, jwt)
                    ]);

                    setProperties(props);
                    setCategories(cats);
                    setProvinces(provs);

                    // Store in AsyncStorage
                    await AsyncStorage.multiSet([
                        [ASYNC_STORAGE_KEYS.PROPERTIES, JSON.stringify(props)],
                        [ASYNC_STORAGE_KEYS.CATEGORIES, JSON.stringify(cats)],
                        [ASYNC_STORAGE_KEYS.PROVINCES, JSON.stringify(provs)]
                    ]);
                }
            } catch (error: any) {
                setError(error.data?.message[0]?.messages[0]?.message || 'Error fetching data');
                Alert.alert('Error', error.data?.message[0]?.messages[0]?.message || 'Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [jwt]);

    const onFilterPress = () => {
        setLoading(true)
        const filtered = properties.filter((property) => {
            const isCategoryMatch = filteredCategoryIds.length === 0 || property.categories.some(category => filteredCategoryIds.includes(category.id));
            const isProvinceMatch = filteredProvinceIds.length === 0 || filteredProvinceIds.includes(property.province.id);
            //const isDistanceMatch = distance[0] === 9999 || (property.location.z !== null && property.location.z <= distance[0]);
            const isDifficultyMatch = property.difficulty >= difficulty[0] && property.difficulty <= difficulty[1];
            const isNameMatch = property.name.toLowerCase().includes(search.toLowerCase());

            return isCategoryMatch && isProvinceMatch /*&& isDistanceMatch*/ && isDifficultyMatch && isNameMatch;
        });

        setFilteredProperties(filtered);
        setLoading(false)
    };

    const getSuggestions = () => properties.filter((property) => {
        return property.name.toLowerCase().includes(search.toLowerCase());
    });

    return {
        properties,
        filteredProperties,
        setFilteredProperties,
        categories,
        provinces,
        search,
        setSearch,
        filteredCategoryIds,
        setFilteredCategoryIds,
        filteredProvinceIds,
        setFilteredProvinceIds,
        distance,
        setDistance,
        difficulty,
        setDifficulty,
        loading,
        error,
        onFilterPress,
        getSuggestions,
    };
};

export { usePropertiesQuery };
