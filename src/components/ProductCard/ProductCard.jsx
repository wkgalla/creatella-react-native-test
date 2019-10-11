import React from "react";
import {View} from 'react-native'
import { Card, Divider, Title, Subheading, Caption, Paragraph } from 'react-native-paper';
import styles from './styles'

const formatDate = (date) => {
  const currentDate = new Date();
  const itemDate = new Date(date);

  const oneMinute = 60 * 1000;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneWeek = oneDay * 7;
  
  const diff = (currentDate - itemDate);

  if(diff < oneMinute) {
    return `${Math.round(diff/1000)} seconds ago`
  } else if (diff < oneHour) {
    return `${Math.round(diff/oneMinute)} minutes ago`
  } else if (diff < oneDay) {
    return `${Math.round(diff/oneHour)} hours ago`
  } else if (diff < oneWeek) {
    return `${Math.round(diff/oneDay)} days ago`
  } else {
    return itemDate.toLocaleString('en-US', {dateStyle: 'short', timeStyle: 'short'})
  }
}

const ProductCard = ({item}) => {
  return (
    <View style={styles.item}>
      <Card>
        <Card.Content>
          <Title style={[styles.face, { fontSize: item.size}]}>{item.face}</Title>
          <Divider/>
          <Caption>{formatDate(item.date)}</Caption>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Paragraph>Size {item.size}</Paragraph>
            <Subheading style={styles.price}>${item.price}</Subheading>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ProductCard;
