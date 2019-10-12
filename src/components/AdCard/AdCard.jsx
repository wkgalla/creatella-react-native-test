import React, { useState } from "react";
import {Image, View} from 'react-native'
import {Card, ActivityIndicator} from 'react-native-paper'
import styles from './styles'

const AdCard = ({r}) => {
  const [isLoading, setLoadingState] = useState(true);
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={3}>
        <Image
          style={styles.image}
          onLoad={() => setLoadingState(false)}
          source={{uri: `http://localhost:3000/api/ads/?r=${r}`}}
        />
        {isLoading && (
          <ActivityIndicator style={styles.spinner}/>
        )}
      </Card>
    </View>
  );
};

export default AdCard;
