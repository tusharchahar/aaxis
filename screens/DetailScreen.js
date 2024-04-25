import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import useProductList from '../Utils/hooks/useProductList';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../store/context';
import { useContextSelector } from 'use-context-selector';

function DetailScreen(){
    const route = useRoute();
    const productDetails = useProductList(route.params.typeOfProduct).find((product) => product.id === route.params.productId);
    const addToCart = useContextSelector(CartContext, (v) => v.addToCart);

    function addProduct(){
        addToCart(productDetails);
        Alert.alert(
            'Added to cart',
            '1 item was added to cart',
            [{text:'OK', style: 'default'}]
        );
    }

    return (
           <ScrollView  showsVerticalScrollIndicator={false} bounces={false}>
              { productDetails &&
              <View style={styles.root}>
                <View style={styles.slab}></View>
                <View style={styles.options}>
                    <ScrollView 
                        horizontal={true} 
                        contentContainerStyle={{gap: 16}}
                        bounces={false}
                        showsHorizontalScrollIndicator={false}   
                    >
                        <View style={styles.box}></View>
                        <View style={styles.box}></View>
                        <View style={styles.box}></View>
                        <View style={styles.box}></View>
                        <View style={styles.box}></View>
                    </ScrollView>
                </View>
                <View style={styles.info}>
                    <Text>{productDetails.medium_description}</Text>
                    <Text style={styles.title}>{productDetails.name}</Text>
                    <Text>$ {productDetails.price}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.description}>{productDetails.long_description}{productDetails.long_description}</Text>
                </View>
                <View style = {styles.cart}>
                    <Pressable style={styles.button}>
                        <View style={styles.slab2}><Text style={styles.messageBoxTitleText}>Select Size <Ionicons name='chevron-down-outline' size={20} color='black'></Ionicons></Text></View>
                    </Pressable>
                    <Pressable style={styles.add} onPress={addProduct}>
                        <View style={styles.slab2}><Text style={styles.AddToCart}>Add to Cart</Text></View>
                    </Pressable>
                    <View style={styles.buyNow}>
                        <Pressable style={styles.buy}>
                            <View style={styles.slab2}><Text style={styles.messageBoxTitleText}>Buy Now</Text></View>
                        </Pressable>
                        <Pressable style={styles.heart}>
                            <View style={styles.slab2}><Ionicons style={{textAlign:'center'}} name='heart-outline' size={21} color='black'></Ionicons></View>
                        </Pressable>
                    </View>
                </View>
              </View>
              }
            </ScrollView>
    );
}

export default DetailScreen;

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 20,
        backgroundColor: 'white',
        height:'100%',
        overflow:'visible'
      },
    slab:{
      height:400,
      width:'100%',
      backgroundColor:'#F0F2F5',
      marginBottom: 20,
      borderRadius: 6,
    },
    options:{
        overflow:'visible',
        marginBottom:20
    },
    box:{
        width:145,
        height:145,
        backgroundColor:'#F0F2F5',
        borderRadius: 6,
        elevation:4,
        overflow:'hidden'
    },
    info:{
        width: '100%',
        marginBottom:10,
    },
    slab2:{
      width:'100%',
      padding:8,
      textAlignVertical:'center',
      borderRadius:12,
      marginVertical:5
    },
    container:{
        flex:1
    },
    title:{
        fontSize: 18,
        marginVertical:10,
        fontWeight:'bold'
    },
    description:{
        marginVertical:10
    },
    cart:{
        paddingBottom:50
    },
    buyNow:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    buy:{
        flex:6,
        backgroundColor:'#F0F2F5',
        borderRadius:6,
        marginVertical:5,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
    },
    heart:{
        flex:1,
        backgroundColor:'#F0F2F5',
        borderRadius:6,
        marginVertical:5,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        backgroundColor:'#F0F2F5',
        borderRadius:6,
        marginVertical:5,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        textAlignVertical:'center',
    },
    add:{
        backgroundColor:'#282B35',
        borderRadius:6,
        marginVertical:5,
        justifyContent:'center',
        alignItems:'center'
    },
    messageBoxTitleText:{
        fontWeight:'bold',
        color:'black',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:18,
    },
    AddToCart:{
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:18,
    }
  });