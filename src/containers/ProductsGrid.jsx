import React, {useEffect} from "react";
import { connect } from "react-redux";
import { moveFetchedProductsToList, asyncFetchProducts, loadProducts } from '../actions/products'
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";

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
  return {
    products: products,
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
