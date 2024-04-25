import { View, Text, StyleSheet, FlatList } from 'react-native';
import useProductList from '../Utils/hooks/useProductList';
import GridTile from '../components/GridTile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function GridScreen(){
    const route = useRoute();

    function renderCategoryItem(itemData) {
        return <GridTile 
                    title = {itemData.item.name} 
                    type = {route.params.typeOfProduct} 
                    id = {itemData.item.id} 
                    price = {itemData.item.price} 
                    clothType = {itemData.item.type_of_clothing}
                />
    }

    function Grid({type}){
        let data = useProductList(route.params.typeOfProduct);
        if(type === 'shoes'){
            data = data.filter((product) => product.type_of_clothing === 'Shoes');
        } else if (type === 'hoodies'){
            data = data.filter((product) => product.type_of_clothing === 'Hoodie');
        } else if (type === 'tshirts'){
            data = data.filter((product) => product.type_of_clothing === 'T-Shirt');
        }
        return  <View style={styles.background}>
                    <FlatList 
                        data={data} 
                        keyExtractor={(item) => item.id} 
                        renderItem={renderCategoryItem} 
                        numColumns={2} 
                        bounces={false}
                    />
                </View>
    }

    return (
        <Tab.Navigator
            screenOptions = {({route}) => ({
                tabBarLabelStyle:{
                    textTransform: 'none', fontSize: 15, color:'black'
                },
                tabBarLabel: ({ focused }) => {
                    return focused
                        ? (<Text style = {{ fontWeight: 'bold', fontSize: 14}} >{route.name}</Text>)
                        : (<Text style = {{ fontWeight: 'normal', fontSize: 15 }} >{route.name}</Text>)
                  },
                tabBarIndicatorStyle:indicatorStyle = { backgroundColor: 'black' },
                contentStyle:{
                    backgroundColor:'white'
                }
            })}
        >
            <Tab.Screen name = "All">{(props)=><Grid {...props} type='all'/>}</Tab.Screen>
            <Tab.Screen name = "Shoes">{(props)=><Grid {...props} type='shoes'/>}</Tab.Screen>
            <Tab.Screen name = "Tshirts">{(props)=><Grid {...props} type='tshirts'/>}</Tab.Screen>
            <Tab.Screen name = "Hoodies">{(props)=><Grid {...props} type='hoodies'/>}</Tab.Screen>
        </Tab.Navigator>
    );
}

export default GridScreen;

const styles = StyleSheet.create({
    root: {
      padding: 20,
      backgroundColor: 'white',
      height:'100%',
      gap:10,
      flexDirection:'column',
      width:'100%',
    },
    slab:{
      padding:10,
      backgroundColor:'orange',
    },
    background:{
        backgroundColor:'white',
        height:'100%',
        flex:1,
        paddingBottom:15
    }
  });