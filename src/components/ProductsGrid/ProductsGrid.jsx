import React from "react";
import ProductCard from '../../containers/ProductCard'
import LoadingStatus from "../../containers/LoadingStatus";
// import AdCard from '../../containers/AdCard'
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Platform,
  FlatList
} from 'react-native';
import styles from './styles'

const ProductsGrid = ({ products, loadProducts }) => {
  return (
    <FlatList
        data={products}
        renderItem={({ item, index }) => <ProductCard index={index}/>}
        keyExtractor={item => item.id}
        numColumns={2}
        onEndReached={loadProducts}
        onEndReachedThreshold={0.05}
        ListFooterComponent={LoadingStatus}
    />
  );
};

export default ProductsGrid;
