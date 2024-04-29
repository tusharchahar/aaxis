import { Text,Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CategoryParamList } from '../types/types';

export type NavigateParamList = {
    navigate: (screen:string,{titleOfNext}:{titleOfNext:string})=>void
};

function CategoryNavigate({value}:{value: string}){
    const navigation: CategoryParamList = useNavigation();

    //navigate to second native-stack screen
    function navigaate(title: string){
        navigation.navigate('second',{
            titleOfNext:title
        });
    }

    return (
    <View style = {styles.gridItem}>
        <Pressable style = {styles.button} onPress = {() => {navigaate(value)}}>
            <View style = {styles.innerContainer}>
                <Text style = {styles.title2}>{value}</Text>
            </View>
            <View style = {styles.box2}></View>
        </Pressable>
    </View>
    )
}

export default CategoryNavigate;

const styles = StyleSheet.create({
    button:{
        gap:15,
        flexDirection:'row'
    },
    gridItem:{
        borderRadius: 10,
        justifyContent:'space-between',
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 3},
        shadowRadius: 6,
        shadowOpacity: 0.1,
        backgroundColor:'white',
        overflow:'visible'
    },
    innerContainer:{
        flex:4,
        paddingLeft: 15,
        paddingVertical: 22,
        justifyContent: 'center',
        overflow:'visible'
    },
    box2:{
        flex:1,
        backgroundColor:'#858999',
        borderBottomRightRadius: 10,
        borderTopRightRadius:10,
    },
    title2:{
        fontSize: 18,
        color:'black'
    },
})