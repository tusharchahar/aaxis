import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function CategoriesIcon({onPress}){
    return (
    <View>
        <Pressable onPress = {onPress}>
            <Ionicons name = 'arrow-back-outline' size = {26} color = 'black'></Ionicons>
        </Pressable>
    </View>
)}

export default CategoriesIcon;