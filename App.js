import React from "react";
import { SafeAreaView } from 'react-native'
import { Provider as PaperProvider, ActivityIndicator, DefaultTheme } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store';
import ProductsGrid from "./src/containers/ProductsGrid";
import Header from "./src/components/Header/Header";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'yellowgreen'
  }
};

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{backgroundColor: 'yellowgreen'}}/>
        <Header/>
        <ProductsGrid/>
        <SafeAreaView/>
      </PaperProvider>
    </StoreProvider>
  );
}
