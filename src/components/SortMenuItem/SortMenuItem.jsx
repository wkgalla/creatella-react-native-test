import React, {useState} from "react";
import { Menu, Text } from 'react-native-paper';

const SortMenuItem = ({isActive, onSortItemPress, title}) => {
  return <Menu.Item
    onPress={onSortItemPress}
    title={<Text style={{fontWeight: isActive ? 'bold' : 'normal'}}>{title}</Text>}
  />
};

export default SortMenuItem;
