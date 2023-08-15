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
  background-color: #f2f2f2;
  margin-right: 1px;
  border-right: 1px solid #f2f2f2;
`;
  return (
    <ScrollerContainer>
      <ScrollingContent>
        <ProductItem><p style={{color:'green'}}>Maize</p><h6>ff</h6></ProductItem>
        <ProductItem><p style={{color:'green'}}>Rice</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Cocoa</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Coffee</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Beans</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Matooke</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Pigeon peas</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Cow peas</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Posho</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Millet</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Sorghum</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Flour</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Chicken</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Cotton</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Eggs</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Bananas</p></ProductItem>
        {/* Seamless loop starts */}
        <ProductItem><p style={{color:'green'}}>Maize</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Rice</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Cocoa</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Coffee</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Beans</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Matooke</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Pigeon peas</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Cow peas</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Posho</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Millet</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Sorghum</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Flour</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Chicken</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Cotton</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Eggs</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Bananas</p></ProductItem>
        {/* Seamless loop starts */}
        <ProductItem><p style={{color:'green'}}>Maize</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Rice</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Cocoa</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Coffee</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Beans</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Matooke</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Pigeon peas</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Cow peas</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Posho</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Millet</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Sorghum</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Flour</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Chicken</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Cotton</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Eggs</p></ProductItem>
        <ProductItem><p style={{color:'green'}}>Bananas</p></ProductItem>
       
      
    
        {/* Add more ProductItem components as needed */}
      </ScrollingContent>
    </ScrollerContainer>
  );
}
