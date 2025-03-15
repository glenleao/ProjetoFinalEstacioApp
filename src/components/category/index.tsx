import { Text, Pressable, PressableProps } from "react-native"

import {s} from "./styles"

type Props = PressableProps & {
    iconId: string
    isSelected?: boolean
    nomePet: string
}

export function Category({ nomePet, iconId, isSelected = false, ...rest}: Props){
    return(
        <Pressable 
            style={[s.container, isSelected && s.containerSelected]}{...rest}>
            <Text style={[s.nomePet, isSelected && s.nameSelected]}>{nomePet}</Text>
        </Pressable>
    )
}
