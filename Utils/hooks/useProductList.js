import { useEffect, useState } from 'react';
import fetchProductList from '../api/productList';

//custom hook for fetching dummy data
const useProductList = (listType) => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductList(listType);
        setProductList(data);
      } catch (error) {
        console.error('Error fetching product list:', error);
      }
    };
    fetchData();
  }, []);
  return productList;
};
export default useProductList;