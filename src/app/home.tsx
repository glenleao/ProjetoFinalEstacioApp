import { View, Text, Alert, StyleSheet } from "react-native"

import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { Pets } from "@/components/pets"
import { PetProps } from "@/components/pet"
import { Categories, CategoriesProps } from "@/components/categories"

import { Button } from "@/components/button"
import {router } from "expo-router"

type MabekosProps = PetProps


export default function Home(){
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [category, setCategory] = useState("")
    const [mabekos, setMabekos] = useState<MabekosProps[]>([])
    
    async function fetchCategories() {
        try {
            const { data } = await api.get("/" + category)
            setCategories(data)
            setCategory(data[0].id)
        } catch (error) {
           console.log(error) 
           Alert.alert("Lista", "Não foi possível carregar...")
        }
    }

    async function fetchMabekos() {
        try{
            if(!category){
                return
            }
            const {data} = await api.get("/${id}")
            setMabekos(data)
            // console.log(data)
        } catch (error){
            console.log(error)
            Alert.alert("Pets", "Nao foi possivel carregar")
        }
    }



    useEffect(() => {
        fetchCategories() 
    }, [])

    useEffect(() => {
        fetchMabekos()
    }, [category])


    return (
        <View style={{flex: 1, padding:20, gap:40 }}>
            <Text style={styles.titulo}>Lista de Pets</Text>
            <Categories       
                data={categories} 
                onSelected={setCategory} 
                selected= {category}
            />

            {/* <Pets data={mabekos}/>    */}
        </View>
    )
}

const styles = StyleSheet.create({
    titulo: {fontSize:18, fontWeight:"bold" },
})