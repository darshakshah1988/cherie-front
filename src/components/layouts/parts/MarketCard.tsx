import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

export const MarketCard = () => {
    return (
        <MarketCard.Wrapper>
                <MarketCard.Media>
                    <Image src="/Product3.png" height="300px" width="300" />
                </MarketCard.Media>
                <MarketCard.Body>
                    <MarketCard.Content>
                        Yayoi Kusama, 2014
                    </MarketCard.Content>

                    <MarketCard.ContentRed>
                        Pumpkin, 1982
                    </MarketCard.ContentRed>
                   </MarketCard.Body>

        </MarketCard.Wrapper>
    )
}


MarketCard.Wrapper=styled.div`
    display: flex;
    width: 100%;
   margin-left: 10px;
    flex-direction: row;
    max-width: 300px;
    flex-wrap: wrap;
    margin-top: 20px;
    background-color: #F9F9F9;
    border-radius: 10px;

`;


MarketCard.Media=styled.div`  
   
    width: 100%;
    object-fit: cover;
    padding:0px;

`;


MarketCard.Body=styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    padding:10px;


`;
MarketCard.Content=styled.p`
    text-align: start;
    font-family: Poppins;
    font-size: 16px;
    margin: 0px;

`;
MarketCard.ContentRed=styled.p`
    text-align: start;
    font-family: Poppins;
    font-size: 16px;
    margin: 0px;
    color:  #FC6076;
`;


