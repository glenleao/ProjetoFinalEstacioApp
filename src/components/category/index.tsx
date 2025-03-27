import { Text, Pressable, PressableProps } from "react-native"
import { router } from "expo-router"
import {s} from "./styles"

type Props = PressableProps & {
    id: string
    iconId: string
    isSelected?: boolean
    nomePet: string
    raca: string
    nomeTutor: string
}

export function Category({ id, nomePet, iconId, raca, nomeTutor, isSelected = false, ...rest}: Props){
    function det(){
        router.navigate("/pet/${id}")
    }
    return(
        <Pressable 
            style={[s.container, isSelected && s.containerSelected]}{...rest} onPress={det}
            >
            <Text style={[s.name, isSelected && s.nameSelected]}>{nomePet}</Text>
            <Text style={[s.name, isSelected && s.nameSelected]}>{raca}</Text>
        </Pressable>

    )
}
