import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import NavbarShop from '../layouts/parts/NavbarShop';
import FooterShop from '../layouts/parts/FooterShop';

import { CardContainer } from '../layouts/parts/CardContainer';

type Props = {
  username: string | null;
};

// Component
export default function ShopList() {
  return (
    <ShopList.Wrapper>
      <NavbarShop></NavbarShop>   
             <CardContainer ></CardContainer>                 
           <FooterShop></FooterShop>
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





