import React from "react";
import {styled, keyframes} from "styled-components";

export default function ProductScroller() {

//   const scrollAnimation = keyframes`
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// `;

//   const ScrollerContainer = styled.div`
//     width: 100%;
//     height: 74px;
//     overflow: hidden;
//   `;

//   const ScrollingContent = styled.div`
//     white-space: nowrap;
//     animation: ${scrollAnimation} 23s linear infinite;
//   `;

//   const ProductItem = styled.div`
//     display: inline-block;
//     width: 150px;
//     height: 74px;
//     background-color: #f2f2f2;
//     margin-right: 10px;
//   `;

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-10%); /* Adjust as needed */
  }
`;

const ScrollerContainer = styled.div`
  width: 100%;
  height: 74px;
  overflow: hidden;
  border-top: 1px solid grey; /* Add top border */
  border-bottom: 1px solid grey; /* Add bottom border */
  display: flex; /* Align items center */
  align-items: center; /* Align items center */
  margin-top: 20px;
`;


const ScrollingContent = styled.div`
  white-space: nowrap;
  animation: ${scrollAnimation} 30s linear infinite;
  width: max-content; /* Set the width to the content size */
`;

const ProductItem = styled.div`
  display: inline-block;
  width: 150px;
  height: 74px;
  background-color: transparent;
  margin-right: 1px;
  border-right: 1px solid #f2f2f2;
`;
  return (
    <ScrollerContainer>
      <ScrollingContent>
        <ProductItem><p style={{color:'Darkgreen', fontWeight:'bold'}}>Maize</p><h6>ff</h6></ProductItem>
        <ProductItem><p style={{color:'orangered', fontWeight:'bold'}}>Rice</p></ProductItem>
        <ProductItem><p style={{color:'blue', fontWeight:'bold'}}>Cocoa</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Coffee</p></ProductItem>
        <ProductItem><p style={{color:'orangered', fontWeight:'bold'}}>Beans</p></ProductItem>
        <ProductItem><p style={{color:'blue', fontWeight:'bold'}}>Matooke</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Pigeon peas</p></ProductItem>
        <ProductItem><p style={{color:'orangered', fontWeight:'bold'}}>Cow peas</p></ProductItem>
        <ProductItem><p style={{color:'blue', fontWeight:'bold'}}>Posho</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Millet</p></ProductItem>
        <ProductItem><p style={{color:'orangered', fontWeight:'bold'}}>Sorghum</p></ProductItem>
        <ProductItem><p style={{color:'blue', fontWeight:'bold'}}>Flour</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Chicken</p></ProductItem>
        <ProductItem><p style={{color:'orangered', fontWeight:'bold'}}>Cotton</p></ProductItem>
        <ProductItem><p style={{color:'blue', fontWeight:'bold'}}>Eggs</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Bananas</p></ProductItem>
        {/* Seamless loop starts */}
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Maize</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Rice</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Cocoa</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Coffee</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Beans</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Matooke</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Pigeon peas</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Cow peas</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Posho</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Millet</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Sorghum</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Flour</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Chicken</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Cotton</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Eggs</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Bananas</p></ProductItem>
        {/* Seamless loop starts */}
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Maize</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Rice</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Cocoa</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Coffee</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Beans</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Matooke</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Pigeon peas</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Cow peas</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Posho</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Millet</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Sorghum</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Flour</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Chicken</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Cotton</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Eggs</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold'}}>Bananas</p></ProductItem>
       
      
    
        {/* Add more ProductItem components as needed */}
      </ScrollingContent>
    </ScrollerContainer>
  );
}
