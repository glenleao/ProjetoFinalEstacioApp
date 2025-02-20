import { Text, View } from "react-native"
import { IconPaw } from "@tabler/icons-react-native"
import { colors } from "@/styles/theme"
import { s } from "./styles"

type Props = {
    title: string
    description: string
    // icon: React.ComponentType<IconProps>
}

export function Step({title, description}: Props) {
    return (
        <View style={s.container}>
            <IconPaw size={32} color={colors.purple.base}/>
            <View style={s.details}>
            <Text style={s.title}>{title}</Text>
            <Text style={s.description}>{description}</Text>
            </View>
        </View>
    )
}