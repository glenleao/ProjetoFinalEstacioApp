import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    logo: { 
        width:48,
        height:48,
        marginTop:24,
        marginBottom:28,
    },
    title: { 
        fontFamily:fontFamily.bold,
        fontSize:24,
        color:colors.purple.base
    },
    subtitle: {
        fontFamily:fontFamily.regular,
        fontSize:16,
        color: colors.gray[500],
        marginTop: 12,
    }
})