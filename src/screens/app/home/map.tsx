import React from 'react'
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native'
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { Spinner, Text } from '@components'
import { LocationIcon, RightArrowIcon, SearchIcon } from '@assets'
import { IOS, colors, globalStyles } from '@config';
import { getCurrentLoaction, getInitialRegion, Region } from './utils';
import PropertyInfo from './propertyInfo';
import { PropertyType } from '@redux';
import { BottomTabNavigationProp, MainStackNavigationProp } from '@navigationTypes';

interface Props {
    region: Region
    setRegion: (val: Region) => void
    properties: PropertyType[]
    navigation: MainStackNavigationProp<'Tabs'>
}

const MarkerComponent: React.FC<{ marker: PropertyType, onPress: () => void, region: Region }> = React.memo(({ marker, onPress, region }) => {
    const truncatingLength = IOS ? 10 : 8;
    const truncateTitle = (title: string) => title.length > truncatingLength ? `${title.substring(0, truncatingLength)}...` : title;

    return (
        <Marker
            coordinate={{
                ...region,
                latitude: marker.location.x,
                longitude: marker.location.y,
            }}
            onPress={onPress}
            style={{ height: 45, width: 300, flexDirection: 'row', alignItems: 'center' }}
        >
            <View style={styles.markerContainer}>
                <SearchIcon fill={colors.bg.primary} width={16} height={16} />
                <Text
                    value={truncateTitle(marker.name)} body regular
                />
            </View>
            <RightArrowIcon fill={colors.brand.primary} />
        </Marker>
    );
});

const Map: React.FC<Props> = ({ region, setRegion, properties, navigation }) => {
    const [selectedProperty, setSelectedProperty] = React.useState<null | PropertyType>(null);
    const [propertyModal, setPropertyModal] = React.useState(false);
    const [fetchingLocation, setFetchingLocation] = React.useState(false);
    const [zoomLevel, setZoomLevel] = React.useState(0);

    const handleRegionChangeComplete = (newRegion: Region) => {
        setRegion(newRegion);
        const { width } = Dimensions.get('window');
        const newZoomLevel = Math.log2(360 * (width / 256 / newRegion.longitudeDelta));
        setZoomLevel(newZoomLevel);
    };

    const handleMarkerPress = React.useCallback((marker: PropertyType) => {
        setPropertyModal(true);
        setSelectedProperty(marker);
    }, []);

    const renderMarkers = () => {
        return properties.map((marker, index) => {
            if (zoomLevel > 8) {
                return (
                    <MarkerComponent
                        key={index}
                        marker={marker}
                        onPress={() => handleMarkerPress(marker)}
                        region={region}
                    />
                );
            } else {
                return (
                    <Marker
                        key={index}
                        coordinate={{
                            ...region,
                            latitude: marker.location.x,
                            longitude: marker.location.y,
                        }}
                    />
                );
            }
        });
    };

    return (
        <>
            <MapView
                style={styles.map}
                initialRegion={getInitialRegion()}
                region={region}
                onRegionChangeComplete={handleRegionChangeComplete}
                showsUserLocation
                showsMyLocationButton={false}
                provider={IOS ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
            >
                {renderMarkers()}
            </MapView>
            <TouchableOpacity
                onPress={() => getCurrentLoaction(setFetchingLocation, region, setRegion)}
                style={styles.locationPin}
            >
                {fetchingLocation ?
                    <Spinner /> :
                    <LocationIcon fill={colors.ui.error} />
                }
            </TouchableOpacity>
            {propertyModal && selectedProperty &&
                <PropertyInfo
                    visible={propertyModal}
                    setVisible={setPropertyModal}
                    property={selectedProperty}
                    onViewDetails={() => navigation.navigate('PropertyDetails', { property: selectedProperty })}
                />
            }
        </>
    );
}

export default React.memo(Map);

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
    locationPin: {
        position: 'absolute',
        bottom: 25,
        right: 25,
        backgroundColor: colors.bg.primary,
        padding: 15,
        borderRadius: 30
    },
    markerContainer: {
        backgroundColor: colors.brand.primary,
        ...globalStyles.rowBetween,
        paddingHorizontal: IOS ? 8 : 6,
        borderRadius: 4,
        paddingVertical: IOS ? 6 : 4,
        width: 150,
    }
});
