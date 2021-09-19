import NavbarShop from '../layouts/parts/NavbarShop';
import React from 'react';
import styled from 'styled-components';
import { MarketContainer } from '../layouts/parts/MarketContainer';
import FooterMarketPlace from '../layouts/parts/FooterMarketPlace';


export default function MarketList() {
    return (
      <MarketList.Wrapper>
        <NavbarShop></NavbarShop>   
             <MarketContainer></MarketContainer>            
             <FooterMarketPlace></FooterMarketPlace>
      </MarketList.Wrapper>
    );
  }

  MarketList.Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  
`;
