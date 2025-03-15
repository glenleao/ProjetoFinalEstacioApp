import { View, Text, Alert } from "react-native"

import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { Categories, CategoriesProps } from "@/components/categories"

import { Button } from "@/components/button"
import {router } from "expo-router"


export default function Home(){
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [category, setCategory] = useState("")
    async function fetchCategories() {
        try {
            const { data } = await api.get("/")
            setCategories(data)
            setCategory(data[0].id)
        } catch (error) {
           console.log(error) 
           Alert.alert("Lista", "Não foi possível carregar...")
        }
    }

    useEffect(() => {
        fetchCategories() 
    }, [])
    return (
        <View style={{flex: 1, padding:20, gap:40 }}>
            <Text>Lista de Pets</Text>
            <Categories 
                data={categories} 
                onSelected={setCategory} 
                selected= {category}/>

            <Button onPress={() =>router.navigate("/")} >
                <Button.Title>Listar usuários</Button.Title>
            </Button>
        </View>
    )
}