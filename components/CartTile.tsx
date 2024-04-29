import { View, Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { memo } from "react";
import { Picker} from '@react-native-picker/picker';
import { CartContext } from '../store/context';
import { useContextSelector } from 'use-context-selector';
import { product } from "../types/types";

function CartTile({itemData}: {itemData: {item: product}}){
    const changeQuantity = useContextSelector(CartContext, v => v.changeQuantity);
    const removeFromCart = useContextSelector(CartContext, v => v.removeFromCart);

    //decrease quantity of product by one in cart
    function removeProduct(product: product){
        removeFromCart(product);
    }
    
    return (
          <View style = {styles.outerContainer}>
           <View style = {styles.gridItem}>
               <View style = {styles.innerContainer}>
                   <Ionicons style = {{ position: 'absolute', right: 16, top:16 }} name = 'star-outline' size=  {20} color = 'black'></Ionicons>
               </View>
           </View>
           <View style = {styles.text}>
               <Text style = {styles.title}>{itemData.item.name}</Text>
               <Text style = {styles.type} numberOfLines = {3}>{itemData.item.long_description}</Text>
               <View style = {styles.borderBottom}><Text style = {styles.price}>${itemData.item.price}</Text></View>
               <View style={{width:100,flexDirection:'row'}}>
                  <Text style={{marginTop:10}}>QUANTITY&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                  <Picker 
                    selectedValue={itemData.item.quantity}
                    style={{ borderWidth:0,backgroundColor:'white',height: 25, width: 100,marginLeft:0,paddingLeft:-10 }} 
                    itemStyle={{height: 35,marginLeft:-10,padding:-10,fontSize:13,backgroundColor:'white'}}
                    onValueChange={(itemValue: number) => changeQuantity(itemData.item,itemValue)} 
                  > 
                    <Picker.Item label="1" value="1"/> 
                    <Picker.Item label="2" value="2" /> 
                    <Picker.Item label="3" value="3" /> 
                    <Picker.Item label="4" value="4" /> 
                    <Picker.Item label="5" value="5" /> 
                    <Picker.Item label="6" value="6" />
                  </Picker>
              </View>
              <Pressable style = {{ position: 'absolute', right: 0, bottom:0 }} onPress={() => {removeProduct(itemData.item)}}><Ionicons  name='trash-outline' size = {20} color = 'black'></Ionicons></Pressable>
           </View>
          </View>)
}

export default memo(CartTile);

const styles = StyleSheet.create({
    outerContainer:{ 
        paddingVertical:16,
        flexDirection:'row',
        position:'relative',
    },
    gridItem:{
        height: 130,
        width:130,
        borderRadius: 8,
        backgroundColor:'#F0F2F5'
    },
    text:{
        marginLeft:16,
        position:'relative',
        flex:1,
        overflow:'visible'
    },
    innerContainer:{
        position:'relative',
        flex:1,
        padding: 16,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        marginTop:5,
    },
    type:{
        marginTop:5,
        lineHeight:20,
    },
    borderBottom:{
        borderBottomColor:'#DFE2E8',
        borderBottomWidth: 1,
    },
    price:{
        marginVertical:10,
        fontWeight: 'bold',
        fontSize: 18,
    },
});