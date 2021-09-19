import styled from 'styled-components';
import Image from 'next/image'


export default function Footer() {
  return (
    <Footer.Wrapper>
      <Footer.Container>
      <Footer.Branding>
          <Footer.Brand>
            <Footer.BrandingTitle>Chérie</Footer.BrandingTitle>
            <Footer.BrandingDes>NFT art marketplace</Footer.BrandingDes>
          </Footer.Brand>
          

          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare placerat leo, ac varius dui varius in. Vestibulum id efficitur eros.  </div>

          <div>Download On App Store</div>

          <div>
              2 Image
          </div>
      </Footer.Branding>
      
      
      <Footer.Links>
        <div>
          Links
        </div>
        <div>
            <ul>
                <li>Home  </li>
                <li>About Us</li>
                <li>Store</li>
                <li>Marketplace</li>

            </ul>
         </div>

        <div>
              <ul>
                      <li>Contact Us  </li>
                      <li>News</li>
                      <li>Terms & Condition</li>
                      <li>Privacy Policy</li>

                </ul>
        </div>
       

      </Footer.Links>
      <Footer.SocialLinks>
        Social Links
        <div>Subscribe to our newsletter</div>

      </Footer.SocialLinks>


      </Footer.Container>

      <Footer.Copyright>
        Copyright © Chérie.com {new Date().getFullYear()}
      </Footer.Copyright>
    </Footer.Wrapper>
  );
}

Footer.Wrapper = styled.footer`
  background-color: #272b2f;
  padding: 24px 0;
`;

Footer.Copyright = styled.p`
  text-align: center;
  margin: 0;
  font-size: 14px;
  color: #fff;
`;


Footer.Container=styled.div`
    display: flex;
    flex-direction:row;
    color:#fff;
    flex-wrap: inherit;
    text-align: left;
    padding: 10px;
    max-width: 1144px;
display: flex;
align-items: center;
justify-content: center;


`;

Footer.Branding=styled.div`
  max-width: 40%;




`;


Footer.Links=styled.div`


`;

Footer.SocialLinks=styled.div`



`;

Footer.BrandingTitle=styled.p`
  padding-top: 4px;
  padding-bottom: 0px;
  margin-right: 1rem;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.08em;

`;

Footer.BrandingDes=styled.p`
box-sizing: border-box;
margin-top: 0;
margin-bottom: 1rem;
width: 184px;
height: 21px;
left: 373px;
top: 2px;
font-family: Montserrat;
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 1px;
color: #ffffff;
padding-top: 0px;
padding-bottom: 4px;

`;

Footer.Brand=styled.div`
  width: auto;
  display: inline-block;


`


