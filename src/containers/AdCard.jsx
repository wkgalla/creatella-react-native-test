import React from "react";
import AdCard from "../components/AdCard/AdCard";

const rList = [];
const AdCardContainer = ({adIndex}) => {
  const rIndex = adIndex
  if(rIndex === rList.length) {
    let r = Math.floor(Math.random() * 10);
    if(r === rList[rList.length - 1]) {
      r = r + 1;
    }
    rList.push(r);
  }
  
  return (
    <AdCard r={rList[rIndex]}/>
  )
};

export default AdCardContainer