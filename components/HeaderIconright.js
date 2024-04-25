import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// for search and cart symbol
function HeaderIconRight({margin}){
    const navigation = useNavigation();

    function cart(){
        navigation.navigate('fifth');
    }
    return (
    <View style={[styles.button, margin? {marginHorizontal:20} : {}]}>
        <View>
            <Pressable>
                <Ionicons name='search-outline' size={26} color='black'></Ionicons>
            </Pressable>
        </View>
        <View>
            <Pressable onPress={cart}>
                <Ionicons name='cart-outline' size={26} color='black'></Ionicons>
            </Pressable>
        </View>
    </View>
)}

export default HeaderIconRight;

const styles = StyleSheet.create({
    button:{
        gap:15,
        flexDirection:'row'
    }
})