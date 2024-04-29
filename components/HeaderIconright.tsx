import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { memo } from "react";
import { HeaderParamList } from '../types/types';

// for search and cart symbol
function HeaderIconRight({ margin }: { margin: boolean }){
    const navigation: HeaderParamList = useNavigation();

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

export default memo(HeaderIconRight);

const styles = StyleSheet.create({
    button:{
        gap:15,
        flexDirection:'row'
    }
})