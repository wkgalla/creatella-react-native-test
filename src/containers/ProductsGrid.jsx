import React, {useEffect} from "react";
import { connect } from "react-redux";
import { moveFetchedProductsToList, asyncFetchProducts, loadProducts } from '../actions/products'
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";

const ADS_CARD_INTERVAL = 20;

const ProductsGridContainer = props => {
  const {isFetching, loadMore, products, loadProducts, moveFetchedProducts, fetchProducts} = props;
  useEffect(() => {
    if(!isFetching && loadMore) {
      moveFetchedProducts();
    }
  }, [isFetching, loadMore, loadProducts, moveFetchedProducts]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if(products.length === 0 && !isFetching ) {
      moveFetchedProducts();
    }
  }, [products, isFetching, moveFetchedProducts])

  return <ProductsGrid products={products} loadProducts={loadProducts}/>;
};

const mapStateToProps = ({ products, isFetching, loadMoreProducts }) => {
  const prodArrayWithAds = [];
  products.forEach((p, i) => {
    prodArrayWithAds.push({...p, prodIndex: i});
    if((i+1) % ADS_CARD_INTERVAL === 0) {
      prodArrayWithAds.push({isAd: true, adIndex: (i+1)/ADS_CARD_INTERVAL - 1});
    }
  });
  return {
    products: prodArrayWithAds,
    isFetching: isFetching,
    loadMore: loadMoreProducts
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveFetchedProducts: () => dispatch(moveFetchedProductsToList()),
    fetchProducts: () => dispatch(asyncFetchProducts()),
    loadProducts: () => dispatch(loadProducts())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsGridContainer);
