import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { Spinner } from '@components'
import { LocationIcon } from '@assets'
import { IOS, WIDTH, colors } from '@config';
import { getCurrentLoaction, getInitialRegion, Region } from './utils';
import PropertyInfo from './propertyInfo';
import { PropertyType } from '@redux';
import { MainStackNavigationProp } from '@navigationTypes';
import MarkerComponent from './marker'

interface Props {
    region: Region
    setRegion: (val: Region) => void
    properties: PropertyType[]
    navigation: MainStackNavigationProp<'Tabs'>
}

const Map: React.FC<Props> = ({ region, setRegion, properties, navigation }) => {
    const [selectedProperty, setSelectedProperty] = React.useState<null | PropertyType>(null);
    const [propertyModal, setPropertyModal] = React.useState(false);
    const [fetchingLocation, setFetchingLocation] = React.useState(false);
    const [zoomLevel, setZoomLevel] = React.useState(0);

    const handleRegionChangeComplete = (newRegion: Region) => {
        setRegion(newRegion);
        const newZoomLevel = Math.log2(360 * (WIDTH / 256 / newRegion.longitudeDelta));
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
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: IOS ? 8 : 6,
        borderRadius: 4,
        paddingVertical: IOS ? 6 : 4,
        width: 150,
    }
});
