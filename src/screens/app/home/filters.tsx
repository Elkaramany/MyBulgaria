import { StyleSheet, View, Modal, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useCallback } from 'react';
import { Button, Text } from '@components';
import { CategoryType, ProvinceType } from '@redux';
import { HEIGHT, WIDTH, colors, globalStyles } from 'config';
import Checkbox from 'expo-checkbox';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

interface Props {
    categories: CategoryType[];
    provinces: ProvinceType[];
    visible: boolean;
    setVisible: (val: boolean) => void;
}

const Filters: React.FC<Props> = ({ categories, provinces, visible, setVisible }) => {
    const [filteredCategories, setFilteredCategories] = useState<number[]>([]);
    const [filteredProvinces, setFilteredProvinces] = useState<number[]>([]);
    const [distanceSlider, setDistanceSlider] = useState([9999]);
    const [difficultySlider, setDifficultySlider] = useState([1, 10]);

    const sliderOneValuesChange = useCallback((values: number[]) => setDistanceSlider(values), []);
    const multiSliderValuesChange = useCallback((values: number[]) => setDifficultySlider(values), []);

    const closeModal = useCallback(() => setVisible(false), [setVisible]);

    const toggleCategory = useCallback((catId: number) => {
        setFilteredCategories(prev =>
            prev.includes(catId) ? prev.filter(id => id !== catId) : [...prev, catId]
        );
    }, []);

    const toggleProvince = useCallback((provId: number) => {
        setFilteredProvinces(prev =>
            prev.includes(provId) ? prev.filter(id => id !== provId) : [...prev, provId]
        );
    }, []);

    const filterTitle = useCallback((name: string) => (
        <Text value={name} title lightBold color={colors.text.primary} style={styles.filterTitle} />
    ), []);

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={closeModal}
        >
            <ScrollView style={styles.modalContent} contentContainerStyle={styles.modalContainer}>
                {filterTitle(`Distance to POI: ${distanceSlider[0]} KM`)}
                <View style={styles.sliderWrapper}>
                    <MultiSlider
                        values={distanceSlider}
                        sliderLength={WIDTH * 0.8}
                        onValuesChange={sliderOneValuesChange}
                        min={1} max={9999}
                        step={Math.round(Math.abs(9999 - 1) / 100)}
                        selectedStyle={styles.sliderSelected}
                        unselectedStyle={styles.sliderUnselected}
                        markerStyle={styles.sliderMarker}
                    />
                </View>
                {filterTitle('Categories:')}
                <ScrollView contentContainerStyle={styles.checkboxContainer}>
                    {categories.map((cat: CategoryType) => (
                        <TouchableOpacity onPress={() => toggleCategory(cat.id)} key={cat.id} style={styles.checkboxRow}>
                            <Checkbox
                                style={styles.checkbox}
                                value={filteredCategories.includes(cat.id)}
                                color={colors.brand.primary}
                            />
                            <Text value={cat.name} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {filterTitle('Provinces:')}
                <ScrollView contentContainerStyle={styles.checkboxContainer}>
                    {provinces.map((prov: ProvinceType) => (
                        <TouchableOpacity onPress={() => toggleProvince(prov.id)} key={prov.id} style={styles.checkboxRow}>
                            <Checkbox
                                style={styles.checkbox}
                                value={filteredProvinces.includes(prov.id)}
                                color={colors.brand.primary}
                            />
                            <Text value={prov.Name} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {filterTitle(`Difficulty Level: ${difficultySlider[0]}-${difficultySlider[1]}`)}
                <View style={styles.sliderWrapper}>
                    <MultiSlider
                        values={difficultySlider}
                        sliderLength={WIDTH * 0.8}
                        onValuesChange={multiSliderValuesChange}
                        min={1} max={10}
                        step={1} snapped
                        selectedStyle={styles.sliderSelected}
                        unselectedStyle={styles.sliderUnselected}
                        markerStyle={styles.sliderMarker}
                    />
                </View>

                <View style={[globalStyles.rowBetween, styles.buttonContainer]}>
                    <Button
                        value='Reset filters'
                        onPress={() => {
                            setFilteredCategories([]);
                            setFilteredProvinces([]);
                            setDistanceSlider([9999]);
                            setDifficultySlider([1, 10]);
                        }}
                        buttonStyle={styles.resetButton}
                        textStyle={styles.resetButtonText}
                    />

                    <Button
                        value='Apply filters'
                        onPress={() => { }}
                        buttonStyle={styles.applyButton}
                    />
                </View>
                <View style={styles.bottomSpacer} />
            </ScrollView>
        </Modal>
    );
};

export default Filters;

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        marginVertical: HEIGHT * 0.2,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: WIDTH,
        alignSelf: 'center',
        borderRadius: 30,
        paddingHorizontal: '3%',
    },
    modalContainer: {
        flexGrow: 1,
    },
    filterTitle: {
        marginTop: 15,
    },
    sliderWrapper: {
        alignSelf: 'center',
    },
    sliderSelected: {
        backgroundColor: colors.ui.primary,
    },
    sliderUnselected: {
        backgroundColor: colors.bg.primary,
    },
    sliderMarker: {
        backgroundColor: colors.ui.primary,
    },
    checkboxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
        marginBottom: 8,
    },
    checkbox: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        marginTop: 10,
    },
    resetButton: {
        width: '45%',
        backgroundColor: colors.bg.primary,
    },
    resetButtonText: {
        color: colors.text.secondary,
    },
    applyButton: {
        width: '45%',
        right: '25%',
    },
    bottomSpacer: {
        height: 10,
    },
});
