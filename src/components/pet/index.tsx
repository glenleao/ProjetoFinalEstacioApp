import { Text, TouchableOpacity, TouchableOpacityProps, View} from "react-native";
import { s } from "./styles";

export type PetProps = {
    id: string
    nomePet: string
    nomeTutor: string
    raca: string
    celular: string
    dataSaida: string
}

type Props = TouchableOpacityProps & {
    data: PetProps
}

export function Pet({ data, ...rest}: Props){

    return(
        <TouchableOpacity style={s.container} {...rest}>

            <View style={s.content}>
                <Text style={s.name}>{data.nomePet}</Text>
                <Text style={s.name}>{data.raca }</Text>
                <Text style={s.name}>{data.nomeTutor }</Text>
                <Text style={s.name}>{data.celular }</Text>
                <Text style={s.name}>{data.dataSaida }</Text> 
            </View>
        </TouchableOpacity>
    )
}