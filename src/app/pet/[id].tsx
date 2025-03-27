import { View, StyleSheet, Text} from "react-native"

import { useLocalSearchParams } from "expo-router"

// ---------------------------------------------


// import { Category } from "../category";

// export type CategoriesProps = {
//     id: string
//     nomePet: string 
// }[]
// type Props = {
//     data: CategoriesProps
//     selected: string
//     onSelected: (id: string) => void
// }

// export function Categories({data, selected, onSelected }: Props) {
//     console.log(data)
//     return (
//         <Text
//             data={data}
//             keyExtractor={(item) => item.id}
//             // renderItem={() => <Category nomePet="Bento"/>}/>
//             renderItem={({item}) => (
//                 <Category 
//                     nomePet={item.nomePet}
//                     // raca={item.raca}
//                     onPress={()=>onSelected(item.id)}
//                     isSelected={item.id === selected}
//                 />
//             )}
//             // horizontal
//             // showsHorizontalScrollIndicator
//         />
//     )
// }



// ---------------------------------------------



export default function Pet() {
   
    const{id}= useLocalSearchParams()
 
    return (
        <View>
            <Text>ID: {id}  </Text>
        </View>
    )
}