import { View, Text} from "react-native"
import { IconPaw } from "@tabler/icons-react-native"
import {s} from "./styles"
import {Step} from "../step"

export function Steps(){
    return(
        <View style={s.container}>
            <Text style={s.title}>Veja como funciona:</Text>
            <Step
                icon="{IconPaw}"
                title="1º Passo"
                description="Preencha o formulario com os dados do tutor"
            />
            
            <Step
                title="2º Passo"
                description="Preencha o formulario com os dados do pet"
            />
            <Step
                title="3º Passo"
                description="Escolha as data de hospedagem"
            />

        </View>
    )
}