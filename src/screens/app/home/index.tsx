import { StyleSheet, View, TouchableOpacity, Keyboard } from 'react-native';
import React from 'react';

import Search from './search';
import Map from './map';
import { Container, Spinner, Text } from '@components';
import { colors, IOS, WIDTH } from '@config';
import { getInitialRegion } from './utils';
import { PropertyType, usePropertiesActions } from '@redux';
import { usePropertiesQuery } from '@request';
import useDebounce from './useDebounce';
import { MainStackNavigationProp } from '@navigationTypes';
import Filters from './filters';

interface Props {
    navigation: MainStackNavigationProp<'Tabs'>;
}

const Home: React.FC<Props> = ({ navigation }) => {
    const [region, setRegion] = React.useState(getInitialRegion());
    const [filtersModal, setFiltersModal] = React.useState(false);
    const {
        properties,
        categories,
        provinces,
        filteredProperties,
        setFilteredProperties,
        getSuggestions,
        filteredCategoryIds,
        setFilteredCategoryIds,
        filteredProvinceIds,
        setFilteredProvinceIds,
        distance,
        setDistance,
        difficulty,
        setDifficulty,
        onFilterPress,
        search,
        setSearch,
        loading,
        error,
    } = usePropertiesQuery();

    // DeBounce Function
    useDebounce(() => {
        onFilterPress();
    }, [search], 800);

    const onSuggestionPress = React.useCallback((property: PropertyType) => {
        setRegion({ ...region, latitude: property.location.x, longitude: property.location.y });
        setSearch(property.name);
        setFilteredProperties([]);
        Keyboard.dismiss();
    }, [region, setRegion, setSearch, setFilteredProperties]);

    const openFiltersModal = React.useCallback(() => {
        setFiltersModal(true);
    }, [setFiltersModal]);

    const closeFiltersModal = React.useCallback(() => {
        setFiltersModal(false);
        onFilterPress();
    }, [setFiltersModal, onFilterPress]);

    return (
        <Container childContainerStyle={{ marginHorizontal: 0 }}>
            <View style={{ width: WIDTH * 0.8, alignSelf: 'center', paddingBottom: IOS ? 27 : 15 }}>
                <Text
                    value='MYBULGARIA'
                    body bold
                    color={colors.text.secondary}
                    style={{ marginBottom: IOS ? 20 : 15 }}
                />
                {!loading && (
                    <Search
                        search={search}
                        onSearch={setSearch}
                        filteredProperties={search.length > 0 ? getSuggestions() : []}
                        onSuggestionPress={onSuggestionPress}
                        onFilterPress={openFiltersModal}
                    />
                )}
            </View>
            {loading ? (
                <Spinner />
            ) : (
                <Map
                    region={region}
                    setRegion={setRegion}
                    properties={properties}
                    navigation={navigation}
                />
            )}
            {filtersModal && (
                <Filters
                    categories={categories}
                    filteredCategories={filteredCategoryIds}
                    setFilteredCategories={setFilteredCategoryIds}
                    filteredProvinces={filteredProvinceIds}
                    setFilteredProvinces={setFilteredProvinceIds}
                    distance={distance}
                    setDistance={setDistance}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    provinces={provinces}
                    visible={filtersModal}
                    setVisible={setFiltersModal}
                    onSearch={closeFiltersModal}
                />
            )}
        </Container>
    );
};

export default Home;
