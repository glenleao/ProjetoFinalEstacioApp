import { Text, Pressable, PressableProps } from "react-native"

import {s} from "./styles"

type Props = PressableProps & {
    iconId: string
    isSelected?: boolean
    tema: string
}

export function Category({ tema, iconId, isSelected = false, ...rest}: Props){
    return(
        <Pressable style={[s.container]}>
            <Text style={[s.tema]}>{tema}</Text>
        </Pressable>
    )
}
