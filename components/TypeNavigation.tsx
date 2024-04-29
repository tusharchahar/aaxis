import { Text,Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TypeParamList } from '../types/types';

function TypeNavigate({value} : {value : string}){
    const navigation: TypeParamList = useNavigation();

    //navigate to third native-stack screen
    function navigationn(type:string){
      navigation.navigate('third',{
        typeOfProduct: type
      });
    }

    return (
        <Pressable onPress = {() => {navigationn(value)}}>
        <View style = {styles.button}>
          <View><Text style = {styles.text}>{value}</Text></View>
          <View><Ionicons name = 'chevron-forward-outline' size = {22} color = 'black'></Ionicons></View>
        </View>
      </Pressable>
)}

export default TypeNavigate;

const styles = StyleSheet.create({
    button:{
        width:'100%',
        padding:20,
        backgroundColor:'#F8F9FA',
        borderRadius: 8,
        flexDirection:'row',
        justifyContent:'space-between'
    },
      text:{
        fontSize:18,
    }
})