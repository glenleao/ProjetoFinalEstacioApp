import { View, Text, StyleSheet, TouchableOpacity} from "react-native"

import { api } from "@/services/api"
import { useEffect, useState } from "react"
import { Categories, CategoriesProps } from "@/components/categories"

import { Button } from "@/components/button"
import {router } from "expo-router"

export default function Detalhe(){

    function back(){
        router.back()
    }

    return (
        <View>
            <Text>Detalhes</Text>
            <TouchableOpacity onPress={back}>              
            <Text style={styles.back}>Voltar</Text>
            </TouchableOpacity>

        </View>
    )
};

const styles= StyleSheet.create({
    back: {fontSize:18,}
})