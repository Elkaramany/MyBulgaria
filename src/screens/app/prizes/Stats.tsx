import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { HighLightIcon, WarningIcon } from '@assets';
import { WIDTH, colors, globalStyles } from '@config';
import { Text } from '@components';

interface StatsProps {
    stat1?: {
        score: number,
        description: string
    },
    stat2?: {
        score: number,
        description: string
    }
}

const StatCard: React.FC<{ Icon: React.ReactNode, score: number, description: string }> = ({ Icon, score, description }) => {
    return (
        <View style={styles.statContainer}>
            {Icon}
            <Text value={score.toString()} mega lightBold color={colors.text.secondary} />
            <Text
                value={description}
                caption
                lightBold
                color={colors.text.lighSecondary}
                style={{ bottom: 12 }} // Adjusted styling
            />
        </View>
    );
}

const Stats: React.FC<StatsProps> = ({ stat1, stat2 }) => {
    // Default icons
    const defaultIcon1 = <HighLightIcon fill={colors.brand.primary} />;
    const defaultIcon2 = <WarningIcon fill={colors.brand.primary} />;

    // Default values
    const defaultStat1 = {
        score: 88,
        description: 'Default Stat 1 Description'
    };

    const defaultStat2 = {
        score: 66,
        description: 'Default Stat 2 Description'
    };

    // Use received stats or default values
    const renderedStat1 = stat1 || defaultStat1;
    const renderedStat2 = stat2 || defaultStat2;

    return (
        <View style={{ height: WIDTH * 0.46 }}>
            <ScrollView contentContainerStyle={[globalStyles.rowBetween, { flexGrow: 1 }]} horizontal>
                <StatCard
                    Icon={renderedStat1.Icon || defaultIcon1}
                    score={renderedStat1.score}
                    description={renderedStat1.description}
                />
                <StatCard
                    Icon={renderedStat2.Icon || defaultIcon2}
                    score={renderedStat2.score}
                    description={renderedStat2.description}
                />
            </ScrollView>
        </View>
    );
}

export default Stats;

const styles = StyleSheet.create({
    statContainer: {
        backgroundColor: colors.bg.quaternary,
        borderRadius: 10,
        width: WIDTH * 0.46,
        height: WIDTH * 0.46,
        padding: 17,
        marginRight: 5,
    }
});
