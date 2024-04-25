import { View, Pressable, Text, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function GridTile({title, type, id, price, clothType}){
    const navigation = useNavigation();

    function clickbait(){
      navigation.navigate('fourth',{
        typeOfProduct: type,
        productId: id,
        name:title
      });
    }
    
    return (
        <View style={styles.outerContainer}>
            <Pressable style={styles.button} onPress={clickbait}>
            <View style={styles.gridItem}>
                <View style={styles.innerContainer}>
                    <Ionicons style={{ position: 'absolute', right: 16, top:16 }} name='heart-outline' size={20} color='black'></Ionicons>
                </View>
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.type}>{clothType}</Text>
                <Text style={styles.price}>${price}</Text>
            </View>
            </Pressable>
        </View>)
}

export default GridTile;

const styles = StyleSheet.create({
    outerContainer:{
        flex:1,
        marginHorizontal:16,
        marginTop:16,
        maxWidth:Dimensions.get('screen').width/2 - 32
    },
    gridItem:{
        height: 150,
        borderRadius: 8,
        backgroundColor:'#F0F2F5'
    },
    text:{
        marginHorizontal:16,
        flex:1
    },
    button:{
        flex:1
    },
    innerContainer:{
        position:'relative',
        flex:1,
        padding: 16,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 16,
        marginTop:15,
    },
    type:{
        marginTop:5,
    },
    price:{
        marginVertical:10,
        fontWeight: 'bold',
        fontSize: 16,
    }
});