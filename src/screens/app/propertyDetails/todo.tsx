import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '@components'
import { HEIGHT, WIDTH, colors, globalStyles } from '@config'
import { CheckMark, HazardMark, HeartIcon } from '@assets'
import { PropertyType } from '@redux'

interface Props {
    property: PropertyType
}

interface TodoItem {
    title: string;
    description: string;
    recommended: boolean;
    level: string;
    price: string;
}

const Todo: React.FC<Props> = ({ property }) => {

    // Dummy data for property.todos
    const dummyTodos: TodoItem[] = [
        {
            title: 'Dummy Todo 1',
            description: 'This is a dummy todo description for item 1.',
            recommended: true,
            level: 'Easy',
            price: '$$',
        },
        {
            title: 'Dummy Todo 2',
            description: 'This is a dummy todo description for item 2.',
            recommended: false,
            level: 'Moderate',
            price: '$$$',
        },
        {
            title: 'Dummy Todo 3',
            description: 'This is a dummy todo description for item 3.',
            recommended: true,
            level: 'Hard',
            price: '$$$$',
        },
    ];

    const renderItem = ({ item, index }: { item: TodoItem, index: number }) => {
        const imageUrl = item.imageUrl ?? 'https://cdn.pixabay.com/photo/2014/04/03/00/38/house-308936_640.png';

        return (
            <View key={index} style={styles.container}>
                <Image
                    style={styles.coverImage}
                    source={{ uri: imageUrl }}
                />
                <TouchableOpacity style={[globalStyles.whiteIconBg, { position: 'absolute', top: 13, right: 12, width: 30, height: 30 }]}>
                    <HeartIcon fill={colors.brand.primary} width={15} height={10} />
                </TouchableOpacity>
                <View style={{ height: 2, width: 'auto', backgroundColor: colors.brand.primary }} />
                <View style={styles.infoContainer}>
                    <Text
                        value={item.title} body lightBold color={colors.text.secondary}
                    />

                    <Text
                        value={item.description} button regular color={colors.text.tertiary}
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CheckMark />
                        <Text
                            value={item.recommended ? 'Recommended' : 'Not Recommended'} button regular color={colors.text.tertiary}
                            style={{ marginLeft: 7 }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <HazardMark fill={'#139CE9'} />
                        <Text
                            value={item.level} button regular color={colors.text.tertiary}
                            style={{ marginLeft: 7 }}
                        />
                    </View>
                    <Text
                        value={item.price} button regular color={colors.text.tertiary}
                    />
                </View>
            </View >
        )
    }

    return (
        <View style={{ marginBottom: 15 }}>
            <Text
                value='Things to do' h4 bold color={colors.text.secondary} style={{ marginVertical: 15 }}
            />
            <FlatList
                horizontal
                data={property.todos ?? dummyTodos} // Use property.todos or fallback to dummyTodos
                renderItem={({ item, index }) => renderItem({ item, index })}
                keyExtractor={(item, index) => `${index}`}
            />
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    coverImage: {
        width: 'auto',
        height: HEIGHT * 0.125,
        resizeMode: 'cover',
        borderTopRightRadius: 13,
        borderTopLeftRadius: 13,
    },
    container: {
        width: WIDTH * 0.55,
        borderRadius: 16,
        marginRight: 10,
        borderWidth: 2,
        borderColor: colors.brand.primary,
    },
    infoContainer: {
        padding: 15,
    }
})
