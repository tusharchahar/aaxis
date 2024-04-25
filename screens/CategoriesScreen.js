import { View, StyleSheet } from 'react-native';
import TypeNavigate from '../components/TypeNavigation';

function CategoriesScreen(){

    return (
            <View style = {styles.root}>
                <TypeNavigate value = 'New Products'></TypeNavigate>
                <TypeNavigate value = 'Upcoming Items'></TypeNavigate>
                <TypeNavigate value = 'Collectibles'></TypeNavigate>
                <TypeNavigate value = 'Current Sales'></TypeNavigate>
            </View>
    );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    root: {
      paddingHorizontal: 20,
      paddingVertical:30,
      backgroundColor: 'white',
      height:'100%',
      gap:10,
      flexDirection:'column',
      width:'100%',
    }
  });