import { StyleSheet, View, Modal, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Text } from '@components'
import { PropertyType } from '@redux'
import { IOS, WIDTH, colors, globalStyles } from 'config'
import { HeartIcon } from '@assets'

interface Props {
    property: PropertyType
    visible: boolean
    setVisible: (val: boolean) => void
    onViewDetails: () => void
}

const PropertyInfo: React.FC<Props> = ({ property, visible, setVisible, onViewDetails }) => {

    const truncatingLength = IOS ? 125 : 115

    const truncateDescriptiopn = (title: string) => title.length > truncatingLength ? `${title.substring(0, truncatingLength)}...` : title;


    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => setVisible(false)}
        >
            <TouchableOpacity style={styles.topArea} onPress={() => setVisible(false)} />
            <View style={styles.modalContent}>
                <Image
                    src={`${process.env.EXPO_PUBLIC_API_BASE}${property.Avatar.formats.small.url}`}
                    style={styles.propertyImage}
                />
                <View style={styles.propertyInfoContainer}>
                    <Text value={property.name} color={colors.text.property} body medium />
                    <Text
                        value={truncateDescriptiopn(property.description)}
                        small regular color='#00000080'
                    />

                    <TouchableOpacity onPress={() => {
                        setVisible(false)
                        onViewDetails()
                    }} >
                        <Text
                            value='View Info'
                            caption body color={colors.text.property}
                            style={{ textDecorationLine: 'underline' }}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => { }}>
                    <HeartIcon fill={'#434343'} style={{ right: 5, bottom: 25 }} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.topArea, { flex: 3 }]} onPress={() => setVisible(false)} />
        </Modal>
    )
}

export default PropertyInfo

const styles = StyleSheet.create({
    topArea: {
        flex: 5,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        flex: 2,
        backgroundColor: 'white',
        width: WIDTH * 0.8,
        alignSelf: 'center',
        borderRadius: 30,
        ...globalStyles.rowBetween
    }, propertyImage: {
        width: '45%',
        height: '100%',
        resizeMode: 'cover',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    }, propertyInfoContainer: {
        width: '40%',
    }
})