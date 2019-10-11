import React from "react";
import { SafeAreaView } from 'react-native'
import { Provider as PaperProvider, ActivityIndicator } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store';
import ProductsGrid from "./src/containers/ProductsGrid";

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <SafeAreaView>
          <ProductsGrid/>
        </SafeAreaView>
      </PaperProvider>
    </StoreProvider>
  );
}
