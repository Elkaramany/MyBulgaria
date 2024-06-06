import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Marker } from 'react-native-maps';
import { Text } from '@components'
import { RightArrowIcon, SearchIcon } from '@assets'
import { IOS, colors } from '@config';
import { Region } from './utils';
import { PropertyType } from '@redux';


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
                    value={truncateTitle(marker.name)} body regular style={{ left: 7, top: 2 }}
                />
            </View>
            <RightArrowIcon fill={colors.brand.primary} />
        </Marker>
    );
});

export default MarkerComponent

const styles = StyleSheet.create({
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
