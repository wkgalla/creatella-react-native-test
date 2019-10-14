import React from "react";
import { connect } from "react-redux";
import {changeSortOption} from '../actions/products'
import SortMenuItem from "../components/SortMenuItem/SortMenuItem";

const SortMenuItemContainer = ({isActive, changeSortOption, value, title, dismissMenu}) => {
  const onSortItemPress = () => {
    if(isActive) {
      dismissMenu();
    }
    changeSortOption(value);
    dismissMenu();
  }
  return <SortMenuItem isActive={isActive} onSortItemPress={onSortItemPress} title={title}/>;
};

const mapStateToProps = ({ sortValue }, { value }) => {
  return {
    isActive: sortValue === value,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSortOption: (value) => dispatch(changeSortOption(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMenuItemContainer);
