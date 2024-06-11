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
    onSearch: (cats: number[], provs: number[], dist: number, diff: number[]) => void
    filteredCategories: number[]
    setFilteredCategories: (val: number[]) => void
    filteredProvinces: number[]
    setFilteredProvinces: (val: number[]) => void
    distance: number[]
    setDistance: (val: number[]) => void
    difficulty: number[]
    setDifficulty: (val: number[]) => void
}

const Filters: React.FC<Props> = ({ categories, provinces, visible,
    setVisible, onSearch,
    filteredCategories, filteredProvinces, setFilteredCategories, setFilteredProvinces,
    distance, setDistance, difficulty, setDifficulty,
}) => {

    const sliderOneValuesChange = useCallback((values: number[]) => setDistance(values), []);
    const multiSliderValuesChange = useCallback((values: number[]) => setDifficulty(values), []);

    const closeModal = useCallback(() => setVisible(false), [setVisible]);

    const toggleCategory = useCallback((catId: number) => {
        //@ts-ignore
        setFilteredCategories(prev =>
            prev.includes(catId) ? prev.filter((id: number) => id !== catId) : [...prev, catId]
        );
    }, []);

    const toggleProvince = useCallback((provId: number) => {
        //@ts-ignore
        setFilteredProvinces(prev =>
            prev.includes(provId) ? prev.filter((id: number) => id !== provId) : [...prev, provId]
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
            <TouchableOpacity onPress={closeModal} style={{ height: HEIGHT * 0.17, }} />
            <ScrollView style={styles.modalContent} contentContainerStyle={styles.modalContainer}>
                {filterTitle(`Distance to POI: ${distance[0]} KM`)}
                <View style={styles.sliderWrapper}>
                    <MultiSlider
                        values={distance}
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

                {filterTitle(`Difficulty Level: ${difficulty[0]}-${difficulty[1]}`)}
                <View style={styles.sliderWrapper}>
                    <MultiSlider
                        values={difficulty}
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
                            setDistance([9999]);
                            setDifficulty([1, 10]);
                        }}
                        buttonStyle={styles.resetButton}
                        textStyle={styles.resetButtonText}
                    />

                    <Button
                        value='Apply filters'
                        onPress={() => onSearch(filteredCategories, filteredProvinces, difficulty[0], difficulty)}
                        buttonStyle={styles.applyButton}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={closeModal} style={{ height: HEIGHT * 0.17, }} />
        </Modal>
    );
};

export default Filters;

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'rgba(0,0,0,0.6)',
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
        marginVertical: 10,
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
});
