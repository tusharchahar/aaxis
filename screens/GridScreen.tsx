import { Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useRoute } from '@react-navigation/native';
import Grid from '../components/Grid';

const Tab = createMaterialTopTabNavigator();

function GridScreen(){
    const route:any = useRoute();

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
                tabBarIndicatorStyle: { backgroundColor: 'black' },
                contentStyle:{
                    backgroundColor:'white'
                }
            })}
        >
            <Tab.Screen name = "All">{(props)=><Grid {...props} category={route.params?.typeOfProduct? route.params.typeOfProduct:''} type='all'/>}</Tab.Screen>
            <Tab.Screen name = "Shoes">{(props)=><Grid {...props} category={route.params?.typeOfProduct? route.params.typeOfProduct:''} type='shoes'/>}</Tab.Screen>
            <Tab.Screen name = "Tshirts">{(props)=><Grid {...props} category={route.params?.typeOfProduct? route.params.typeOfProduct:''} type='tshirts'/>}</Tab.Screen>
            <Tab.Screen name = "Hoodies">{(props)=><Grid {...props} category={route.params?.typeOfProduct? route.params.typeOfProduct:''} type='hoodies'/>}</Tab.Screen>
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