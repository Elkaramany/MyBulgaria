import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { HighLightIcon, WarningIcon } from '@assets'
import { IOS, WIDTH, colors, globalStyles } from '@config'
import { Text } from '@components'

interface StatProps {
    Icon: React.ReactNode
    score: number
    description: string
}

const StatCard: React.FC<StatProps> = ({ Icon, score, description }) => {
    return (
        <View style={styles.statContainer}>
            {Icon}
            <Text value={score.toString()} mega lightBold color={colors.text.secondary} />
            <Text
                value={description}
                caption
                lightBold
                color={colors.text.lighSecondary}
                style={{ bottom: IOS ? 15 : 12 }}
            />
        </View>
    )
}

const Stats = () => {
    return (
        <View style={{ height: WIDTH * 0.46 }}>
            <ScrollView contentContainerStyle={[globalStyles.rowBetween, { flexGrow: 1 }]} horizontal>
                <StatCard
                    Icon={<HighLightIcon fill={colors.brand.primary} />}
                    score={87}
                    description='Your score so far another text line'
                />
                <StatCard
                    Icon={<WarningIcon fill={colors.brand.primary} />}
                    score={64}
                    description='Lorem ipsum dolor asmet gravid'
                />
            </ScrollView>
        </View>
    )
}

export default Stats

const styles = StyleSheet.create({
    statContainer: {
        backgroundColor: colors.bg.quaternary,
        borderRadius: 10,
        width: WIDTH * 0.46,
        height: WIDTH * 0.46,
        padding: 17,
        marginRight: 5,
    }
})
