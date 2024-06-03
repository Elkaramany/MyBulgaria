import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Text } from '@components'

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

    const getUserLocation = async () => {
        let location = await getCurrentLoaction()
        if (location) {
            setRegion({ ...region, latitude: location.coords.latitude, longitude: location.coords.longitude })
        }
    }

    const truncateTitle = (title: string) => title.length > 8 ? `${title.substring(0, 8)}...` : title;

    return (
        <>
            <MapView
                style={styles.map}
                initialRegion={getInitialRegion()}
                region={region}
                onRegionChange={setRegion}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                showsMyLocationButton={false}
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
                <LocationIcon
                    fill={colors.ui.error}
                />
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
        paddingHorizontal: IOS ? 12 : 10,
        borderRadius: 4,
        paddingVertical: IOS ? 5 : 3,
        width: 150,
    }
})