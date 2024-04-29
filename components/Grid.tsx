import { Text, View, StyleSheet, FlatList } from 'react-native';
import GridTile from './GridTile';
import { useState, useEffect } from 'react';
import fetchProductList from '../Utils/api/productList';
import { product } from '../types/types';

function Grid({ category }:{ type: string, category: string}) {
    const [ products, setProducts] = useState<product[]>([]);
    const [ pageNumber, setPageNumber] = useState<number>(1);
    const [ isLoading, setIsLoading] = useState<boolean>(false);
    function renderCategoryItem(itemData: {item:product}) {
        return <GridTile 
                    title = {itemData.item.name} 
                    type = {category} 
                    id = {itemData.item.id} 
                    price = {itemData.item.price} 
                    clothType = {itemData.item.type_of_clothing}
                />
    }

    const footerComponent = () => {
        return isLoading ? <Text style={{textAlign:'center'}}>Loading....</Text> : null;
    }

    const loadMoreItem = () => {
        setPageNumber(pageNumber + 1);
    }

    function getProducts(){
        setIsLoading(true);
        let data = fetchProductList(category, pageNumber);
        setProducts([...products,...data]);
        setIsLoading(false);
    }

    useEffect(() => {
        getProducts();
    }, [pageNumber])

    return  <View style={styles.background}>
                <FlatList 
                    data={products} 
                    keyExtractor={(item: any) => item.id} 
                    renderItem={renderCategoryItem} 
                    numColumns={2} 
                    ListFooterComponent={footerComponent}
                    bounces={false}
                    onEndReached={loadMoreItem}
                />
            </View>
}

export default Grid;

const styles = StyleSheet.create({
    background:{
        backgroundColor:'white',
        height:'100%',
        flex:1,
        paddingBottom:15
    }
})