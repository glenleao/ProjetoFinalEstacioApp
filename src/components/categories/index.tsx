import { FlatList } from "react-native";
import { Category } from "../category";

export type CategoriesProps = {
    id: string
    tema: string 
}[]
type Props = {
    data: CategoriesProps
}

export function Categories({data}: Props) {
    console.log(data)
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            // renderItem={() => <Category tema="Bento"/>}/>
            renderItem={({item}) => <Category tema={item.tema}/>}
            horizontal
            showsHorizontalScrollIndicator
            />
        )
}