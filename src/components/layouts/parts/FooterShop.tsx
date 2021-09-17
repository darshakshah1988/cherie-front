import styled from 'styled-components';
import Image from 'next/image';
export default function FooterShop() {
  return (
    <FooterShop.Wrapper>
      <FooterShop.Appstore>
      Download on App Store
      </FooterShop.Appstore>
      <FooterShop.StoreImagesDiv>
      <Image src='/playstore.png' width='128px' height='42px'/>
      <Image src='/playstore.png' width='128px' height='42px'/>
      </FooterShop.StoreImagesDiv>  
      <FooterShop.Image src='/soc1.png'></FooterShop.Image>
      <FooterShop.Image src='/soc2.png'></FooterShop.Image>
      <FooterShop.CopyrightDiv>
      <FooterShop.Copyright>
      © 2021 TreasureGate Pte Ltd All rights reserved.
      </FooterShop.Copyright>
      </FooterShop.CopyrightDiv>
    </FooterShop.Wrapper>
  );
}

FooterShop.Wrapper = styled.footer`
  background-color: #000000;
  padding: 24px 0;
  
`;

FooterShop.CopyrightDiv = styled.div`
width: 100%;
height: 27px;
text-align: center;
top: 15%;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 27px;
color:#F2F2F2;
margin-top:20px;
`;

FooterShop.Copyright = styled.p`


`;

FooterShop.Appstore = styled.p`
width: 100%;
height: 30px;
left: 821px;
top: 3424px;

font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 30px;
/* identical to box height, or 125% */
text-align: center;
letter-spacing: 0.005em;
color: rgba(255, 255, 255, 0.8);
`;

FooterShop.StoreImagesDiv = styled.div`
width:100%;
height:auto;
`;

FooterShop.StoreImages = styled.img`
background: url('/playstore.png');
width:120px;
height:40px;
margin-top:20px;
`;

FooterShop.Social = styled.img`
top: 6.25%;
bottom: 6.25%;
`;

FooterShop.Image = styled.img`
  width: 31.5px;
  height: 31.5px;
  left: 6.25%;
  right: 6.25%;
  top: 6.25%;
  bottom: 6.25%;
  margin-top:20px;
  margin:5px;
`;
