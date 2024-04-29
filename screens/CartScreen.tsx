import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../store/context';
import { useContextSelector } from 'use-context-selector';
import CartTile from '../components/CartTile';
import { product } from '../types/types';


function CartScreen(){
  const cartItems = useContextSelector(CartContext, v => v.cartItems);
  const getCartTotal = useContextSelector(CartContext, v => v.getCartTotal);

  function renderItem(itemData : { item: product}) {
    return <CartTile 
                itemData = {itemData}
            />
  }

  return (
                <View style={styles.root}>
                    {cartItems.length === 0 && <Text style = {{textAlign:'center'}}>Cart is Empty</Text>}
                    <FlatList 
                        data={cartItems} 
                        keyExtractor={(item: any) => item.id} 
                        renderItem={renderItem} 
                        numColumns={1} 
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                    />
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
      position:'relative',
  },
  fee:{
    borderTopColor:'#DFE2E8',
    borderTopWidth:1,
    paddingTop:8,
    paddingBottom:50
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