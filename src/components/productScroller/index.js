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
//     width: 125px;
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
  margin-top: 50px;
`;


const ScrollingContent = styled.div`
  white-space: nowrap;
  animation: ${scrollAnimation} 30s linear infinite;
  width: max-content; /* Set the width to the content size */
`;

const ProductItem = styled.div`
  display: inline-block;
  width: 125px;
  height: 74px;
  background-color: transparent;
  margin-right: 1px;
  border-right: 1px solid #f2f2f2;
`;
  return (
    <ScrollerContainer>
      <ScrollingContent>
        <ProductItem><p style={{color:'Darkgreen', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Maize</p></ProductItem>
        <ProductItem><p style={{color:'orangered', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Rice</p></ProductItem>
        <ProductItem><p style={{color:'blue', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Cocoa</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Coffee</p></ProductItem>
        <ProductItem><p style={{color:'orangered', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Beans</p></ProductItem>
        <ProductItem><p style={{color:'blue', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Matooke</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Pigeon peas</p></ProductItem>
        <ProductItem><p style={{color:'orangered', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Cow peas</p></ProductItem>
        <ProductItem><p style={{color:'blue', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Posho</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Millet</p></ProductItem>
        <ProductItem><p style={{color:'orangered', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Sorghum</p></ProductItem>
        <ProductItem><p style={{color:'blue', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Flour</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Chicken</p></ProductItem>
        <ProductItem><p style={{color:'orangered', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Cotton</p></ProductItem>
        <ProductItem><p style={{color:'blue', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Eggs</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Bananas</p></ProductItem>
        {/* Seamless loop starts */}
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Maize</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Rice</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Cocoa</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Coffee</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Beans</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Matooke</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Pigeon peas</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Cow peas</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Posho</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Millet</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Sorghum</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Flour</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Chicken</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Cotton</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Eggs</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Bananas</p></ProductItem>
        {/* Seamless loop starts */}
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Maize</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Rice</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Cocoa</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Coffee</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Beans</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Matooke</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Pigeon peas</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Cow peas</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Posho</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Millet</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Sorghum</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Flour</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Chicken</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Cotton</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Eggs</p></ProductItem>
        <ProductItem><p style={{color:'green', fontWeight:'bold', paddingTop:'25px', paddingLeft:'20px'}}>Bananas</p></ProductItem>
       
      
    
        {/* Add more ProductItem components as needed */}
      </ScrollingContent>
    </ScrollerContainer>
  );
}
