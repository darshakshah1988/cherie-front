import React from 'react';
import styled from 'styled-components';
import NavbarShop from '../layouts/parts/NavbarShop';

import { CardContainer } from '../layouts/parts/CardContainer';
import FooterMarketPlace from '../layouts/parts/FooterMarketPlace';

type Props = {
  username: string | null;
};

// Component
export default function ShopList() {
  return (
    <ShopList.Wrapper>
      <NavbarShop></NavbarShop>   
             <CardContainer ></CardContainer>                 
           <FooterMarketPlace></FooterMarketPlace>
    </ShopList.Wrapper>
  );
}

ShopList.Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
`;





