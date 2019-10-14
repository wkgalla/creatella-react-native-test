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
import AdCard from "../../containers/AdCard";

const ProductsGrid = ({ products, loadProducts }) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) => item.isAd ? <AdCard adIndex={item.adIndex}/> : <ProductCard index={item.prodIndex}/>}
      keyExtractor={item => item.id}
      numColumns={2}
      onEndReached={loadProducts}
      onEndReachedThreshold={0.05}
      ListFooterComponent={LoadingStatus}
      ListFooterComponentStyle={{paddingVertical: 20, alignItems: 'center'}}
    />
  );
};

export default ProductsGrid;
