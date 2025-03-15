import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
    container: {
        height: 45,//36
        backgroundColor: colors.gray[100],
        borderWidth:1,
        borderColor:colors.gray[300],
        borderRadius:8,
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal:12,
        paddingVertical:6,
        gap:20,//10
        margin:4,
    },
    name:{
        fontSize: 14,
        marginTop:5,
        color: colors.gray[500],
        fontFamily:fontFamily.regular,
    },
    containerSelected: {
        backgroundColor: colors.purple.base,
        borderWidth: 0,
    },
    nameSelected: {
        color: colors.gray[100],
    },
})
