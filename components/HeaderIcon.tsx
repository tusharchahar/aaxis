import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { memo } from "react";

//for back arrow symbol in header
function HeaderIcon({onPress}: {onPress: () => {}}){
    return (
    <View style = {styles.button}>
        <Pressable onPress = {onPress}>
            <Ionicons name = 'menu-outline' size = {30} color = 'black'></Ionicons>
        </Pressable>
    </View>
)}

export default memo(HeaderIcon);

const styles = StyleSheet.create({
    button:{
        marginLeft:20
    }
})