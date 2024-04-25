import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../store/context';
import { useContextSelector } from 'use-context-selector';

function CartScreen(){
  const cartItems = useContextSelector(CartContext, v => v.cartItems);
  const getCartTotal = useContextSelector(CartContext, v => v.getCartTotal);
  const removeFromCart = useContextSelector(CartContext, v => v.removeFromCart);

  //decrease quantity of product by one in cart
  function removeProduct(product){
    removeFromCart(product);
  }

  return (
    <ScrollView showsVerticalScrollIndicator = {false} bounces={false}>
     <View style = {styles.root}>
      
      {cartItems.length === 0 && <Text style = {{textAlign:'center'}}>Cart is Empty</Text>}
      {cartItems.map((product) => {
        return (<View key = {product.id} style={styles.outerContainer}>
          <View style = {styles.gridItem}>
              <View style = {styles.innerContainer}>
                  <Ionicons style = {{ position: 'absolute', right: 16, top:16 }} name = 'star-outline' size=  {20} color = 'black'></Ionicons>
              </View>
          </View>
          <View style = {styles.text}>
              <Text style = {styles.title}>{product.name}</Text>
              <Text style = {styles.type} numberOfLines = {3}>{product.long_description}</Text>
              <View style = {styles.borderBottom}><Text style = {styles.price}>${product.price}</Text></View>
              <Text>QUANTITY&nbsp;&nbsp;&nbsp;&nbsp;<Text style = {styles.bold}>{product.quantity}</Text></Text>
              <Pressable style = {{ position: 'absolute', right: 0, bottom:0 }} onPress={() => {removeProduct(product)}}><Ionicons  name='trash-outline' size = {20} color = 'black'></Ionicons></Pressable>
          </View>
         </View>)
      })}
      <View style = {styles.fee}>
        <View style = {styles.subTotal}>
          <View>
            <Text>Subtotal</Text>
          </View>
          <View>
            <Text>${getCartTotal().toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.subTotal}>
          <View>
            <Text>Delivery</Text>
          </View>
          <View>
            <Text>Free</Text>
          </View>
        </View>
        <View style = {styles.subTotal}>
          <View>
            <Text style = {styles.bold}>Estimated Total</Text>
          </View>
          <View>
            <Text style = {styles.bold}>${getCartTotal().toFixed(2)}</Text>
          </View>
        </View>
      </View>
     </View>
    </ScrollView>
    );
}

export default CartScreen;

const styles = StyleSheet.create({
  root: {
      marginHorizontal:20,
      backgroundColor: 'white',
      height:'100%',
      gap:10,
  },
  outerContainer:{ 
      paddingVertical:16,
      flexDirection:'row',
  },
  fee:{
    borderTopColor:'#DFE2E8',
    borderTopWidth:1,
    paddingTop:8,
    paddingBottom:50
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
      marginBottom:10
  },
  price:{
      marginVertical:10,
      fontWeight: 'bold',
      fontSize: 18,
  },
  bold:{
    fontWeight:'bold',
  },
  subTotal:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:5
  }
  });