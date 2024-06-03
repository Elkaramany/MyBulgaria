import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { Spinner, Text } from '@components'

import { LocationIcon, RightArrowIcon, SearchIcon } from '@assets'
import { IOS, colors, globalStyles } from '@config';
import { getCurrentLoaction, getInitialRegion, markers, property } from './utils';
import PropertyInfo from './propertyInfo';

type Region = {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
};


interface Props {
    region: Region
    setRegion: (val: Region) => void
}

const Map: React.FC<Props> = ({ region, setRegion }) => {
    const [selectedProperty, setSelectedProperty] = React.useState<null | property>(null)
    const [propretyModal, setpropretyModal] = React.useState(false)
    const [fetchingLoaction, setFetchingLocation] = React.useState(false)

    const getUserLocation = async () => {
        setFetchingLocation(true)
        let location = await getCurrentLoaction()
        if (location) {
            setRegion({ ...region, latitude: location.coords.latitude, longitude: location.coords.longitude })
        }
        setFetchingLocation(false)
    }

    const truncatingLength = IOS ? 10 : 8

    const truncateTitle = (title: string) => title.length > truncatingLength ? `${title.substring(0, truncatingLength)}...` : title;

    return (
        <>
            <MapView
                style={styles.map}
                initialRegion={getInitialRegion()}
                region={region}
                onRegionChange={setRegion}
                showsUserLocation
                showsMyLocationButton={false}
                provider={IOS ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
            >
                {markers.map((marker, index) => {
                    return (
                        <Marker
                            //@ts-ignore
                            key={index}
                            coordinate={{
                                ...region,
                                latitude: marker.coordinate.latitude,
                                longitude: marker.coordinate.longitude,
                            }}
                            onPress={() => {
                                setpropretyModal(true)
                                setSelectedProperty(marker)
                            }}
                            style={{ height: 45, width: 300, flexDirection: 'row', alignItems: 'center' }}
                        >
                            <View style={styles.markerContainer}>
                                <SearchIcon fill={colors.bg.primary} width={16} height={16} />
                                <Text
                                    value={truncateTitle(marker.title)} body regular
                                />
                            </View>
                            <RightArrowIcon fill={colors.brand.primary} />
                        </Marker>
                    )
                })}
            </MapView>
            <TouchableOpacity
                onPress={getUserLocation}
                style={styles.locationPin}>
                {fetchingLoaction ?
                    <Spinner />
                    :
                    <LocationIcon
                        fill={colors.ui.error}
                    />
                }
            </TouchableOpacity>
            {propretyModal && selectedProperty &&
                <PropertyInfo visible={propretyModal} setVisible={setpropretyModal} property={selectedProperty} />
            }
        </>
    )
}

export default Map

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    }, locationPin: {
        position: 'absolute',
        bottom: 25,
        right: 25,
        backgroundColor: colors.bg.primary,
        padding: 15,
        borderRadius: 30
    }, markerContainer: {
        backgroundColor: colors.brand.primary,
        ...globalStyles.rowBetween,
        paddingHorizontal: IOS ? 8 : 6,
        borderRadius: 4,
        paddingVertical: IOS ? 6 : 4,
        width: 150,
    }
})