import { Image, Text, View } from "react-native"
import {s} from "./styles"

export function Welcome() {
    return (
        <View>
            <Image source={require("@/assets/logo.png")} style={s.logo}/>
            <Text style={s.title}>Bem-vindo ao Mabekos!</Text>
            <Text style={s.subtitle}>Agora a hospedagem do seu pet na palma da mão</Text>
        </View>
    )
}