import React from "react";
import {View} from 'react-native'
import { ActivityIndicator, Subheading } from 'react-native-paper'
import styles from './styles'

const LoadingStatus = ({ isFetching, noMoreProducts }) => {
  if(isFetching) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator key="spinner" size="small" />
        <Subheading key="spin-text">loading...</Subheading>
      </View>
    )
  }

  if(noMoreProducts) {
    return (
      <Subheading>
        ~ end of catalogue ~
      </Subheading>
    )
  }

  return null;
};

export default LoadingStatus;
