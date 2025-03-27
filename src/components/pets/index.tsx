import { Text, useWindowDimensions } from "react-native";
import BottomSheet, { BottomSheetFlatList} from "@gorhom/bottom-sheet"

import { Pet, PetProps} from "../pet"
import { useRef } from "react";


type Props = {
    data: PetProps[]
}

export function Pets({ data }: Props){
    const dimensions = useWindowDimensions()
    const BottomSheetRef = useRef<BottomSheet>(null)
    
    return <BottomSheet>
        <BottomSheetFlatList
            data={data}
            keyExtractor={(item) = item.id}

            renderItem={({item}) => <Pet data={item}/>}

            
        />

    </BottomSheet>
}