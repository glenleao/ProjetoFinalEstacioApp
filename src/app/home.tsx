import { View, Text, Alert } from "react-native"

import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { Categories, CategoriesProps } from "@/components/categories"

import { Button } from "@/components/button"
import {router } from "expo-router"


export default function Home(){
    const [categories, setCategories] = useState<CategoriesProps>([])

    async function fetchCategories() {
        try {
            const { data } = await api.get("/tema")
            setCategories(data)
        } catch (error) {
           console.log(error) 
           Alert.alert("Tema", "Não foi possível carregar...")
        }
    }

    useEffect(() => {
        fetchCategories() 
    }, [])
    return (
        <View style={{flex: 1 }}>
            <Text>Glen6</Text>
            <Categories data={categories}/>

            <Button onPress={() =>router.navigate("/")} >
                <Button.Title>Listar usuários</Button.Title>
            </Button>
        </View>
    )
}