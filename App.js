import 'react-native-gesture-handler';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HeaderIcon from './components/HeaderIcon';
import HeaderIconRight from './components/HeaderIconright';
import { Ionicons } from '@expo/vector-icons';
import CategoriesIcon from './components/CategoriesIcon';
import CartScreen from './screens/CartScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import GridScreen from './screens/GridScreen';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import * as SplashScreen from 'expo-splash-screen';
import { CartProvider } from './store/context';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

const Drawer = createDrawerNavigator();

//top tab navigator
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions = {({route}) => ({
        tabBarLabelStyle:{
          textTransform: 'none', fontSize: 15, color:'black'
        },
        tabBarLabel: ({focused}) => {
				return focused
					? (<Text style={{fontWeight: 'bold', fontSize: 14}}>{route.name}</Text>)
					: (<Text style={{fontWeight: 'normal', fontSize: 15}}>{route.name}</Text>)
			  },
        tabBarIndicatorStyle:indicatorStyle={ backgroundColor: 'black' }
      })}
    >
      <Tab.Screen 
        name="Men" 
        component={HomeScreen}
      />
      <Tab.Screen 
        name="Women" 
        component={HomeScreen} 
      />
      <Tab.Screen 
        name="Kids"
        component={HomeScreen} 
      />
      <Tab.Screen 
        name="Shoes" 
        component={HomeScreen} 
      />
    </Tab.Navigator>
  );
}

//drawer navigator
function Drawerr(){
  return (
    <Drawer.Navigator
      screenOptions = {({ navigation }) => ({
        headerLeft: props => <HeaderIcon onPress={navigation.toggleDrawer}/>,
        headerRight: props => <HeaderIconRight margin={true}/>,
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      })}
    >
        <Drawer.Screen name = 'Storefront' 
          component = {MyTabs}
          options = {{
            headerTitleAlign: 'left',
            headerTitleStyle: {fontSize:20},
            drawerIcon: ({color,size}) => (
              <Ionicons name='home' color={color} size={size}/>
            )
          }}
        />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
     <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          contentStyle: { backgroundColor: 'white'},
        }}
      >
        <Stack.Screen 
          name='first' 
          component={Drawerr} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name = 'second'
          component = {CategoriesScreen}
          options = {({ route,navigation }) => ({
            title:route.params.titleOfNext,
            headerTitleStyle: {fontSize:18},
            headerLeft: props => <CategoriesIcon onPress={navigation.goBack}/>,
            headerRight: props => <Ionicons name='search-outline' size={26} color='black'></Ionicons>,
          })}
        />
        <Stack.Screen 
          name = 'third' 
          component = {GridScreen}
          options = {({ route,navigation }) => ({
            title:route.params.typeOfProduct,
            headerShadowVisible: false,
            headerTitleAlign: 'left',
            headerBackTitleVisible: false,
            headerTitleStyle: {fontSize:18},
            headerLeft: props => <CategoriesIcon onPress={navigation.goBack}/>,
            headerRight: props => <HeaderIconRight />,
        })}
        />
        <Stack.Screen 
          name = 'fourth' 
          component = {DetailScreen}
          options = {({ route,navigation }) => ({
            title:route.params.name,
            headerTitleStyle: {fontSize:18},
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerLeft: props => <CategoriesIcon onPress={navigation.goBack}/>,
            headerRight: props => <HeaderIconRight />
        })}
        />
        <Stack.Screen 
          name = 'fifth' 
          component = {CartScreen}
          options = {({ navigation }) => ({
            title:'Cart',
            headerTitleStyle: {fontSize:18},
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerLeft: props => <CategoriesIcon onPress={navigation.goBack}/>,
        })}
        />
      </Stack.Navigator>
     </NavigationContainer>
    </CartProvider>
  );
}